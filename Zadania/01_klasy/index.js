// Zadanie 1
class car {
    constructor(color, maxSpeed) {
        this.color = color;
        this.maxSpeed = maxSpeed;
    }

    checkColor() {
        console.log(`Mój kolor to ${this.color}`)
    }

    drive() {
        console.log(`Jadę z prędkością ${this.maxSpeed}km/h`)
    }
}

// Zadanie 2
const redCar = new car('czerwony', '200')
redCar.checkColor()
redCar.drive()

// Zadanie 3
class plane extends car {
    constructor(color, maxSpeed, flyHeight) {
        super(...arguments);
        this.flyHeight = flyHeight;
    }
    drive() {
        console.log(`Lecę na wysokości ${this.flyHeight} metrów z prędkością ${this.maxSpeed}km/h`)
    }
}

const bluePlane = new plane('niebieski', 500, 1500)
bluePlane.checkColor()
bluePlane.drive()