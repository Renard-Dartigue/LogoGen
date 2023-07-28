const { default: inquirer } = require("inquirer");
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
            answer.shape,
            answer.text,
            answer.textColor,
            answer.shapeColor
        );

        let svgString = svg.getSVGraphic();

        fs.writeFile();

        
    });
}