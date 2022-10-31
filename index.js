// TODO: Include packages needed for this application
// added the package for the application //

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')



// added the array of questons //

const questions = [

// this is the title of the project //
// if there is no title entered return to an err //

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to your project to continue!');
                return false;
            }
        }
    },

// this is the description of the project //
// if there is no input for description return to an err //

    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project? (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a description of your project!');
                return false;
            }
        }
    },

        
// this is the installation of the project //
// if there is no input for installation return to an err //

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info to continue!');
                return false;
            }
        }
    },


// this is the usage of the project //
// if there is no input for usages return to an err //

    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use project!');
                return false;
            }
        }
    },
    
// this is the contribution guidline of the project //
// if there is no input for contribution return to an err //

    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to the project!');
                return false;
            }
        }
    },


// this is the instruction how to test the project //
// if there is no input for the testing return to an err //

    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe it how to test this project!');
                return false;
            }
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
