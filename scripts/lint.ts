import path from "path";
import spawn from "cross-spawn";
import yargsParser from "yargs-parser";

import { appDirectory, hasFile } from "./utils";

const args = process.argv.slice(3);
const parsedArgs = yargsParser(args);

function lint(): number {
  const configPath = getEslintConfigPath();
  const filesToLint = getFilesToLint();
  const otherArgs = args.filter(arg => !parsedArgs._.includes(arg));

  const result = spawn.sync(
    path.join(appDirectory, "./node_modules/.bin/eslint"),
    ["--config", configPath, "--ext", ".js,.ts", ...otherArgs, ...filesToLint],
    { stdio: "inherit" }
  );

  if (result.error) {
    console.error(result.error);
  }

  return typeof result.status === "number" ? result.status : 1;
}

function getEslintConfigPath(): string {
  if (parsedArgs.config) {
    return parsedArgs.config;
  }

  if (hasFile(".eslintrc")) {
    return ".eslintrc";
  }

  if (hasFile(".eslintrc.json")) {
    return ".eslintrc.json";
  }

  return path.join(__dirname, "../.eslintrc.json");
}

function getFilesToLint(): string[] {
  const filesToLint = parsedArgs._.map(fileName =>
    path.join(appDirectory, fileName)
  );

  return filesToLint.length > 0 ? filesToLint : ["."];
}

export default lint;
