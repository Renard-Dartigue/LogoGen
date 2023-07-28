class Shape{
    constructor(color) {
        this.color = color;
    }
}
    class Triangle extends Shape {
        createSVGraphics() {
            return
        }
    }

    class Square extends Shape{
        createSVGraphics() {
            return `<rect x="10" y="10" width="30" height="30"/>`;
        }
    }

    class Circle extends Shape {
        createSVGraphics() {
            return ` <circle cx="150" cy="100" r="50" stroke="red" fill="${this.color}"/>`;
        }
    }



module.exports = {Shape, Triangle, Circle, Square};