import path from "path";
import spawn from "cross-spawn";
import yargsParser from "yargs-parser";

import { appDirectory } from "./utils";

const args = process.argv.slice(3);

// const config =
//   !args.includes('--config') &&
//   !hasFile('jest.config.js')
//     ? ['--config', JSON.stringify(require('../config/jest.config'))]
//     : []

function test(): number {
  const result = spawn.sync(
    path.join(appDirectory, "./node_modules/.bin/mocha"),
    [
      "-r",
      "ts-node/register",
      "--watch-extensions",
      "ts",
      "--recursive",
      ...args
    ], // TODO improve this so that sane default mocha flags are set
    { stdio: "inherit" }
  );

  if (result.error) {
    console.error(result.error);
  }

  return typeof result.status === "number" ? result.status : 1;
}

export default test;
