Create React App
```
npx create-react-app footy-tips-3
```
Install packages
```
npm install --save react react-dom redux react-redux redux-thunk react-router-dom moment

npm install --save firebase@4.12.1

npm install --save-dev redux-devtools-extension firebase-admin node-env-file
```
For Firebase hosting, 
- First install Firebase [local admin SDK](https://firebase.google.com/docs/cli?authuser=0)
```
curl -sL https://firebase.tools | bash
 
firebase init
```
Select hosting
Directory is 'build'
```
What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? No
✔  Wrote build/404.html
? File build/index.html already exists. Overwrite? No
i  Skipping write of build/index.html
```
To deploy
```
npm run build
firebase deploy
```
To test
```
npm run start
```
To update the season draw:
1) load DB with current draw. Use the CSV to JSON tool [here](https://www.convertcsv.com/csv-to-json.htm)
2) Update Firebase access rules
3) Using current SA key use ```$ node ./config/loadData3.js```

##############

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
