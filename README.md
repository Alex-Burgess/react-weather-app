# react-weather-app

This application demonstrates some react basics:
- [Initialising the project](#initialising-the-project)
- [Configure ESlint and Prettier](#configure-eslint-and-prettier)


## Initialising the project
* Create a new git repo and clone: `git clone git@github.com:<repo path/name>.git`

* Configure the Node version: `echo v20.12.2 > .nvmrc; nvm use`

* Create Vite project. `npm create vite@latest web-app -- --template react-ts`

   Note: this project will include using the AWS CDK to deploy the application, hence makes an opinionated decision to split the web and infrastructure into two folders, `web-app` and `cdk-infrastructure`.

* Install and run:
```
cd web-app
npm install
npm run
```

## Configure ESLint and Prettier
To enable ESLint:
* `.eslintrc.cjs` is already pre-installed, just install the ESlint VScode extension.  Create a constant in the `App.tsx` to view a linting error.

To enable Prettier:
* Install: `npm i -D -E prettier`
* Create `.prettierrc`
    ```
    {
        "semi": true,
        "singleQuote": true,
        "trailingComma": "es5"
    }
    ```

* Prevent conflicts in rules between ESLint and Prettier: `npm i -D eslint-config-prettier`

* Add `prettier` to `extends` array in `.eslintrc.cjs`

* Create format script command in `package.json`: 
    ```
    "format": "prettier --write ./src",
    ```

* Enable IDE to format files automatically:
   * Install Prettier plugin
   * Create `.vscode/settings.json`

   ```
    {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnPaste": true, // required
        "editor.formatOnType": false, // required
        "editor.formatOnSave": true, // optional
        "editor.formatOnSaveMode": "file", // required to format on save
        "files.autoSave": "onFocusChange" // optional but recommended
    }
    ```

Advanced ESLint rules:
* Install react-specifc linting rules: `npm i -D eslint-plugin-react`
* Update the plugins, parserOptions, etc of `eslintrc.cjs`: (see file)