Step packages are an evolution in the development of Octopus steps. Step packages address many of the concerns that made it difficult to implement new functionality as Octopus scaled up in terms of internal team size and external surface area. In particular, step packages are:

* Developed outside the main Octopus code base.
* Tested as isolated and independent projects.
* Distributed on their own independent timelines.
* Independently versioned, with each version able to be run side-by-side.

This sample project provides a starting point for anyone looking to create a new step package. The code in this repository defines a "Hello World" target and step to demonstrate a minimal step package implementation.

## Project directory structure

The directory structure of a step package project is shown below:

* `\`
  * `steps` - A directory containing the step definitions.
    * `<step-name>` - A directory containing the definition of a step. There may be many of these directories to define many steps within a single step package.
      * `__tests__` - The directory containing step tests.
        * `executor.spec.ts` - Tests validating the logic in the `executor.ts` file.
      * `executor.ts` - The code to be executed when a step is run by Octopus.
      * `inputs.ts` - The definition of the inputs required by the step.
      * `logo.svg` - The image to be displayed in the Octopus web UI for the step.
      * `metadata.json` - The step metadata.
      * `ui.ts` - The step UI definition.
      * `validation.ts` - The step validation rules.
  * `targets`
    * `<target-name>`
      * `__tests__` - The directory containing step tests.
        * `executor.spec.ts` - Tests validating the logic in the `executor.ts` file.
      * `executor.ts` - The code to be executed when a target healthcheck is run by Octopus.
      * `inputs.ts` - The definition of the inputs required by the target.
      * `logo.svg` - The image to be displayed in the Octopus web UI for the target.
      * `metadata.json` - The target metadata.
      * `ui.ts` - The target UI definition.
      * `validation.ts` - The target validation rules.
  * `.eslintignore` - The [ESLint ignore file](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file).
  * `.eslintrc.js` - The [ESLint configuration file](https://eslint.org/docs/user-guide/configuring/).
  * `.gitignore` - The [git ignore file](https://git-scm.com/docs/gitignore).
  * `.prettierrc` - The [prettier configuration file](https://prettier.io/docs/en/configuration.html).
  * `global.d.ts` - The [TypeScript global libraries](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html).
  * `package.json` - The [Node.js project file](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/).
  * `package-lock.json` - The [specific package versions](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json) to be retrieved by npm.
  * `tsconfig.json` - The [TypeScript compiler options file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

## Creating a new step

Creating a new step involves creating the following files under the `steps/<step-name>/src` directory. In the case of this sample step package, we'll create them under `steps/hello-world/src`:

* `metadata.json`
* `inputs.ts`
* `executor.js`
* `ui.ts`
* `validation.ts`

### `metadata.json`

