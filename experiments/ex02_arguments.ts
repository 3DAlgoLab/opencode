#!/usr/bin/env bun

console.log(process.argv)
const args = process.argv.slice(2)

if (args.length === 0) {
  console.log("Usage: bun run ex02_arguments.ts <name> <age>")
  console.log("No arguments provided. Using defaults.")
  console.log("Hello, Stranger!")
  process.exit(0)
}

const name = args[0]
const age = args[1]

console.log(`Hello, ${name}!`)
if (age) console.log(`You are ${age} years old.`)
console.log(`Total arguments: ${args.length}`)
