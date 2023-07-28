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
}