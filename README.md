## How to use:

### Prerequisites:

* `node js` >= 8.12
* `yarn` (you can install it globally by running `npm install -g yarn`)

### Commands:

* `yarn install` - installing dependencies
* `yarn start` - starting the app in dev mode
* `yarn start-windows` - starting the app in dev mode on windows OS
* `yarn build` - build the production artifacts
* `yarn test` - running the tests

## Application structure:

### Technologies used: 
- Typescript,  for great intellisense, it also makes the code more robust and predictable
- Redux for app state management
- [Reselect](https://github.com/reduxjs/reselect) selectors for computing derived data because it uses memoization which helps with performance. Also selectors are good when you reuse the same state in multiple places
- [react-testing-library](https://github.com/kentcdodds/react-testing-library) for testing React components. It is a simple way to test components from a high level, without testing many implementation details.

### Project structure 
- /assets folder contains images, like the not found image for products
- /categoryDetails contains the routed component that shows the products for a category
- /components contains the reusable components like ProductList, ProductItem, CategoryNavigation
- /data contains mock data and interfaces for app entities like Product and Category
- /redux holds the redux related logic like reducers, selectors, actions
- apiUtils file holds the dispatching of actions (it was initially intended for doing http calls, but could not fix the same origin issue)
- Home.js is the default route, that holds the list of all products
- .spec files contain unit tests

