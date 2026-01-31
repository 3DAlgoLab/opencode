#!/usr/bin/env bun

const url = "https://api.github.com/repos/oven-sh/bun"

console.log(`Fetching: ${url}`)

const response = await fetch(url)

if (!response.ok) {
  console.log(`Error: ${response.status} ${response.statusText}`)
  process.exit(1)
}

const repo = await response.json()

console.log("\nRepository Info:")
console.log(`Name: ${repo.name}`)
console.log(`Stars: ${repo.stargazers_count.toLocaleString()}`)
console.log(`Language: ${repo.language}`)
console.log(`Description: ${repo.description}`)
