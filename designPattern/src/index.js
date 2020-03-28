class Circle {
    draw() {
        console.log('draw a cicle');
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    draw() {
        this.circle.draw
        this.setRedBorder(this.circle)
    }
    setRedBorder(circle) {
      console.log('set red boarder')
    }
}

//test

let circle = new Circle()
circle.draw();

console.log('-----分割线-----')
let dec = new Decorator(circle)
dec.draw();
