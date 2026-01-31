# Experiments - TypeScript CLI Samples

This folder contains 10 sample TypeScript CLI programs to help learn Bun runtime and console programming patterns used in this codebase.

## Quick Start

Run any example with Bun:

```bash
bun run experiments/ex01_hello_cli.ts
```

## Sample Files

| File                        | Description                                             |
| --------------------------- | ------------------------------------------------------- |
| **ex01_hello_cli.ts**       | Basic console output & Bun runtime info                 |
| **ex02_arguments.ts**       | Reading command line arguments (`process.argv`)         |
| **ex03_user_input.ts**      | Interactive input from stdin                            |
| **ex04_file_io.ts**         | Reading/writing files with `Bun.file()` & `Bun.write()` |
| **ex05_async_await.ts**     | Async operations & Promise.all                          |
| **ex06_fetch_api.ts**       | HTTP requests with fetch API                            |
| **ex07_env_variables.ts**   | Accessing environment variables                         |
| **ex08_json_parsing.ts**    | Working with JSON (stringify/parse)                     |
| **ex09_error_handling.ts**  | Error handling with early returns                       |
| **ex10_simple_cli_tool.ts** | Complete CLI tool (todo list) combining all concepts    |

## Usage Examples

```bash
# Basic hello world
bun run experiments/ex01_hello_cli.ts

# With arguments
bun run experiments/ex02_arguments.ts Alice 25

# Interactive input
bun run experiments/ex03_user_input.ts

# File operations
bun run experiments/ex04_file_io.ts

# Async demo
bun run experiments/ex05_async_await.ts

# HTTP request
bun run experiments/ex06_fetch_api.ts

# Environment variables
bun run experiments/ex07_env_variables.ts

# JSON handling
bun run experiments/ex08_json_parsing.ts

# Error handling (will throw error)
bun run experiments/ex09_error_handling.ts

# CLI tool - add task
bun run experiments/ex10_simple_cli_tool.ts add "Learn TypeScript"

# CLI tool - list tasks
bun run experiments/ex10_simple_cli_tool.ts list

# CLI tool - help
bun run experiments/ex10_simple_cli_tool.ts --help
```

## Code Style

These examples follow the repo's style conventions:

- Single word variable names where possible
- `const` instead of `let`
- Early returns instead of else statements
- No explicit type annotations (rely on inference)
- Bun APIs preferred (e.g., `Bun.file()`, `Bun.write()`)

## Learning Path

1. Start with **ex01** through **ex03** for basics
2. Move to **ex04** through **ex08** for specific features
3. Study **ex09** for error handling patterns
4. Review **ex10** to see how everything works together in a real CLI tool
