describe("Vehicle", () => {
    const myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

    it ("should be able to construct a new Vehicle", () => {
        expect(myFirstVehicle instanceof Vehicle).toBe(true);
    });
    it ("should assign the properties to a new Vehicle", () => {
        expect(myFirstVehicle.make).toBe("Honda");
        expect(myFirstVehicle.model).toBe("Monster Truck");
        expect(myFirstVehicle.year).toBe(1999);
    });
    it ("should be able to honk", () => {
        expect(myFirstVehicle.honk()).toBe("Beep.");
    });
    it ("should display toString correctly", () => {
        expect(myFirstVehicle.toString()).toBe("The vehicle is a Honda Monster Truck from 1999.");
    });
});

describe("Car", () => {
    const myFirstCar = new Car("Toyota", "Corolla", 2005);

    it ("should inherit Car properties from Vehicle", () => {
        expect(myFirstCar.make).toBe("Toyota");
        expect(myFirstCar.model).toBe("Corolla");
        expect(myFirstCar.year).toBe(2005);
    });
    it ("should inherit Car methods from Vehicle", () => {
        expect(myFirstCar.toString()).toBe("The vehicle is a Toyota Corolla from 2005.");
        expect(myFirstCar.honk()).toBe("Beep.");
    });
    it ("should add numWheels properties of 4 to Car", () => {
        expect(myFirstCar.numWheels).toBe(4);
    });
});

describe("Motorcycle", () => {
    const myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
    
    it ("should inherit Motorcycle properties from Vehicle", () => {
        expect(myFirstMotorcycle.make).toBe("Honda");
        expect(myFirstMotorcycle.model).toBe("Nighthawk");
        expect(myFirstMotorcycle.year).toBe(2000);
    });
    it ("should inherit Motorcycle methods from Vehicle", () => {
        expect(myFirstMotorcycle.toString()).toBe("The vehicle is a Honda Nighthawk from 2000.");
        expect(myFirstMotorcycle.honk()).toBe("Beep.");
    });
    it ("should add numWheels properties of 2 to Motorcycle", () => {
        expect(myFirstMotorcycle.numWheels).toBe(2);
    });
    it ("should revEngine for Motorcycle", () => {
        expect(myFirstMotorcycle.revEngine()).toBe("VROOM!!!");
    });
});

describe("Garage", () => {
    const garage = new Garage(2);

    it ("should add Vehicle to vehicles", () => {
        expect(garage.vehicles).toEqual([]);
        expect(garage.add(new Car("Hyundai", "Elantra", 2015))).toBe("Vehicle added!")
        expect(garage.vehicles.length).toBe(1);
        expect(garage.vehicles[0].toString()).toEqual("The vehicle is a Hyundai Elantra from 2015.");
        expect(garage.add("Taco")).toBe("Only vehicles are allowed in here!");
        expect(garage.add(new Motorcycle("Honda", "Nighthawk", 2000))).toBe("Vehicle added!");
        expect(garage.vehicles.length).toBe(2);
        expect(garage.vehicles[0].toString()).toEqual("The vehicle is a Hyundai Elantra from 2015.");
        expect(garage.vehicles[1].toString()).toEqual("The vehicle is a Honda Nighthawk from 2000.");
        expect(garage.add(new Motorcycle("Honda", "Nighthawk", 2001))).toBe("Sorry, we're full.");
        expect(garage.vehicles.length).toBe(2);
    });
});
