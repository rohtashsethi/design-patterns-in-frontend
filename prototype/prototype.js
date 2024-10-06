// Prototype object
const vehiclePrototype = {
  init: function (make, model) {
    this.make = make;
    this.model = model;
  },
  getDetails: function () {
    return `${this.make} ${this.model}`;
  }
};

// Function to create a new vehicle based on the prototype
function createVehicle(make, model) {
  const vehicle = Object.create(vehiclePrototype);
  vehicle.init(make, model);
  return vehicle;
}

// Cloning the prototype to create specific vehicle types
const car = createVehicle('Toyota', 'Corolla');
const truck = createVehicle('Ford', 'F-150');

console.log(car.getDetails());   // Toyota Corolla
console.log(truck.getDetails()); // Ford F-150
