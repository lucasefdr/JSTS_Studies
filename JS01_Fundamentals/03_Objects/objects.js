console.log("=== Objects in JavaScript ===");

// Criando um objeto literal
const person = {
    name: "Lucas",
    age: 28,
    isStudent: false,
    hobbies: ["coding", "music", "gaming"],
    address: { street: "123 Main St", city: "São Paulo", country: "Brazil" },
}

// Acessando propriedades
console.log(person.name); // "Lucas"
console.log(person["age"]); // 28

// Modificando propriedades
person.isStudent = true;
console.log(person.isStudent); // true

// Adicionando novas propriedades
person.email = "lucas@email.com";
console.log(person);


// Verificando se uma propriedade existe
console.log("hobbies" in person); // true
console.log("phone" in person); // false

// Iterando sobre as propriedades de um objeto
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
};

// Deletando uma propriedade
delete person.address;
console.log(person.address); // undefined

// Desestruturando um objeto
const { name, age } = person;
console.log(name); // "Lucas"
console.log(age); // 28

// Spread operator para criar um novo objeto com base em outro
const updatedPerson = { ...person, age: 29 };
console.log(updatedPerson.age);

// Shallow copy vs Deep copy
const shallowCopy = { ...person };
shallowCopy.hobbies.push("traveling");
console.log(person.hobbies); // ["coding", "music", "gaming", "traveling"] - A alteração afeta o objeto original!

const deepCopy = structuredClone(person);
deepCopy.hobbies.push("photography");
console.log(person.hobbies); // ["coding", "music", "gaming", "traveling"] - O objeto original não é afetado!
console.log(deepCopy.hobbies); // ["coding", "music", "gaming", "traveling", "photography"]

// Criando um objeto utilizando object constructor
const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;
car.getCarInfo = function () {
    return `${this.make} ${this.model} (${this.year})`;
}

console.log(car.getCarInfo()); // "Toyota Corolla (2020)"

// Criando um objeto utilizando uma função construtora
function makeAddress(street, city, country) {
    return { street, city, country }; // Retorna um objeto com as propriedades street, city e country
}

const address = makeAddress("456 Elm St", "Rio de Janeiro", "Brazil");
console.log(address); // { street: "456 Elm St", city: "Rio de Janeiro", country: "Brazil" }

// Criando um objeto utilizando classes (ES6)
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarInfo() {
        return `${this.make} ${this.model} (${this.year})`;
    }
};

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo()); // "Toyota Corolla (2020)"

// Verificando o tipo de um objeto
console.log(typeof person); // "object"
console.log(person instanceof Object); // true
console.log(myCar instanceof Car); // true

// Exercises
/**
 * Write the code, one line for each action:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.
 */
const userExercise = {};
userExercise.name = "John";
userExercise.surname = "Smith";
userExercise.name = "Pete";
delete userExercise.name;
console.log(userExercise); // { surname: "Smith" }

/**
 * Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/
function isEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false; // O objeto tem pelo menos uma propriedade
        }
    }
    return true; // O objeto não tem propriedades
}

console.log(isEmpty({})); // true
console.log(isEmpty({ name: "Alice" })); // false

/**
 * We have an object storing salaries of our team:
    let salaries = {
      John: 100,
      Ann: 160,
      Pete: 130
    }
    Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let key in salaries) {
    if (salaries.hasOwnProperty(key)) {
        if (typeof salaries[key] === "number") {
            sum += salaries[key];
        }
    }
}
console.log(sum); // 390

/** 
 * Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
*/
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
    return obj;
}

console.log(multiplyNumeric(menu)); // { width: 400, height: 600, title: "My menu" }

/*
We have an object:

let user = {
  name: "John",
  years: 30
};
Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)
Here’s an example of the values after your assignment:

let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
*/
let user = { name: "John", years: 30 };
let { name: newName, years: newAge, isAdmin = false } = user;
console.log(newName); // John
console.log(newAge); // 30
console.log(isAdmin); // false

/**
There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
let companySalaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(Object.entries(companySalaries)); // [["John", 100], ["Pete", 300], ["Mary", 250]]
console.log(Object.entries(companySalaries).sort((a, b) => b[1] - a[1])); // [["Pete", 300], ["Mary", 250], ["John", 100]]

function topSalary(salaries) {
    Object.entries(salaries) // Transforma o objeto em um array de [chave, valor]
        .sort((a, b) => b[1] - a[1]); // Ordena o array com base nos valores (salários) em ordem decrescente

    return Object.entries(salaries)[0][0]; // Retorna a chave (nome) do primeiro elemento do array ordenado
}

// sort example
[1, 6, 3, 2].sort((a, b) => a - b); // [1, 2, 3, 6] - Ordenação numérica crescente
[1, 6, 3, 2].sort((a, b) => b - a); // [6, 3, 2, 1] - Ordenação numérica decrescente