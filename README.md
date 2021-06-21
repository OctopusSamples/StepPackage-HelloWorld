Step packages are an evolution in the development of Octopus steps. Step packages address many of the concerns that made it difficult to implement new functionality as Octopus scaled up in terms of internal team size and external surface area. In particular, step packages are:

* Developed outside the main Octopus code base.
* Tested as isolated and independent projects.
* Distributed on their own independent timelines.
* Independently versioned, with each version able to be run side-by-side.

This sample project provides a starting point for anyone looking to create a new step package. The code in this repository defines a "Hello World" target and step to demonstrate a minimal step package implementation.

## Project directory structure

The directory structure of a step package project is shown below:

* `\`
  * `steps`
    * `<step-name>`
      * `src` 
  * `targets`
    * `<target-name>`
      * `src`
  * `.eslintignore` - The [ESLint ignore file](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file).
  * `.eslintrc.js` - The [ESLint configuration file](https://eslint.org/docs/user-guide/configuring/).
  * `.gitignore` - The [git ignore file](https://git-scm.com/docs/gitignore).
  * `.prettierrc` - The [prettier configuration file](https://prettier.io/docs/en/configuration.html).
  * `global.d.ts` - The [TypeScript global libraries](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html).
  * `package.json` - The [Node.js project file](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/).
  * `package-lock.json` - The specific package versions to be retrieved by npm.
  * `tsconfig.json` - The [TypeScript compiler options file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).