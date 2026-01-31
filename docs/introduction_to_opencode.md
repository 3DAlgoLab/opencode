# Understanding the opencode Project

## What is opencode?

opencode is an AI-powered development tool built using Bun, a fast JavaScript/TypeScript runtime. It's designed as a command-line interface (CLI) application that helps developers with various coding tasks through AI assistance.

## Key Technologies

### Bun Runtime

- **Bun** is a fast all-in-one JavaScript runtime that serves as a replacement for Node.js
- Provides faster execution, built-in package management, and integrated toolchain
- Uses TypeScript for type safety and modern JavaScript features

### Project Structure

```
opencode/
├── packages/
│   ├── opencode/              # Main CLI application
│   ├── console/               # Console components
│   ├── sdk/js/                # JavaScript SDK
│   ├── ui/                    # UI components
│   ├── plugin/                # Plugin system
│   └── script/                # Script utilities
├── package.json               # Root package configuration
└── docs/                      # Documentation files
```

## How to Run the Project

### Development Mode

```bash
# From project root
bun run dev

# Or from the main package directory
cd packages/opencode
bun run dev
```

### Direct Execution

```bash
# Run directly with Bun
bun run --conditions=browser ./src/index.ts
```

## Main Entry Points

1. **Primary CLI**: `packages/opencode/src/index.ts`
   - Sets up the command-line interface using yargs
   - Registers all available commands

2. **Binary Launcher**: `packages/opencode/bin/opencode`
   - Determines which platform-specific binary to run
   - Acts as a wrapper that finds and executes the correct executable

## Building the Project

The build process creates platform-specific binaries:

```bash
# Build for current platform only
bun run script/build.ts

# Build all platforms
bun run script/build.ts --single

# Skip installation step
bun run script/build.ts --skip-install
```

This generates executables for different operating systems and architectures (Linux, macOS, Windows on ARM64 and x64).

## Key Features

The opencode CLI supports various commands like:

- `run` - Execute code or tasks
- `generate` - Generate code templates or files
- `auth` - Authentication management
- `agent` - AI agent functionality
- `serve` - Start development servers
- `models` - Manage AI models
- And many more

## Why Bun?

Bun was chosen for its:

- **Performance**: Significantly faster than Node.js
- **Developer Experience**: Built-in tooling reduces need for external dependencies
- **TypeScript Support**: Native TypeScript compilation and type checking
- **Cross-platform Building**: Easy creation of executables for multiple platforms

## Running the Application

```bash
# After building, you can run:
opencode [command] [options]

# Example:
opencode run --help
opencode generate --help
```

The tool is designed to be a comprehensive development assistant that leverages AI models to help developers with coding tasks, code generation, and other development workflows.
