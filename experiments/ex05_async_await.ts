#!/usr/bin/env bun

// Define a delay function that returns a Promise which resolves after specified milliseconds
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Alternative implementation of delay function (commented out)
// const delay = (ms: number, msg: string) => {
//   const resolve = () => console.log(msg);
//   return new Promise(() => setTimeout(resolve, ms));
// }

// Log message indicating the start of async operations
console.log("Starting async operations...")

// Wait for 500ms before continuing to next line
await delay(500)
console.log("Step 1: Initialized")

// Wait for another 500ms before continuing to next line
await delay(500)
console.log("Step 2: Processing")

// Execute multiple promises concurrently using Promise.all()
// Each promise waits different durations before resolving with data
const data = await Promise.all([
  delay(300).then(() => "Data A"), // Resolves after 300ms with "Data A"
  delay(500).then(() => "Data B"), // Resolves after 500ms with "Data B"
  delay(200).then(() => "Data C"), // Resolves after 200ms with "Data C"
])

// Log completion message
console.log("Step 3: Completed")
// Log the results from all concurrent operations, joined by comma and space
console.log("Results:", data.join(", "))
