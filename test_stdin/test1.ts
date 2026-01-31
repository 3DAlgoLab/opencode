#!/usr/bin/env bun

console.log("Testing Bun.stdin.text()...")

const input = await Bun.stdin.text()
console.log(`Received: "${input}"`)
console.log("Done.")
