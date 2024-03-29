const fs = require("fs");
const inquirer = require("inquirer");
const figlet = require("figlet");

const questions = [
  {
    name: "projectTitle",
    type: "input",
    message: "What is the title of the project?",
  },
  {
    name: "description",
    type: "input",
    message:
      "Please enter a brief description of the project, explaining why you built the project and what problem it solves",
  },
  {
    name: "installation",
    type: "input",
    message: "What steps should be followed to install the app?",
  },
  {
    name: "usage",
    type: "input",
    message: "What instructions should be followed to use the app?",
  },
  {
    name: "license",
    type: "list",
    message: "What license has been applied to the project?",
    choices: [
      "Apache 2.0",
      "GNU General Public v3.0",
      "MIT",
      "BSD 2 Clause",
      "BSD 3 Clause",
      "Boost Software 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public 2.0",
      "GNU Affero General Public v3.0",
      "GNU General Public v2.0",
      "GNU Lesser General Public v2.1",
      "Mozilla Public 2.0",
      "The Unlicense",
    ],
  },
  {
    name: "contributionConfirmation",
    type: "confirm",
    message:
      "Would you like to add information on how to contribute to the project?",
  },
  {
    name: "contributions",
    type: "input",
    message: "What process should be followed to contribute to the project?",
    when: (answer) => {
      return answer.contributionConfirmation;
    },
  },
  {
    name: "testConfirmation",
    type: "confirm",
    message:
      "Would you like to add information on tests that can be run on the app?",
  },
  {
    name: "tests",
    type: "input",
    message: "What tests can be run on the app?",
    when: (answer) => {
      return answer.testConfirmation;
    },
  },
  {
    name: "gitHubUsername",
    type: "input",
    message: "What is your GitHub username?",
  },
  {
    name: "emailAddress",
    type: "input",
    message: "What is your email address?",
  },
];

const generateReadMe = (answers) => {
  return `# ${answers.projectTitle} ![badge](${encodeURI(
    `https://img.shields.io/badge/${answers.license}-license-green`
  )})

## Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
${answers.contributionConfirmation ? `- [Contributions](#contributions)` : ""}
${answers.testConfirmation ? `- [Tests](#tests)` : ""}
- [Questions](#questions)

## Description

${answers.description}

## Installation

\`\`\`
${answers.installation}
\`\`\`

## Usage

\`\`\`
${answers.usage}
\`\`\`

## License

${answers.license}

${
  answers.contributionConfirmation
    ? `## Contributions

${answers.contributions}`
    : ""
}

${
  answers.testConfirmation
    ? `## Tests

\`\`\`
${answers.tests}
\`\`\` `
    : ""
}

## Questions

Please contact me via email at ${
    answers.emailAddress
  } or via my GitHub repo at https://github.com/${answers.gitHubUsername}`;
};

const init = async () => {
  const answers = await inquirer.prompt(questions);

  const readMe = generateReadMe(answers);

  fs.writeFileSync("GENERATED_README.md", readMe);

  console.log(
    figlet.textSync("README generated!", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 64,
      whitespaceBreak: true,
    })
  );
};

init();
