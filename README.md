# React Jexcel Redux
[![generator-create-redux-app](https://img.shields.io/badge/built%20with-generator--create--redux--app-brightgreen.svg)](https://github.com/jonidelv/generator-create-redux-app)

## Howard's notes:

- Helpful example of adding data to redux state container: <https://github.com/hchiam/react-jexcel-redux/commit/90db044627780ed6262f5e29bb61a24390a4d4b3>

- <https://github.com/hchiam/learning-reactjs/>

- <https://github.com/hchiam/learning-jExcel>

- <https://github.com/hchiam/learning-redux>

- **action** -> "abstraction": do some more fancy stuff here before calling store.dispatch here instead of inside a component’s custom methods (note: store.dispatch instead of this.props.dispatch)
- **reducer** -> update state
- **combineReducers** -> combine different reducers into one state container in index.js when you import rootReducer from '../reducers' in files in /store folder

- **component action connected to state container** -> this.props.dispatch action on state (instead of store.dispatch), which works once you use import { connect } from 'react-redux'

  ```js
  function mapStateToProps(state) {
    return { data: state.data }
  }
  export default connect(mapStateToProps)(Jexcel) // connect component to state
  ```

- non-critical extras:

  - **constants/actionTypes** -> “enum” to label actions meaningfully
  - **prop-types** -> type checking of state data to be stored

- You can get a dependency graph of this project by running `bash show_dep_graph.sh`.

<hr>

This project was generated with [Create Redux App](https://github.com/jonidelv/generator-create-redux-app). Refer to `docs/create-redux-app` to find more information on how to perform common tasks.

Once the installation is done, you can run some commands inside the project folder:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changes since the last commit.

[Read more about testing.](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
