const {Triangle, Circle, Square} = require("./shape")
 
class SVGraphic {
    constructor(shape, text, textColor, shapeColor) {

        if (shape === "Tiangle") {
            this.shape = new Triangle(shapeColor);
        } else if (shape === "Circle") {
            this.shape = new Circle(shapeColor);
        } else if (shape === "Square") {
            this.shape = new Square(shapeColor);
        } else {
            throw new ErrorEvent("Shape type invalid")
        }

        this.text = text;
        this.textColor = textColor;
    }

    getSVGraphic() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${this.shape.createSVGraphics()}

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

        </svg>`;
    }
}

module.exports = SVGraphic;