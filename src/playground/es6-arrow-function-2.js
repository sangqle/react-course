// arguments object - no longer bound with arrow function
const add = (a, b) => {
  //   console.log(arguments);
  return a + b;
};

console.log(add(44, 3, 200));
// this keyword no longer bound

const user = {
  name: "SangLe",
  cities: ["CanTho", "TraVinh", "HCM"],
  printPlacesLived() {
    // Es6 based on es5
    this.cities.forEach(city => {
      console.log(this.name + " has lived in " + city);
    });
  }
};

user.printPlacesLived();
