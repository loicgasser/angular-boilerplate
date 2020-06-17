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

## Guidelines to creating components

We always try to create `DUMB` and stateless components whenever it is possible to do so. We try to limit the number of `SMART` components to a minimum. Please read this [article](https://medium.com/@jtomaszewski/how-to-write-good-composable-and-pure-components-in-angular-2-1756945c0f5b) if you are not familiar with the concept.

## ng-boostrap

We are using ng-boostrap to avoid having to include jQuery in our build.

Modules must be imported in `src/app/app.module.ts`. A list of available `modules` are available [here](https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/index.ts).

You'll find the documentation [here](https://ng-bootstrap.github.io/#/components/accordion/examples)

## font-awesome

For font-awesome we are using [angular-fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/angular).

Please follow the documentation to use fontawesome in this project. [Cheatsheet](https://fontawesome.com/cheatsheet)

## angular-google-map

This project uses [angular-google-map](https://angular-maps.com/api-docs/agm-core/) library.

## ng-recaptcha

https://www.npmjs.com/package/ng-recaptcha

## CSS naming convention with BEM

In this project we try to follow [the BEM Convention](https://medium.freecodecamp.org/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849).
More specifically, we follow [these Guidelines](https://medium.com/fed-or-dead/battling-bem-5-common-problems-and-how-to-avoid-them-5bbd23dee319).

## Shared CSS naming

All re-usable CSS defined in `src/styles/` must be prefixed with `app-`.

## CSS Standards

https://github.com/AtuzSolution/web-neighbors/wiki/CSS-Standards

## State managment with Redux and ngrx

In the project we use ngrx to manage the state of the application. The store can be found in `src/app/shared/store/`.

Relevant documentation can be found [here](https://ngrx.io/). Beware, **not all data needs to live in the store**. If you are unsure about how this works or what to keep in the store, ask your beloved CTO.

With `ngrx` 8, a lot of syntactic sugar [was introduced](https://medium.com/ngrx/announcing-ngrx-version-8-ngrx-data-create-functions-runtime-checks-and-mock-selectors-a44fac112627). Have a look at it if you are familiar with `Redux` but don't know the `"new"` syntax.

I recommend that you add [Redux dev tool extension](https://github.com/zalmoxisus/redux-devtools-extension/) to your browser.

## Exposing the state in facades

The preferred way of exposing the state of the application is through facades (`Observables`). Facades are found at the same level as pages and use the infix `.facade.`. The concept of facades can be found [here](https://medium.com/@thomasburlesonIA/push-based-architectures-with-rxjs-81b327d7c32d).

The idea is to keep the logic that goes into the components to a bare minimum and instead put this logic in the facades by exposing Observables. If you've done a good job using facades, you should be able to use the `OnPush` change detection stategy in all your components.