## Jobbify

### Background

While each job application is unique and requires a custom approach, most job applications have similar input fields. With this in mind, you end up creating a master document to store information and copy and paste where necessary, making minor changes to fit the context of each company.

Jobbify solves this problem with an easy to use Chrome Extension that lets users save blocks of text into variables that are stored in the browser. Simply write what you'd like, add in an arrow (=>) and type the variable name that will represent that block of text. As an example, let's say a particular application asks for your education background. In the applicable input box, you would type:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac accumsan massa. Aenean ac congue nunc. Maecenas volutpat lacus eget felis auctor tincidunt. Cras suscipit vel dui ac pellentesque. Proin at interdum sapien. Aliquam accumsan urna vel quam facilisis, et consectetur tellus finibus. Donec at pellentesque lorem. => education_background

The arrow at the end is important because it tells Jobbify that you're saving the preceding text to the subsequent variable. After hitting tab, the arrow and the variable name are deleted from the input box and the variable is saved in the browser. Now, if you run into a similar situation where you would want to have your education background simply type the following into the appropriate input box:

=> education_background

Upon hitting tab, the information will be automatically placed in the input box, saving you time and allowing you to apply for more jobs in less time, without sacrificing application quality.

### Functionality & MVP  

With Jobbify, user's will be able to:

- [ ] Apply for jobs quickly
- [ ] Give themselves boilerplate pieces of text
- [ ] Spend more time editing what they want to say and less time doing other stuff

The MVP Features for Jobbify are:

- [ ] Saving variables by including text, an arrow, and a variable name
- [ ] Reuse variables by using the arrow and your saved variable name
- [ ] Have a visual interface for finding variable you know exist but that you can't remember the name for

### Wireframes

  This app will be a Chrome Extension that begins listening for tab events when a user activates the app (By activating it in the options). The main popup page will be a search bar that helps you find variables you've saved. A potential additional piece of the visual aspect of this app will be a guided walk-through of how to best use the app.

![wireframes](images/js_wireframe.jpeg)

### Architecture and Technologies

This project will be implemented with the following technologies:

- React Redux Chrome extension npm package to easily manage my state,
- The Chrome Extension framework,
- CSS and HTML for a nice looking popup,
- Webpack to compile the React components into the necessary files,
- Gulp to make some tasks easier to manage

There will be three main scripts associated with this file:

`content_index.js`: this script is compiled into the content.js file which is loaded with the page and has direct access to the DOM. Here, I will add the relevant event listeners to the page so that information is correctly saved and then used. Additionally, this file will add a new DOM node to the DOM tree which may be used in future iterations of the app to display potential warnings (i.e. trying to use a variable that has been previously declared).

`event_index.js`: this script is compiled into the event.js file which will contain the Redux store. Its main purpose is to handle any dispatched actions and update state accordingly. While there isn't a great use case for this right now, I can see a scenario where I would want the saved information to be a part of state as opposed to just being part of chrome storage.

`popup_index.js`: this script is compiled into the popup.js file which contains all the logic for the popup.html page.

### Implementation Timeline

**Day 1**: Create the functionality for saving things to chrome storage and then using those variables. Goals for the day:

- Get all the boilerplate ready.
- Have the ability to save and then use saved variables.

**Day 2**: Begin work on the initial popup.html page. Build out the functionality that let's users see a visual representation of the variables they've saved. Add in the css to make it look awesome.

**Day 3**: Begin work on the options page so that the app isn't continually running (only when the user wants it to run). Additionally, learn the necessary steps to get additional tabs for the popup.html file.


**Day 4**: As a bonus feature, add in a tutorial that easily teaches someone how they would use the app to apply for jobs quickly and with the highest chance of success.


### Bonus features

Bonus Features:

- [ ] Implement an easy tutorial that walks you through how to use this Chrome Extension
- [ ] Automatically save company information when a form is submitted outlined
