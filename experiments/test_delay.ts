#!/usr/bin/env bun

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

console.log("Starting...")
console.log("About to call delay(1000)")
await delay(1000)
console.log("Done!")

// Let's also test with a more complex example
async function test() {
  console.log("Testing promise resolution:")

  const promise = new Promise((resolve, reject) => {
    console.log("Promise executor called")
    setTimeout(() => {
      console.log("Resolving...")
      resolve("Hello World")
    }, 500)
  })

  console.log("Before await")
  const result = await promise
  console.log("After await:", result)
}

await test()
