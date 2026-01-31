#!/usr/bin/env bun

const filePath = "./experiments/test_output.txt"
const content = `Timestamp: ${new Date().toISOString()}\nBun version: ${Bun.version}\nPlatform: ${process.platform}`

await Bun.write(filePath, content)
console.log(`Wrote ${content.length} characters to ${filePath}`)

const file = Bun.file(filePath)
const text = await file.text()

console.log("\nFile contents:")
console.log(text)
