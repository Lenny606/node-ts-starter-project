# Node TypeScript Starter Project

A starter project for Node.js applications using TypeScript, Jest for testing, and ESLint for code quality.

## Prerequisites

- Node.js (v23 or higher recommended)
- npm

## Setup

### 1. Initialize Project and Install Dependencies

```bash
# Initialize npm project
npm init -y

# Install TypeScript and related dependencies
npm install typescript @types/node @tsconfig/node23 --save-dev

# Install testing dependencies
npm install jest ts-jest @types/jest --save-dev

# Install development tools
npm install tsc-watch dotenv-cli --save-dev
```

### 2. Code Quality Tools

```bash
# Initialize ESLint configuration
npm init @eslint/config@latest

# Install linting and formatting tools
npm install eslint-plugin-prettier eslint-config-prettier prettier eslint-plugin-jest --save-dev
```

# Download starter
```bash
npx github:Lenny606/node-ts-starter-project
```
## Available Scripts

- `npm run test` - Run Jest tests
- `npm run build` - Build the TypeScript project
- `node dist/index.js` - Run the compiled JavaScript

## Configuration

This project uses the following configuration files:
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.js` - ESLint configuration
- `jest.config.js` - Jest configuration

## License

MIT