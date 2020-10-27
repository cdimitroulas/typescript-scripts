import path from "path";
import spawn from "cross-spawn";

import { appDirectory } from "./utils";

const args = process.argv.slice(3);

const runMochaProcess = (args: string[]) => {
  const result = spawn.sync(
    path.join(appDirectory, "./node_modules/.bin/mocha"),
    args,
    { stdio: "inherit" }
  );

  if (result.error) {
    console.error(result.error);
  }

  return typeof result.status === "number" ? result.status : 1;
};

function test(): number {
  const result = runMochaProcess([
    "-r",
    "ts-node/register",
    "--watch-extensions",
    "ts",
    "--recursive",
    ...args
  ]);

  return result;
}

function testTranspileOnly(): number {
  const result = runMochaProcess([
    "-r",
    "ts-node/register/transpile-only",
    "--watch-extensions",
    "ts",
    "--recursive",
    ...args
  ]);

  return result;
}

export default test;
export { testTranspileOnly };
