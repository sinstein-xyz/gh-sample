# Introduction

A TS + React project that will fetch the public repositories for a given Github username and display the top level files and README contents for them
<kbd>
![Screenshot (30)](https://user-images.githubusercontent.com/4283218/120700005-be4daa00-c4ce-11eb-9f0a-5347e1707a88.png)
  </kbd>


## Architecture
The application consists of 3 components in order of activation:
1. `UserInputView` - takes username input and fetches repository list from Github
2. `RepositoriesListView` - takes repository list from `UserInputView` and renders them as a list. Fetches repository details on the basis of user selection
3. `RepositoryDetailsView` - takes the detailed repository details of the user selection from `RepositoriesListView` and render the file list and the contents of the Readme file if present

![annotated_architecture](https://user-images.githubusercontent.com/4283218/120705723-cf4de980-c4d5-11eb-8b80-36ea415e8fcd.png)


This leverages the [Typescript definition of GitHub's OpenAPI specification](https://github.com/octokit/openapi-types.ts) to parse data from the Github API

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

