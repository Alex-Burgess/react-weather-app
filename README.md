# react-weather-app

This application demonstrates some react basics. It is meant to only be run locally and not deployed to infrastructure.

- [Initialising the project](#initialising-the-project)
- [Configuring ESlint and Prettier](#configuring-eslint-and-prettier)
- [Creating a component](#creating-a-component)
- [Styling components](#styling-components)
- [Adding browser routing and navigation](#adding-browser-routing-and-navigation)
- [Managing state](#managing-state)
- [Making API Requests](#making-api-requests)

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

Components are one of the core concepts of React. They are JavaScript functions, written in JSX, which contain the content that will be rendered by the browser.

The project has a component called `<DayAndDate>` which renders today's date. A property (or prop) is provide to get the date of a number of days in the future.

The component is created in it's own file [DayAndDate.tsx](/web-app/src/components/DayAndDate.tsx), so that it can be used in as many places as required.

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
1. Start using Tailwind utility classes to style your content.

## Adding browser routing and navigation

[React router](https://reactrouter.com/en/main) is the most popular library for implementing routing.

1. Install react router
   ```
   npm install react-router-dom
   ```
1. Add the Router with the `createBrowserRouter` function and `RouterProvider` component. An example of this is shown in the [main.tsx](/web-app/src/main.tsx). This must include a root layout component, for which the [App.tsx](/web-app/src/App.tsx) file was used.
1. Add an Error page for any routes that don't exist. The [Error.tsx](/web-app/src/routes/Error.tsx) is an example of a page which is added to the `errorElement` attribute in the `createBrowserRouter` function.
1. Create new routes by adding child component objects to the `createBrowserRouter` function. For these components to render inside the `<App>` (root) layout, `<Outlet>` needs to be added to the `<App>` component to define where we want the child routes to render.
1. Add a navigation bar by adding the [Navigation.tsx](/web-app/src/components/Navigation.tsx) component to the root layout, so that this renders on all routes. The `useLocation` hook is used to retrieve the current location object and perform a side effect (show which nav link is active) whenever the location changes.

## Managing state

[useState](https://react.dev/reference/react/useState) is a react hook that is used to manage the state of a component. This could be used to set the location when selected from the drop down, however when the user changes view (e.g. from today to tomorrow), the select component will show the default value.

Instead we can use [Context](https://react.dev/learn/passing-data-deeply-with-context) to provide the location information to the entire component tree so that they can switch view with their location being saved.

Combining the context and useState also simplifies how to provide the location data to the [WeatherForecast.tsx](/web-app/src/components/WeatherForecast.tsx) component which uses it as part of its API request (see [Making API Request](#making-api-requests)).

1. Create the `LocationContext`: See [locationContext.ts](/web-app/src/lib/locationContext.ts)
1. Wrap the root of the application in the <LocationContext.Provider>: See [App.tsx](/web-app/src/App.tsx)
1. Provide the `state` variable and `setState` function to the <LocationContext.Provider>.
1. Use the `LocationContext` to retrieve the `location` variable for the API call. See [WeatherForecast.tsx](/web-app/src/components/WeatherForecast.tsx)
1. Use the `LocationContext` to set the location when the `<Select>` copmonent is changed. See [SelectLocation.tsx](/web-app/src/components/SelectLocation.tsx)

## Making API Requests

[SWR](https://swr.vercel.app/) is popular tool for making API calls.

1. install:
   ```
   npm i swr
   ```
1. Create `.env` file with Weather API URL and Key.
   ```
   VITE_WEATHER_KEY=111111111111111111111
   VITE_WEATHER_URL='http://api.weatherapi.com/v1'
   ```
1. Review the [TodaysWeather.tsx](/web-app/src/components/TodaysWeather.tsx) component which uses SWR to make an API call.

Notes:

- The `.env` file is deliberately not checked in. This is NOT a sufficiently secure solution for deploying this application to production. You can also see the API key in the url parameters of the API request. A better implementation would be to move this API call to a back-end service to protect this.
- The API request can respond with a CORS header. This article on [Overriding HTTP response headers](https://developer.chrome.com/docs/devtools/overrides) can help to overcome for this demo application purpose.
