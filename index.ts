"use strict";

import { init } from "./scripts";

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

  default:
    console.log(`Unknown script '${scriptName}' called. Did you make a typo?`);
    process.exit(1);
}
