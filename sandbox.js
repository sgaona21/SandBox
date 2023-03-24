console.log("JS Linked");

const arizona = {
  capital: "Phoenix",
  population: 1500000,
  political_party: "Republican",
  confederate: false,
  cities: ["Tucson", "Oracle", "Chandler", "Douglas"],
  governer: "deucey"
};

const texas = {
  capital: "Austin",
  population: 3000000,
  political_party: "Republican",
  confederate: true,
  cities: ["Dallas", "Amarillo", "Houston", "San Antonio"]
};

const texarona = {
  ...arizona,
  ...texas
}


const pets = [
  {name: "sparky", type: "female", breed: "pug", age: 5, photo: "dogs/dog1.jpg"},
  {name: "dummy", type: "male", breed: "pitbull", age: 1, photo: "dogs/dog2.jpg"},
  {name: "ugly", type: "female", breed: "lab", age: 7, photo: "dogs/dog3.jpg"},
  {name: "timmy", type: "male", breed: "chihuahua", age: 4, photo: "dogs/dog4.jpg"},
  {name: "lexi", type: "female", breed: "doberman", age: 3, photo: "dogs/dog5.jpg"}
];

let text = '';

function display(array) {
for (let i = 0; i < array.length; i++) {
  text += `<h2>${array[i].name}</h2>
  <h3> ${array[i].type} | ${array[i].breed}</h3>
  <p>Age: ${array[i].age}</p>
  <img src="${array[i].photo}" alt="Australian Shepherd">`;
}
};

display(pets);


document.getElementById("paragraph").innerHTML = text;