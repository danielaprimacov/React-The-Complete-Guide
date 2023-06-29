// import { apiKey } from "./util";
// import apiKey from "./util";
// import { apiKey, abs as content } from "./util";
// import * as util from "./util";

// console.log(util.abs);
// console.log(content);

// let userMessage = "Hello World!";
// const userMessage = "Hello World"; // can't be reunsigned with a new value

// console.log("Hello World!");
// console.log(userMessage);

// console.log(16 * 2580);
// console.log("Hello" + " World" + "!");
// console.log(10 === 5);
// console.log(10 <= 10);

// if (10 === 10) {
//   console.log("works");
// }

// function createGreet(userName, message = "Hello!") {
//   // console.log(userName + " " + message);
//   return "Hi, I am " + userName + ". " + message;
// }

// // greet("username", "Hello");
// const greet = createGreet("Macs", "What's up?");
// console.log(greet);

// export default () => {
//   console.log("Hello");
// }

// const user = {
//   name: "Max",
//   age: 26,
//   greet() {
//     return "Hello from " + this.name;
//   }
// };

// console.log(user);
// console.log(user.age);
// console.log(user.greet());

// // blue print
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("Hi");
//   }
// }

// const user1 = new User("Manuel", 34);
// console.log(user1);


// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[1]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Reading");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ name: item }));
// console.log(editedHobbies);

// const [firstName, lastName] = ["Max", "Primacov"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// console.log(firstName + " " + lastName);

// const {name: userName, age} = {
//   name: "Max",
//   age: 26
// };

// // const name = user.name;
// // const age = user.age;

// console.log(userName);
// console.log(age);


// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Max",
//   age: 26
// };

// const newHobbies = ["Reading"];

// const mergetHobbies = [...hobbies, ...newHobbies];
// console.log(mergetHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user
// };

// console.log(extendedUser);

// const password = prompt('Your password');

// if (password === "Hello") {
//   console.log("Hello!!!")
// } else if (password === "hello") {
//   console.log("Acces denied");
// } else if (password === "secret") {
//   console.log("Password is secret");
// } else {
//   console.log("Wrong password");
// }

// const hobbies = ["Sports", "Cooking", "Reading"];

// for (let i = 0; i < hobbies.length; i++) {
//   console.log(hobbies[i]);
// }

// for (const hobby of hobbies) {
//   console.log(hobby);
// }


// const list = document.querySelector("ul");
// list.remove();

// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out!!!!!");
// };

// setTimeout(() => { console.log("Timed out"); }, 2000); // set timer
// setTimeout(handleTimeout, 3000);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => console.log("Hi"));

// function init() {
//   function greet() {
//     console.log("Hi");
//   }
//   greet();
// }

// init();

// let userMessage = "Hello"; // primite value
// userMessage = "Hello there!";
// console.log(userMessage);

// const hobbies = ["Sports", "Cooking"];
// // hobbies = [];
// hobbies.push("Working");
// console.log(hobbies);

