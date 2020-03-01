import path from "path";
import spawn from "cross-spawn";

import { nodeModulesBin } from "./utils";

const args = process.argv.slice(3);

function compile(): number {
  const result = spawn.sync(path.join(nodeModulesBin, "tsc"), args, {
    stdio: "inherit"
  });

  if (result.error) {
    console.error(result.error);
  }

  return typeof result.status === "number" ? result.status : 1;
}

export default compile;
