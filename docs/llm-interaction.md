# LLM Model Interaction in OpenCode

This document explains how to interact with LLM models in the OpenCode codebase.

## Core LLM Interaction

The main entry point for LLM interactions is the `LLM.stream()` function in `packages/opencode/src/session/llm.ts`.

### Basic Usage

```typescript
import { LLM } from "@/src/session/llm"
import { Provider } from "@/src/provider/provider"
import type { MessageV2 } from "@/src/session/message-v2"

// Get a model
const model = await Provider.getModel("openai", "gpt-5.2")

// Create user message
const user = {
  id: "user-1",
  sessionID: "session-1",
  role: "user",
  time: { created: Date.now() },
  agent: "build",
  model: { providerID: "openai", modelID: model.id },
} satisfies MessageV2.User

// Stream LLM response
const stream = await LLM.stream({
  user,
  sessionID: "session-1",
  model,
  agent: {
    name: "build",
    mode: "primary",
    options: {},
    permission: [{ permission: "*", pattern: "*", action: "allow" }],
  },
  system: ["You are a helpful assistant."],
  abort: new AbortController().signal,
  messages: [{ role: "user", content: "Hello" }],
  tools: {},
})

// Consume the stream
for await (const chunk of stream.fullStream) {
  // Process chunks
}
```

## Provider System

The codebase supports multiple LLM providers through the provider system in `packages/opencode/src/provider/provider.ts`:

### Supported Providers

- OpenAI (gpt-5, gpt-4, etc.)
- Anthropic (claude-3.5, claude-4, etc.)
- Google (gemini-2.5, gemini-3, etc.)
- Amazon Bedrock
- Azure
- GitHub Copilot
- OpenRouter
- And many more

### Getting Available Providers

```typescript
const providers = await Provider.list()
```

### Getting a Specific Model

```typescript
const model = await Provider.getModel("openai", "gpt-5.2")
```

## Configuration

Models and providers are configured via `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "enabled_providers": ["openai", "anthropic"],
  "provider": {
    "openai": {
      "name": "OpenAI",
      "env": ["OPENAI_API_KEY"],
      "npm": "@ai-sdk/openai",
      "api": "https://api.openai.com/v1",
      "models": {
        "gpt-5.2": {
          "id": "gpt-5.2",
          "name": "GPT-5.2",
          "provider": { "npm": "@ai-sdk/openai" },
          "capabilities": {
            "temperature": true,
            "reasoning": true,
            "toolcall": true
          }
        }
      }
    }
  }
}
```

## Key Concepts

1. **Model Types**: Models have capabilities (temperature, reasoning, tool calls, etc.) and modalities (text, audio, image, video, PDF)

2. **Streaming**: The `LLM.stream()` function returns a streaming response that can be consumed chunk by chunk

3. **Tools**: You can define tools that the LLM can call using the `tools` parameter

4. **Agents**: Different agents (build, plan, general) have different permissions and behaviors

5. **Variants**: Models can have variants (e.g., "high", "low") for different performance levels

The codebase uses the Vercel AI SDK (`ai`) for LLM interactions and is designed to be provider-agnostic, allowing you to switch between different LLM providers easily.
