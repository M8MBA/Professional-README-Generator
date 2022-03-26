// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    // title of project
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter a title!')
        return false;
      }
    }
  },
  {
    // list of licenses
    type: 'list',
    name: 'license',
    message: 'What license did you use?',
    choices: ['N/A', 'MIT', 'Apache License 2.0', 'GNU GPLv3'],
    validate: licenseInput => {
      if (licenseInput) {
        return true;
      } else {
        console.log('Please enter a value to continue!')
        return false;
      }
    }
  },
  {
    // project description 
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project.',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a description!')
        return false;
      }
    }
  },
  {
    // installation instructions
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'

  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed.'
  },
  {
    // collaborators 
    type: 'input',
    name: 'contributing',
    message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.'
  },
  {
    // tests
    type: 'input',
    name: 'tests',
    message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
  },
  {
    type: 'input',
    name: 'git',
    message: 'What is your Github username?',
    validate: gitInput => {
      if (gitInput) {
        return true;
      } else {
        console.log('Please provide your username so others can reach out to you with questions');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please provide an email');
        return false;
      }
    }
  }
];

// TODO: Create a function to write README file
const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./generatedREADME.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'README created!'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (data) {
      console.log(data);
      var fileContent = generateMarkdown(data);
      writeToFile(fileContent)
    });
}

// Function call to initialize app
init();

// exports
module.exports = questions;
