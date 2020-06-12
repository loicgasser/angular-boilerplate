# AngularBoilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Installing Yarn, our preffered package manager

- Navigate to (https://classic.yarnpkg.com/en/docs/install#windows-stable)
- Choose your operating system and follow the directions to install Yarn version 1.22.4

Notice that our project has no `package-lock.json` file, but rather a `yarn.lock` file which serves the same purpose.

Check out Yarn CLI commands and other documentation at (https://classic.yarnpkg.com/en/docs).

## Install project dependencies

Use `yarn install` to install the project dependencies.

## Nodes versions

We use nvm to be able to use the latest versions of node.

```bash
sudo apt-get update
sudo apt-get install build-essential checkinstall libssl-dev
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
source ~/.bashrc
```

Now install the target node version.

```bash
nvm install 12.16.3
nvm use 12.16.3
```

If you are using another system than Ubuntu, please read the instructions at [Node Version Manager setup](https://www.hostingadvice.com/how-to/update-node-js-latest-version/)

On Ubuntu tested with yarn `1.22.4` and node `v12.16.3`.

## Running unit tests

Run `yarn run test` to execute the unit tests via [Jest](https://jestjs.io/).

Know that Jest is built on top of [Jasmine](https://jasmine.github.io/) and that all the the Jasmine API is also available.

To enable the live reload of tests use `yarn run test:watch`.

We use the very helpful [jest-preset-angular](https://github.com/thymikee/jest-preset-angular) to configure Jest for our Angular project.

## VSCode recommended extensions

- [Angular 8 snippets](https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [SCSS Fromatter](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter)
- [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

## Linting

For VSCode please use [TSLint Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin).
It will use the local `tslint.json` file. To auto correct a file on save, add the following snippet to your workspace settings.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true
  }
}
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
