#!/usr/bin/env bun

console.log("Testing Bun.readableStreamToText(Bun.stdin.stream())...")

const stream = Bun.stdin.stream()
const input = await Bun.readableStreamToText(stream)
console.log(`Received: "${input}"`)
console.log("Done.")
