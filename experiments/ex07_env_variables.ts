#!/usr/bin/env bun

const home = process.env.HOME
const path = process.env.PATH
const nodeEnv = process.env.NODE_ENV

console.log("Environment Variables:")
console.log(`HOME: ${home || "not set"}`)
console.log(`PATH length: ${path?.length || 0} characters`)
console.log(`PATH: ${path||""}`)
console.log(`NODE_ENV: ${nodeEnv || "not set"}`)

const customEnv = process.env.MY_CUSTOM_VAR || "default_value"
console.log(`MY_CUSTOM_VAR: ${customEnv}`)
