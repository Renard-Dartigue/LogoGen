const { default: inquirer } = require("inquirer");

const questions = [
    {
        type: "list",
        message: "",
        name: "shape",
        choices: ["Triangle", "Circle", "Square"],
    },
    {
        type: "input",
        message: "",
        name: "text",
    },
    {
        type: "input",
        message: "",
        name: "textColor",
    },
    {
        type: "input",
        message: "",
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

        
    })
}