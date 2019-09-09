# create two simple SPA project (one with Angular and one with React) with shared backend server with at least one Get and one Delete request.


Since you know both Angular and React, (I am not sure which one you are going to use in the next project here) 
I want to kindly ask you create two simple SPA project (one with Angular and one with React) with shared backend server with at least one Get and one Delete request.

To do:
- [x] Use Router and have at least 2 different routes
- [x] Show 2 list of items which you get from API call and you could select and move items between these lists (no longer need backend API get/delete requests)
- [ ] ~~ You could move items one by one, move all at once, and by dragging one item and dropping in another list ( or dropping and change the order of an item in its own list)~~ (we are no longer using drag on drop)
- [x] Use Redux or some other state management (yes, using Redux)
- [x] Being responsive (I have made this responsive to mobile/tablet views, vs desktop view/bigger screen)
- [x] And you could delete items
- [x] Show success message on successful delete

- [ ] BONUS ** It would be great if you could have login/logout (Using JWT) in your project as well (If you have enough time for this)

Aug 26-30, 2019
I also have done:
- [x] Create React App
- [x] Allow users to click on "Edit" to route to a different page
- [ ] ~~ shared backend server with at least one Get and one Delete request ~~ (Don't need backend requests at this point)
- [ ] ~~ Angular? ~~ (If project is in React, then don't do this either)
- [x] Move the List component out of Home, into it's own component, so that we can use it for the other List.
- [x] Make two columns next to each other
- [x] Fix the Delete so the alert of success shows after the item has been deleted
- [x] To select which list you want to add the item to - Reducer, Action
- [x] let’s drop drag and drop now (no more drag and drop)
- [x] you could add checkboxes beside your list
- [x] and one more button named move

- [x]  Let user choose which list to add items to - list 1 or 2?

- [ ] so you can select from list 1 and move them all once to list 2
- [ ] so you can select from list 2 and move them all once to list 1

- [x] Link the checkboxes to state
- [x] Get Select All button to work

Sept 9, 2019:
- [x] Design = change the table to CSS Grid to remove all the errors
- [x] Make the move button functional (actions and reducers)
- [ ] Get the move button to change the selected from one list to the other list

------------------------------------------------------------------------

![Screenshot of app](https://github.com/rosexw/spa-project-with-lists/blob/master/src/screenshot%20of%20app.png)


------------------------------------------------------------------------

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment