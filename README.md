# Typescript-Scripts

This repository is used by me to standardise various configuration for Typescript codebases
that I create. By using these scripts I am able to maintain the configuration in one
centralized place rather than repeating the same process for each codebase.

Inspired by `react-scripts` and `kcd-scripts`.


## Scripts

- `@cdimitroulas/typescript-scripts init`

    Initialises a repository for Typescript development. Currently it only checks that typescript
    is installed and creates a tsconfig.json file for you if it doesn't already exist.

- `@cdimitroulas/typescript-scripts lint [options] [files/dirs]`

    Lints the specified files and directories. Defaults to checking for .js and .ts extensions.

    Will use the default eslint configuration file in @cdimitroulas/typescript-scripts if
    your repository does not have an `.eslintrc` or `.eslintrc.json`. You can also choose to
    extend the eslint configuration by adding this to your config file:
    ```
    {"extends": "./node_modules/@cdimitroulas/typescript-scripts/.eslintrc.json"}
    ```

    All the usual eslint flags can be passed to this script, they will be passed on to eslint.

- compile (TODO)

- test (TODO)
