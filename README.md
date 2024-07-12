# react-weather-app

This application demonstrates some react basics:

- [Initialising the project](#initialising-the-project)
- [Configuring ESlint and Prettier](#configuring-eslint-and-prettier)
- [Creating a component](#creating-a-component)
- [Styling components](#styling-components)

## Initialising the project

1. Create a new git repo and clone:
   ```
   git clone git@github.com:<repo path/name>.git
   ```
1. Configure the Node version:
   ```
   echo v20.12.2 > .nvmrc
   nvm use
   ```
1. Create a React project using [Vite](https://vitejs.dev/):

   ```
   npm create vite@latest web-app -- --template react-ts
   ```

   Note: this project will include using the AWS CDK to deploy the application, hence makes an opinionated decision to split the web and infrastructure into two folders, `web-app` and `cdk-infrastructure`.

1. Install and run:
   ```
   cd web-app
   npm install
   npm run dev
   ```

## Configuring ESLint and Prettier

[ESLint](https://eslint.org/) helps to find and fix problems in your JavaScript code. It is already pre-installed but in a legacy way.

1. Delete `.eslintrc.cjs`.

1. Uninstall packages:
   ```
   npm uninstall eslint @eslint/js @types/eslint__js typescript typescript-eslint
   ```
1. Install latest packages:
   ```
   npm install --save-dev eslint @eslint/js @types/eslint__js typescript typescript-eslint
   ```
1. Create `eslint.config.js`

   ```
   // @ts-check

   import eslint from '@eslint/js';
   import tseslint from 'typescript-eslint';

   export default tseslint.config(
   eslint.configs.recommended,
   ...tseslint.configs.recommended,
   );
   ```

1. Test using CLI:
   ```
   npx eslint .
   ```
1. Install the VScode ESlint extension and test (Create an unused constant in a tsx file).

[Prettier](https://prettier.io/) is an opininoated code formatter.

1. Install:

   ```
   npm i -D -E prettier
   ```

1. Create `.prettierrc`
   ```
   {
       "semi": true,
       "singleQuote": true,
       "trailingComma": "es5"
   }
   ```
1. Install Prettier plugin to enable IDE to format files automatically when file is saved. Create `.vscode/settings.json`:
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
1. Create format script command in `package.json`:
   ```
   "format": "prettier --write ./src",
   ```
1. Format all files:
   ```
   npm run format
   ```

## Creating a component

Components are one of the core concepts of React. They are JavaScript functions, written in JSX, which contains the content that will be rendered by the browser.

The project has a component called `<TodaysDate>` which renders today's date.

The component is created in it's own file [TodaysDate.tsx](/web-app/src/components/TodaysDate.tsx), so that it can be used in as many places as required.

It is imported by the [App.tsx](/web-app/src/App.tsx) file, so that it is rendered on the main page.

## Styling Components

A component library, such as [Material UI](https://mui.com/) is often used to accelerate the development of a project.

To install material:

```
npm install @mui/material @emotion/react @emotion/styled
```

The [SelectLocation.tsx](/web-app/src/components/SelectLocation.tsx) component is an example of using the Select MUI component.

Components can be styled using CSS. [TailwindCSS](https://tailwindcss.com/) is a framework that greatly improves managing CSS in a project. [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

1. Install Tailwind CSS:
   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
1. Configure your template paths in `tailwind.config.js`:
   ```
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   ```
1. Add the Tailwind directives to your `src/index.css`, and remove unused styles:
   ```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
