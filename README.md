# Typescript-Scripts

This repository is used by me to standardise various configuration for Typescript codebases
that I create. By using these scripts I am able to maintain the configuration in one
centralized place rather than repeating the same process for each codebase.

Inspired by `react-scripts` and `kcd-scripts`.

## Installation

`npm install @cdimitroulas/typescript-scripts`

## Usage

The `typescript-scripts` script will be available in `node_modules/.bin/typescript-scripts` so
you can either reference it directly by using that path, use `npx typescript-scripts` or if you
are using it within `package.json` simply write `typescript-scripts [script name]`.

- `typescript-scripts init`

  Initialises a repository for Typescript development. Currently it only checks that typescript
  is installed and creates a tsconfig.json file for you if it doesn't already exist.

- `typescript-scripts lint [options] [files/dirs]`

  Lints the specified files and directories. Defaults to checking for .js and .ts extensions.

  Will use the default eslint configuration file in @cdimitroulas/typescript-scripts if
  your repository does not have an `.eslintrc` or `.eslintrc.json`. You can also choose to
  extend the eslint configuration by adding this to your config file:

  ```
  {"extends": "./node_modules/@cdimitroulas/typescript-scripts/.eslintrc.json"}
  ```

  All the usual eslint flags can be passed to this script, they will be passed on to eslint.

- `typescript-scripts format`

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

- `typescript-scripts test [files/directories/globs]`

  Runs tests with mocha using `ts-node` to execute Typescript files. Pass `--watch` to watch
  for changes and rerun the tests automatically.

  Accepts all the usual [mocha CLI flags and options](https://mochajs.org/#command-line-usage).

- compile (TODO)
