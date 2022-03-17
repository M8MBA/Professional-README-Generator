// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');


// TODO: Create an array of questions for user input
const promptUser = () => [
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Provide a description of your project.'
  },
  {
    type: 'input',
    name: 'Table of Contents',
    message: 'Enter table of contents'
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'How do I install the application?'
  },
  {
    type: 'input',
    name: 'Usage',
    message: ''
  },
  {
    type: 'input',
    name: 'License',
    message: '',
    choices: ['']
  },
  {
    type: 'input',
    name: 'Contributing',
    message: ''
  },
  {
    type: 'input',
    name: 'Test Instructions',
    message: ''
  },
  {
    type: 'input',
    name: 'Questions',
    message: ''
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// contents of readme
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions