# Code Structure Summary for opencode Project

## Overview

This is a Bun-based CLI application named "opencode" with a monorepo structure containing multiple packages.

## Main Packages

- `packages/opencode` - The core CLI application
- `packages/console/*` - Console-related components
- `packages/sdk/js` - JavaScript SDK
- `packages/ui` - UI components
- `packages/plugin` - Plugin system
- `packages/script` - Script utilities
- `packages/util` - Utility functions

## Entry Points

### 1. Primary CLI Entry Point

- **File**: `packages/opencode/src/index.ts`
- This is the main application entry point that sets up the yargs CLI parser
- Registers all available commands through `cli.command()` calls

### 2. Binary Entry Point

- **File**: `packages/opencode/bin/opencode`
- A Node.js script that acts as a launcher
- Determines the correct platform-specific binary to execute based on OS/architecture
- Falls back to running the source code directly if needed

### 3. Main Build Script

- **File**: `packages/opencode/script/build.ts`
- Used for building platform-specific binaries
- Creates cross-platform executables for Linux, macOS, and Windows (ARM64 and x64 architectures)

## Available Commands

The CLI supports numerous commands including:

- `run`, `generate`, `auth`, `agent`, `serve`, `web`, `models`, `stats`, etc.
- All commands are defined in `packages/opencode/src/cli/cmd/` directory
- The main entry point registers all these commands via yargs

## Running the Application

- Development: `bun run dev` (in root or packages/opencode)
- Direct execution: `bun run --conditions=browser ./src/index.ts`
- Using the installed binary: `opencode [command]`

The application is designed as a multi-platform CLI tool with cross-compilation support for various operating systems and architectures.
