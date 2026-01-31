#!/usr/bin/env bun

// Import the readline module from Node.js (Bun supports this)
import * as readline from "node:readline/promises"
import { stdin, stdout } from "node:process"

const rl = readline.createInterface({ input: stdin, output: stdout })

try {
  const name = await rl.question("What is your name? ")

  if (name.trim() === "") {
    console.log("\nNo name entered. Goodbye!")
    process.exit(0)
  }

  console.log(`\nHello, ${name}! Welcome to the CLI.`)
} finally {
  rl.close()
}
