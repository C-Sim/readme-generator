const fs = require("fs");

const inquirer = require("inquirer");

const questions = [
    {
        name: "projectTitle",
        type: "input",
        message: "What is the title of the project?",
    },
    {
        name: "description",
        type: "input",
        message: "Please enter a brief description of the project, explaining why you built the project and what problem it solves",
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
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause 'Simplified' License",
            "BSD 3-Clause 'New' or 'Revised' License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ],
    },
    {
        name: "contributions",
        type: "input",
        message: "What process should be followed to contribute to the project?",
    },
    {
        name: "tests",
        type: "input",
        message: "What tests can be run on the app?,
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

const generateReadMe = () => {

};

const readMe = () => {};
