# Dynamic Factory

A simple dynamic factory pattern implementation in JavaScript. This package allows you to register types and create instances of those types dynamically at runtime.

## Usage

### Registering Types
To use the dynamic factory, you need to register your types first. You can register a type by providing a type name and a class definition.

#### Example
```js
// Import the factory
const factory = require('dynamic-factory');

// Define some classes
class Car {
  constructor(model) {
    this.type = 'car';
    this.model = model;
  }

  drive() {
    console.log(`Driving a car, model: ${this.model}`);
  }
}

class Truck {
  constructor(model) {
    this.type = 'truck';
    this.model = model;
  }

  drive() {
    console.log(`Driving a truck, model: ${this.model}`);
  }
}

class Motorcycle {
  constructor(model) {
    this.type = 'motorcycle';
    this.model = model;
  }

  ride() {
    console.log(`Riding a motorcycle, model: ${this.model}`);
  }
}

// Register the types with the factory
factory.registerType('car', Car);
factory.registerType('truck', Truck);
factory.registerType('motorcycle', Motorcycle);

// Create and use instances
try {
  const myCar = factory.create('car', 'Tesla Model S');
  myCar.drive();  // Output: Driving a car, model: Tesla Model S

  const myTruck = factory.create('truck', 'Ford F-150');
  myTruck.drive();  // Output: Driving a truck, model: Ford F-150

  const myMotorcycle = factory.create('motorcycle', 'Harley-Davidson');
  myMotorcycle.ride();  // Output: Riding a motorcycle, model: Harley-Davidson

  // This will throw an error
  const unknown = factory.create('plane', 'Boeing 747');
} catch (error) {
  console.error(error.message);  // Output: Type plane not registered
}

```
