interface Shape {
  getArea(): number;
}

class Circle implements  Shape {
  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape [] = [new Circle(5), new Rectangle(10,5)];

shapes.forEach(shapes => {
  console.log(shapes.getArea());
})
