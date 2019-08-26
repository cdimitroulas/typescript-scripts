import fs from "fs";
import path from "path";
import spawn from "cross-spawn";
import yargsParser from "yargs-parser";

const appDirectory = fs.realpathSync(process.cwd());
const args = process.argv.slice(2);
const parsedArgs = yargsParser(args);

function lint(): number {
  const configPath = getEslintConfigPath();
  const filesToLint = getFilesToLint();
  const otherArgs = args.filter(arg => !parsedArgs._.includes(arg));

  const result = spawn.sync(
    path.join(__dirname, "../node_modules/.bin/eslint"),
    ["--config", configPath, "--ext", ".js,.ts", ...otherArgs, ...filesToLint],
    { stdio: "inherit" }
  );

  return result.status ? result.status : 0;
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

function hasFile(fileName: string): boolean {
  return fs.existsSync(path.join(appDirectory, fileName));
}

export default lint;
