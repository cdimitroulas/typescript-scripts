import path from "path";
import spawn from "cross-spawn";

import { appDirectory } from "./utils";

const args = process.argv.slice(3);

function run(): number {
  const result = spawn.sync(
    path.join(appDirectory, "./node_modules/.bin/ts-node"),
    args,
    { stdio: "inherit" }
  );

  if (result.error) {
    console.error(result.error);
  }

  return typeof result.status === "number" ? result.status : 1;
}

export default run;
