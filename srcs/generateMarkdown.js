// processing the generateMarkdown //

// If there is no license, return an empty string

// added the function of licencebadge to show if the licence is MIT so appear the MIT licence badge.

    function renderLicenseBadge(license) {
      if (!license) {
      return ``;
      } else {
      return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
      }
    }

// If there is no license, return an empty string
// adding the link of the licence and if there is no license returning to an empty string because if there is no licence in our repo.

    function renderLicenseLink(license) {
      if (license === 'MIT') {
        return `https://lbesson.mit-license.org/`
      } else {
         return ``;
      }
    }

// If there is no license, return an empty string
// adding the section of license give a message of This application is covered by the licence that we added
// and if there is no license returning to an empty string.

    function renderLicenseSection(license) {
      if (!license) {
        return ``;
      } else {
      return `## Licenses
      This project is covered under the ${license} license.`
      }
    }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ${data.description}


  ## Table of Contents 
  - [Installation](#installation)
  - [Usages](#usages)
  - [Contributions](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)
  - [Additional Info](#additional-info)



`;
}

module.exports = generateMarkdown;
