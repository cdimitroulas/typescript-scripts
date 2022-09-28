#!/usr/bin/env node

"use strict";

import {
  compile,
  format,
  help,
  init,
  lint,
  run,
  test,
  testTranspileOnly
} from "./scripts";

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

  case "compile": {
    const status = compile();
    process.exit(status);
  }

  case "format": {
    const status = format();
    process.exit(status);
  }

  case "help":
    help();
    process.exit(0);

  case "lint": {
    const status = lint();
    process.exit(status);
  }

  case "run": {
    const status = run();
    process.exit(status);
  }

  case "test": {
    const status = test();
    process.exit(status);
  }

  case "test:transpileOnly": {
    const status = testTranspileOnly();
    process.exit(status);
  }

  default:
    help();
    process.exit(1);
}
