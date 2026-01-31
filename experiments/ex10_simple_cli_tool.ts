#!/usr/bin/env bun

const args = process.argv.slice(2)

if (args.length === 0 || args[0] === "--help") {
  console.log("Simple Task CLI")
  console.log("Commands:")
  console.log("  list         - Show all tasks")
  console.log("  add <text>   - Add a new task")
  console.log("  clear        - Remove all tasks")
  console.log("\nUsage: bun run ex10_simple_cli_tool.ts <command>")
  process.exit(0)
}

const dataFile = "./experiments/tasks.json"
const file = Bun.file(dataFile)
const exists = await file.exists()

let tasks: string[] = []
if (exists) {
  const content = await file.text()
  tasks = JSON.parse(content)
}

const command = args[0]

if (command === "list") {
  if (tasks.length === 0) {
    console.log("No tasks found. Add one with: add <task>")
  } else {
    console.log("Tasks:")
    for (const [i, task] of tasks.entries()) {
      console.log(`  ${i + 1}. ${task}`)
    }
  }
} else if (command === "add") {
  const text = args.slice(1).join(" ")
  if (text === "") {
    console.log("Error: No task text provided")
    process.exit(1)
  }
  tasks.push(text)
  await Bun.write(dataFile, JSON.stringify(tasks, null, 2))
  console.log(`Added: "${text}"`)

} else if (command === "clear") {
  
  await Bun.write(dataFile, "[]")
  console.log("All tasks cleared")

} else {
  console.log(`Unknown command: ${command}`)
  console.log("Run with --help for usage")
  process.exit(1)
}
