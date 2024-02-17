class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    };
    honk(){return "Beep.";};
    toString(){return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;};
};

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
    };
    numWheels = 4;
};

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
    };
    numWheels = 2;
    revEngine(){return "VROOM!!!";}
};

class Garage {
    constructor(capacity){
        if (typeof capacity === "number"){
            this.capacity = capacity;
        };
    };
    vehicles = [];
    add(vehicle){
        if (!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        } else if (this.vehicles.length > this.capacity - 1) {       // instead of this.vehicles.length >= this.capacity to account for fractional car space
            return "Sorry, we're full."
        } else {
            this.vehicles.push(vehicle);
            return "Vehicle added!"
        }
    };
};
