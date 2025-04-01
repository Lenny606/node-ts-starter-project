#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

// Get directory of the script
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GitHub repo details
const GITHUB_REPO = "Lenny606/node-ts-starter-project"; // Change this
const TARGET_DIR = "ts"; // The folder where it will be cloned

// Check if git is installed
try {
    execSync("git --version", { stdio: "ignore" });
} catch (error) {
    console.error("Error: Git is not installed. Please install Git first.");
    process.exit(1);
}

// Clone repository
console.log("Cloning repository...");
execSync(`git clone https://github.com/${GITHUB_REPO}.git ${TARGET_DIR}`, { stdio: "inherit" });

// Change directory
process.chdir(TARGET_DIR);

// Install dependencies
console.log("Installing dependencies...");
execSync("npm install", { stdio: "inherit" }); // Change to `yarn install` or `pnpm install` if needed

// Run additional setup commands (optional)
console.log("Running setup...");
execSync("npm run setup", { stdio: "inherit" }); // Replace with actual setup script if needed

console.log("Project is ready! Run `cd your-repo` to get started.");
