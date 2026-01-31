# Learning Bun: A Beginner's Guide

## What is Bun?

Bun is a fast all-in-one JavaScript runtime and toolchain designed as a drop-in replacement for Node.js. It's written in Zig and powered by JavaScriptCore, providing significant performance improvements.

## Key Features

- **Fast Runtime**: 4x faster startup than Node.js
- **Built-in Package Manager**: `bun install` with 30x faster installs
- **Integrated Toolchain**: Test runner, bundler, and transpiler built-in
- **TypeScript Support**: Native TypeScript compilation and type checking
- **ESM Modules**: Full support for ECMAScript modules

## Quick Start

### Installation

```bash
curl -fsSL https://bun.sh/install | bash
```

### Basic Commands

```bash
# Run a file directly
bun index.tsx

# Execute package scripts
bun run dev
bun run test

# Build projects
bun build ./index.ts --outdir ./out
```

## Main Documentation Resources

- **Main Documentation**: https://bun.sh/docs
- **Runtime Docs**: https://bun.sh/docs/runtime - Covers executing files and CLI usage
- **Bundler Docs**: https://bun.sh/docs/bundler - Learn about bundling JavaScript/TypeScript code

## Learning Path

1. **Start with basic execution**: `bun run <file>`
2. **Learn package.json scripts**: `bun run <script>`
3. **Understand bundling**: `bun build`
4. **Explore advanced features**: plugins, configuration, and testing

## Why Use Bun?

Bun was chosen for the opencode project because:

- **Performance**: Significantly faster than Node.js
- **Developer Experience**: Built-in tooling reduces need for external dependencies
- **TypeScript Support**: Native TypeScript compilation and type checking
- **Cross-platform Building**: Easy creation of executables for multiple platforms

The documentation is comprehensive and well-structured, making it easy to learn Bun from beginner to advanced levels.
