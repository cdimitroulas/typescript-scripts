import fs from "fs";
import path from "path";
import spawn from "cross-spawn";

const appDirectory = fs.realpathSync(process.cwd());
// const args = process.argv.slice(3);

function format(): number {
  const result = spawn.sync(
    path.join(appDirectory, "./node_modules/.bin/prettier"),
    ["--write", "./**/*"],
    { stdio: "inherit" }
  );

  if (result.error) {
    console.error(result.error);
  }

  return typeof result.status === "number" ? result.status : 1;
}

export default format;
