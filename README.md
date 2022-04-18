# Antidote Front End test

Thank you for applying to our **Frontend Developer** role at **Antidote.me**!
We setup a React application for you, bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and have included a mock-up (see the _design_ folder) of how we'd like the application to look. The project that does not include any of the elements you see in that design image. These elements are the ones that you will have to build. The application, in its current initial form, will just show a paragraph with a welcome text.

We’d like you to spend **around 3 hours** working on the exercise. Feel free to use any external libraries. And please submit your work even if you couldn't finish it. We will review it and if we like your solution / the direction you have taken, we will invite you to a face-to-face interview to our office where we can discuss at length.

The main things we will be looking for with this exercise are:

1. Code structure / Architectural approach
2. Data flow approach
3. Best practices
4. Documentation
5. Semantics/Accessibility
6. Optimisation
7. Code Reusability  

## EXPECTED BEHAVIOR

According to the design image inside the _design_ folder, when the page is loaded we would like to see a list of patients that can be flagged as `Randomized` or `Inactive`.

The data for the UI is available at the [http://localhost:3000/patients](http://localhost:3000/patients) endpoint once you run `npm run start`. (It returns the contents of the `data.json` file located in the `public` folder).

When a patient is flagged with a status (Randomized or Inactive), said status should be shown as a simple word. Any new / not yet flagged patients should have the action to choose their status, in the form of the two buttons.

## DESIGN NOTES

We included our normalization CSS on the page that contains some basic element styling. Feel free to approximate the mock-up provided (`antidote.me-fe-test-design.png`), but please bear in mind that we're not looking for a pixel-perfect design.

## WHEN YOU ARE DONE! 😊

**Create** a `dev-README.md` file in the project root explaining your development choices when working on the exercise, any problems you found, or anything you’d like us to know.

Please send your code to us via **Github**, so that we can review your work. We’ll let you know when we have cloned or downloaded it, so you can either delete it from your Github account or set it to private.

Good luck!! 👍

## PROJECT SETUP

This app was created using node `v10.15.3`

### `npm install`

This will install all the dependencies you need to run the project.

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
