const inquirer = require("inquirer");
const SVGraphic = require("./svg");
const fs = require("fs");

const questions = [
    {
        type: "list",
        message: "Chose a shape!",
        name: "shape",
        choices: ["Triangle", "Circle", "Square"],
    },
    {
        type: "input",
        message: "What will the text be!?",
        name: "text",
    },
    {
        type: "input",
        message: "What is the text color!?",
        name: "textColor",
    },
    {
        type: "input",
        message: "What will the shape's color be!?",
        name: "shapeColor",
    },
];

function getAnswers() {
    inquirer.prompt(questions).then( (answers) => {
        let svg = new SVGraphic(
            answers.shape,
            answers.text,
            answers.textColor,
            answers.shapeColor
        );

        let svgString = svg.getSVGraphic();

        fs.writeFile("logo.svg", svgString, (err) => {
            if (err) {
            console.error(error);
            } else {
                console.log("Success!")
            }
        });        
    });
}

module.exports = getAnswers;