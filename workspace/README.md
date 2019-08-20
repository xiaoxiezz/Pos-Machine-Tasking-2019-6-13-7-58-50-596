# Create JS Workspace

## Domo

Please go through the demo to create a javascript workspace.

*Step1: Create directory*

```
$ mkdir js-workspace
```

*Step2: Step into the directory and initialize a repository. Then copy `.gitignore` file to that directory*

> The `.gitignore` file content can be found at https://github.com/github/gitignore/blob/master/Node.gitignore

```
$ git init
```

*Step3: Create a node-js workspace by creating a package.json file.*

```
$ npm init
```

*Step4: Add dependencies for your project. Currently, we depend on JEST, which is a unit test framework.*

```
$ npm install jest --save-dev
```

*Step5: create a folder to hold all the test.*

```
$ mkdir __tests__
```

*Step6: Create a unit-test file under the `__tests__` folder, and a source code file under the root folder.*

```
$ touch main.js ## if you use PowerShell please type: New-Item main.js -Type File
$ cd __tests__
$ touch main-spec.js
```

*Step7: Write a test first*

```js
const add = require('../main');

it ('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
});
```

*Step8: run the test from the command line:*

```
## Suppose that we are in the root folder
$ node_modules/.bin/jest
```

*Step9: Oh my! the test failed. Let's fix it in `main.js` file*

```js
function add (left, right) {
    return left + right;
}

module.exports = add;
```

*Step10: Run the test again.*

## Practice

Please do it again all by yourselfs in 10 minutes.
