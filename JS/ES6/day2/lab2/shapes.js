class Shape{
    constructor(dimension){
        this.dimension = dimension
        this.type = "null"
    }
    calcArea(){ }
    calcPerimeter(){ }
    toString(){
        var area = this.calcArea();
        var perimetr = this.calcPerimeter();
        console.log(`Area of this ${this.type} is: ` + area)
        console.log(`And perimetr of this ${this.type} is: ` + perimetr)
    }
}


export class Rectangle extends Shape {
    constructor(width, hight) {
        super(width);
        this.type = "Rectangle"
        this.hight = hight;
    }
    calcArea() {
        return this.hight * this.width;
    }
    calcPerimeter() {
        return 2 * (this.width + this.hight)
    }
}

export class Square extends Shape {
    constructor(dimension) {
        super(dimension)
        this.type = "Square"
    }
    calcArea() {
        return this.dimension * this.dimension
    }
    calcPerimeter() {
        return this.dimension * 4
    }
}

export class Circle extends Shape {
    constructor(radius) {
        super(radius)
        this.type = "Circle"
    }
    calcPerimeter() {
        return 2 * Math.PI * this.dimension;
    }
    calcArea() {
        return this.dimensions * Math.PI
    }

}