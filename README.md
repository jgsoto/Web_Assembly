# WebAssembly Calculator - Proof of Concept

## Overview

This project is a simple **Proof of Concept (PoC)** demonstrating how **WebAssembly (WASM)** can be integrated into a web application.

The application implements a basic calculator where the **user interface is built with HTML and JavaScript**, while the mathematical operations are executed inside a **WebAssembly module** compiled from **AssemblyScript**.

The purpose of this project is to demonstrate the interaction between JavaScript and WebAssembly, showing how JavaScript can invoke functions exported by a WASM module.

---

## Features

The calculator supports the following operations:

- Addition
- Subtraction
- Multiplication
- Division
- Power
- Factorial

Additionally, the application measures and displays the execution time of each operation using the browser's `performance.now()` API.

---

## Project Structure

```
wasm-calculator/
│
├── assembly/
│   └── index.ts          # AssemblyScript source code
│
├── build/
│   └── release.wasm      # Compiled WebAssembly module
│
├── index.html            # User interface
│
├── package.json
│
└── README.md
```

---

## How It Works

The execution flow is:

```
User Input
      │
      ▼
JavaScript (HTML UI)
      │
      ▼
WebAssembly Module (.wasm)
      │
      ▼
Mathematical Operation
      │
      ▼
Result Returned to JavaScript
      │
      ▼
Displayed on the Web Page
```

JavaScript is responsible for:

- Reading user input
- Loading the WebAssembly module
- Calling exported WASM functions
- Displaying the result

WebAssembly is responsible for:

- Executing all mathematical calculations

---

## Requirements

- Node.js
- npm
- AssemblyScript

---

## Installation

Install the project dependencies:

```bash
npm install
```

If AssemblyScript is not installed, install it with:

```bash
npm install --save-dev assemblyscript
```

---

## Build the WebAssembly Module

Compile the AssemblyScript source code into WebAssembly:

```bash
npm run asbuild
```

This command generates the compiled module inside the `build/` directory.

---

## Running the Project

Because browsers cannot load `.wasm` files directly from the local filesystem, the application must be served through a local web server.

Example using **http-server**:

```bash
npx http-server
```

Then open the browser at:

```
http://localhost:8080
```

or

```
http://localhost:8000
```

depending on the server being used.

---

## Example

Input:

```
Number A: 10
Number B: 20
Operation: Addition
```

Output:

```
Result: 30

Execution Time: 0.02 ms
```

---

## Technologies Used

- WebAssembly (WASM)
- AssemblyScript
- JavaScript (ES6)
- HTML5
- CSS3

---

## Purpose of the Proof of Concept

This project demonstrates:

- How AssemblyScript can be compiled into WebAssembly.
- How JavaScript loads a `.wasm` module.
- How JavaScript invokes exported WebAssembly functions.
- How computation can be delegated to WebAssembly while JavaScript handles the user interface.

Although the implemented operations are simple, the same architecture is commonly used in high-performance applications such as image processing, video editing, scientific computing, cryptography, game engines, and artificial intelligence.