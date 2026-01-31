#!/usr/bin/env bun

const divide = (a: number, b: number): number => {
  if (b === 0) throw new Error("Division by zero")
  return a / b
}

const result1 = divide(10, 2)
console.log(`10 / 2 = ${result1}`)

const result2 = divide(10, 0)
console.log(`10 / 0 = ${result2}`)

console.log("All operations completed successfully")
