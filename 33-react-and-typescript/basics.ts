// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string | string[];
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ["Sport", "Cooking"];

// Type Alias - type definition
type Person = {
  name: string,
  age: number
};

let person: Person;
person = {
  name: "Max",
  age: 28
};

let people: Person[];

// Type Inference

let course: string | number  = "React - The Complete Guide";
course = 123456;

