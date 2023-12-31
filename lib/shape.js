class Shape{
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}
    class Triangle extends Shape {
        createSVGraphics() {
            return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
        }
    }

    class Square extends Shape{
        createSVGraphics() {
            return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`;
        }
    }

    class Circle extends Shape {
        createSVGraphics() {
            return ` <circle cx="150" cy="100" r="50" stroke="red" fill="${this.color}"/>`;
        }
    }



module.exports = {Shape, Triangle, Circle, Square};