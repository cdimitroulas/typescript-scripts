import fs from "fs";
import path from "path";

export const appDirectory = fs.realpathSync(process.cwd());

export const nodeModulesBin = path.join(appDirectory, "./node_modules/.bin");

export const hasFile = (fileName: string): boolean =>
  fs.existsSync(path.join(appDirectory, fileName));

export const tsConfigPath = path.resolve(appDirectory, "tsconfig.json");
