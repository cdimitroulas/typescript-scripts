# Typescript-Scripts

This repository is used by me to standardise various configuration for Typescript codebases
that I create. By using these scripts I am able to maintain the configuration in one
centralized place rather than repeating the same process for each codebase.

Inspired by `react-scripts` and `kcd-scripts`.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

`npm install @cdimitroulas/typescript-scripts`

## Usage

The `typescript-scripts` script will be available in `node_modules/.bin/typescript-scripts` so
you can either reference it directly by using that path or use `npx typescript-scripts`. If you
are using it from a `package.json` script, you can simply write `typescript-scripts [script name]`.

- `init`

  Initialises a repository for Typescript development. Currently it only checks that typescript
  is installed and creates a tsconfig.json file for you if it doesn't already exist.

- `lint [options] [files/dirs]`

  Lints the specified files and directories. Defaults to checking for .js and .ts extensions.

  Will use the default eslint configuration file in @cdimitroulas/typescript-scripts if
  your repository does not have an `.eslintrc` or `.eslintrc.json`. You can also choose to
  extend the eslint configuration by adding this to your config file:

  ```json
  {
    "extends": "./node_modules/@cdimitroulas/typescript-scripts/.eslintrc.json"
  }
  ```

  All the usual eslint flags can be passed to this script, they will be passed on to eslint.

- `format`

  Formats all the files in the repository using prettier.

  If you would like to run prettier automatically as a pre-commit hook on staged files then:

  1. `npm install --save-dev husky`
  2. Add this to your package.json:

     ```json
       "husky": {
         "hooks": {
           "pre-commit": "pretty-quick --staged"
         }
       }
     ```

  TODO - allow passing an argument to configure which files/folders should be formatted

- `run [entrypoint]`

  Runs typescript files using `ts-node`. Useful for creating a run/start command which
  can be used to run a project for local development.

  For example, add a script to your package.json called `dev` which runs
  `typescript-scripts run src/index.ts` (replace the path to your project entrypoint)

- `test [files/directories/globs]`

  Runs tests with mocha using `ts-node` to execute Typescript files. Pass `--watch` to watch
  for changes and rerun the tests automatically.

  Accepts all the usual [mocha CLI flags and options](https://mochajs.org/#command-line-usage).

- `test:transpileOnly`

  Same as the `test` command, except it uses the `transpileOnly` function of the TSC compiler
  to make it extra fast (this works by only transpiling the code but not checking for errors)

- `compile`

  Runs the `tsc` compiler.

  Accepts all the usual [tsc CLI flags and options](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

## Development

- `npm install`

## Packaging/Deployment

Ensure you are logged in with npm -> `npm login`

Run `npx np <minor | patch>` and go through the instructions
