#!/usr/bin/env bun

const prompt = "What is your name? "
process.stdout.write(prompt)

// For interactive input, we should properly handle line-by-line reading
// Since Bun doesn't have a built-in readline, we can use a workaround:
// Read all stdin and then extract the first line, but be aware that this will wait for EOF

const input = await Bun.stdin.text()
const name = input.trim()

if (name === "") {
  console.log("\nNo name entered. Goodbye!")
  process.exit(0)
}

console.log(`\nHello, ${name}! Welcome to the CLI.`)

// Note: When running this script, you need to signal EOF after typing your input:
// - Press Ctrl+D (Linux/Mac) or Ctrl+Z then Enter (Windows) to indicate end of input
