#!/usr/bin/env bun

const greeting = "Hello from Bun CLI!"
console.log(greeting)
console.log("Current working directory:", process.cwd())
console.log("Runtime:", Bun.version)
