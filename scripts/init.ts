import fs from "fs";
import os from "os";
import path from "path";

import { appDirectory, tsConfigPath } from "./utils";

function initialiseTypescriptApp(): void {
  checkTypescriptIsInstalled();
  createTsConfig();
}

function checkTypescriptIsInstalled(): void {
  try {
    require(path.resolve(appDirectory, "node_modules/typescript"));
  } catch (_) {
    console.error(
      "It looks like you're trying to use TypeScript but do not have 'typescript' installed."
    );
    console.error(
      "Please install 'typescript' by running 'npm install typescript'"
    );
    process.exit(1);
  }
}

function createTsConfig(): void {
  if (tsConfigExists()) {
    console.log(
      "Your repository already contains a tsconfig.json file. If you would like this @cdimitroulas/typescript-scripts to create a new one for you then please delete it and run the init script again"
    );
    return;
  }

  const defaultTsConfig = {
    compilerOptions: {
      target:
        "ES2016" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */,
      module:
        "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
      outDir: "dist" /* Redirect output structure to the directory. */,
      noEmitOnError: true /* Do not emit outputs. */,
      strict: true /* Enable all strict type-checking options. */,
      esModuleInterop: true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    }
  };

  fs.writeFileSync(
    tsConfigPath,
    JSON.stringify(defaultTsConfig, null, 2).replace(/\n/g, os.EOL) + os.EOL
  );

  return;
}

function tsConfigExists(): boolean {
  return fs.existsSync(tsConfigPath);
}

export default initialiseTypescriptApp;
