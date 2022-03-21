// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
// const Choices = require('inquirer/lib/objects/choices');
// const generatePage = require('./src/README-template');


// TODO: Create an array of questions for user input
inquirer.prompt([

  {
    // title of project
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
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
    // project description 
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project. (Required)',
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
    // table of contents
    type: 'input',
    name: 'tableofcontents',
    message: 'Enter table of contents (optional)'
  },
  {
    // installation instructions
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed.'
  },
  {
    // collaborators 
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.'
  },    
  {
    // list of license
    type: 'input',
    name: 'license',
    message: 'What license did you use?',
    choices: ['The MIT License', 'The GPL License', 'Apache license', 'GNU license', 'N/A'],
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
    type: 'input',
    name: 'testinstructions',
    message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
  },
  {
    type: 'input',
    name: 'questions',
    message: ''
  },

]).then(({

  title,
  description,
  tableofcontents,
  installation,
  usage,
  credits,
  license,
  testinstructions,
  questions

})=> {
// template to be used
const template = `# ${title}

* [Description](#description)
* [Table of Contents](#tableofcontents)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Test Instructions](#testinstructions)
* [Questions](#questions)

#Description
${description}
#Table of Contents
${tableofcontents}
#Installation
${installation}
#Usage
${usage}
##Credits
${credits}
##License
${license}
###Test Instructions
${testinstructions}

#Questions
* GitHub: ${git}
* Linkedin: ${linkedin}
* E-mail: ${email}`;



}

promptUser().then(answers => console.log(answers));

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

fs.writeFile('README.md', generatePage(title, description), err => {
  if (err) throw err;

  console.log('README complete! Checkout README.md to see the output!')
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// personal notes
// contents of readme
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions