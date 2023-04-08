
// call
// function sayHello () {
//     console.log(`Hello! my name is ${this.name}`);
//     console.log(`Hello! my name is ${this.age}`);
// }

// const person = {
//     name: 'John',
//     age: 25,
// } 

// sayHello.call(person)


// apply
// function sayHello(firstName, lastName) {
//     console.log(`Hello, my name is ${firstName} ${lastName}`);
// }

// const person = {
//     firstName: 'john',
//     lastName: 'bebe'
// }

// sayHello.apply(person, ['john', 'bebe'])

// bind
// function sayHello () {
//     console.log(`Hello! my name is ${this.name}`);
// }

// const person = {
//     name: 'John'
    
// }

// const sayHelloJohn = sayHello.bind(person)

// sayHelloJohn()


// function sayHello () {
//     console.log(`Hello! my name is ${this.age}`);
// }

// const person = {
//     age: 25
// }

// const sayHelloAge = sayHello.bind(person)
// sayHelloAge()

// 3

// const array1 = ['ilim', 'atay', 'nuris'];
// // const array2 = ['5','4','5']
// const array2 = ['5', '5', '5']

// array1.forEach(element => console.log(element));
// array2.forEach(element => console.log(element));




// function person(name,live) {
//     this.name = name;
//     this.live = live;
// }

// person.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name} and I live ${this.live}`);
// }

// const person1 = new person('Ilim', 'in Bishkek')
// // const person2 = new person('Ilim', 'in Italy')

// person1.sayHello()
// // person2.sayHello()




// function sayHello () {
//     console.log(`My age ${this.age}`);
// }

// const person = {
//     age: 55
    
// }

// const sayHelloAge = sayHello.bind(person)

// sayHelloAge()



// const array1 = [1,2,3,4,5]


// const initialValue = 0;
// const sum = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue);

// array1.call(sum)









// function carBrands () {
//     console.log(`Model: ${this.model}`);
// }

// const car = {
//     model: 'Toyota'
    
// }

// const carBrandsToyota = carBrands.bind(car)

// carBrandsToyota()




// const car = new Function ('Toyota', 'Camry', 2010)

// function carBrands() {
//     console.log(`model: ${this.model}`);
// }

// const car2 = {
//     model: 'toyota'
    
// }

// const car3 = {
//     mark: 'camry'
// }

// const car4 = {
//     year: 2010
// }

// const carBrandsToyota =carBrands.bind(car2)
// const carBrandsCamry =carBrands.bind(car3)
// const carBrandsYear =carBrands.bind(car4)



