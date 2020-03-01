#!/usr/bin/env node

"use strict";

import { compile, format, help, init, lint, run, test } from "./scripts";

const args = process.argv.slice(2);
const scriptName = args[0];

if (!scriptName) {
  console.error(
    "Please pass a script name as an argument to @cdimitroulas/typescript-scripts"
  );
  process.exit(1);
}

switch (scriptName) {
  case "init":
    init();
    process.exit(0);
    break;

  case "compile":
    compile();
    process.exit(0);
    break;

  case "format":
    format();
    process.exit(0);
    break;

  case "help":
    help();
    process.exit(0);
    break;

  case "lint": {
    const status = lint();
    process.exit(status);
    break;
  }

  case "run": {
    const status = run();
    process.exit(status);
    break;
  }

  case "test": {
    const status = test();
    process.exit(status);
    break;
  }

  default:
    help();
    process.exit(1);
}
