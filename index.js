// TODO: Include packages needed for this application
// added the package for the application //

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')



// added the array of questons //

const questions = [


// this is the name of user //
// if there is no input for name return to an err //

    {
    type: 'input',
    name: 'name',
    message: 'please Enter your name? (Required)',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('You need to enter your name!');
            return false;
        }
    }
    },


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
                console.log('Every project must have a title. Please try again!');
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
                console.log('Please provide instructions on how others can contribute to your project.');
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


// this is the option for choosing your license //
// if there is no input for the license return to an err //

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project (Required)',
        choices: ['MIT',
         'Apache',
         'LGPL',
         'Mozilla-Public',
         'GNU-General-Public',
         'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('You must pick one of the licenses for the project!');
                return false;
            }
        }
    },


// this is the input for your email //
// if there is no input for email return an err //

    {
        type: 'input',
        name: 'email',
        message: 'Would you like to enter your email address?',
    },


// this is the input for your github username //
// if there is no input for the github return an err //

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },

];



// TODO: Create a function to write README file
// this is the fucntuin that write the file into the readme file //
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

// TODO: Create a function to initialize app
// this is the function that initialize the app and write to file of Sample-README.md //

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("Sample-README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();
