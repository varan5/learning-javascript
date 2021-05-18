
class Rectangle {
    constructor(length, breadth) {
        this.length = length
        this.breadth = breadth
    }

    calculateArea = () => {
        return this.length * this.breadth        
    }

}

const object1 = new Rectangle()
object1.length = 10
object1.breadth = 5
const result = object11.calculateArea()
console.log(result)
