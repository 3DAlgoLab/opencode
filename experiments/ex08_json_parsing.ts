#!/usr/bin/env bun

const sampleData = {
  users: [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "user" },
  ],
  count: 3,
  timestamp: new Date().toISOString(),
}

const jsonString = JSON.stringify(sampleData, null, 2)
console.log("JSON String:")
console.log(jsonString)

const parsed = JSON.parse(jsonString)

console.log("\nParsed Data:")
console.log(`Total users: ${parsed.count}`)

for (const user of parsed.users) {
  console.log(`  - ${user.name} (${user.role})`)
}
