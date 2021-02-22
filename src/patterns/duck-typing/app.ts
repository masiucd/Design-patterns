type TransportType = Airplane | Car | SkateBoard

class Msg {
  msg(type: string) {
    console.log("hello I am " + type)
  }
}

class Airplane extends Msg {
  name: string
  constructor(name: string) {
    super()
    this.name = name
  }
}

class Car extends Msg {
  name: string
  constructor(name: string) {
    super()
    this.name = name
  }
}

class SkateBoard extends Msg {
  name: string
  constructor(name: string) {
    super()
    this.name = name
  }
}

function init(transPortModel: TransportType, type: string) {
  transPortModel.msg(type)
}

const airPlane = new Airplane("Airplane")
init(airPlane, airPlane.name)

const car = new Car("BMW")
init(car, car.name)

const skateBoard = new SkateBoard("bo432")
init(skateBoard, skateBoard.name)
