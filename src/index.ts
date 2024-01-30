// // let myAge: number = 30;
// // let firstName: string = "Mario";
// let isFictional: boolean;

// // myAge = 31;
// // firstName = "luigi";
// isFictional = true;

// // let planet = "Earth";
// // let moons = 1;
// let isLarge = false;

// // planet = "saturn";
// // moons = 123;
// // isLarge = true;

// // // null & undefined
// // let something: null;
// // let anotherthing: undefined;

// // something = null;
// // anotherthing = undefined;

// // console.log("hello, world!!!");
// console.log('hello ninja',isLarge)

// Arrays

// let names: string[] = ["mario", "peach", "peach"];
// let ages: number[] = [25, 28, 24];
// names.push("bower");
// ages.push(33);

// //Arrays with object literals
// let fruits = ["apples", "pears", "bananas", "mangos"];

// fruits.push("peaches");

// const f = fruits[3];

// let things = [1, true, "hello"];
// console.log(things);

// const t = things[0];

// // object literals

// let newUser: { fristName: string; age: number; id: number } = {
//   fristName: "mario",
//   age: 30,
//   id: 5,
// };

// newUser.fristName = "peach";
// newUser.id = 2;

// // type infernce with object literals

// let person = {
//   name: "luigi",
//   score: 35,
// };

// person.name = "browser";
// person.score = 40;

// const score = person;
// console.log(score);

// // funtions reguler

// function addTwoNumbers(a: number, b: number) {
//   return console.log(a + b);
// }

// // arrow funtion

// const subtractTwoNumbers = (a: number, b: number): number => {
//   return a - b;
// };

// addTwoNumbers(3, 4);
// subtractTwoNumbers(5, 9);

// function addAllNumers(items: number[]): void {
//   const total = items.reduce((a, c) => a + c, 0);
//   console.log(total);
// }

// addAllNumers([5, 7, 9, 11, 3, 2, 1]);

// // return type inference

// function formatGreeting(name: string, greeting: string) {
//   return `${greeting}, ${name}`;
// }

// formatGreeting("wfwf", "cferf");

// const result = formatGreeting("mario", "hello");

// any type

// let age: any;
// let title;

// age = 30;
// age = false;

// title = 25;

// title = {
//   hello: "world",
// };

// title = "esf";

// let things: any[] = ["hello", true, 30, null];

// things.push({ id: 123 });

// // function & any

// function addTogether(value: any): any {
//   return value + value;
// }

// //tuples

// let person: [string, number, boolean] = ["mario", 30, true];

// let hsla: [number, string, string, number];

// hsla = [200, "100%", "50%", 1];

// let xy: [number, number];

// xy = [94.7, 20.1];

// function useCoords(): [number, number] {
//   const lat = 100;
//   const long = 50;

//   return [lat, long];
// }

// const [lat, long] = useCoords();

// // named tuples

// let user: [name: string, age: number];

// user = ["peach", 25];

// console.log(user[0]);

// interfaces

interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = { name: "mario", avatar: "/img/mario.png" };

interface Post {
  title: string;
  body: string;
  tags: string[];
  create_at: Date;
  author: Author;
}

const newPost: Post = {
  title: "my first post",
  body: "something interesting",
  tags: ["gaming", "tech"],
  create_at: new Date(),
  author: authorOne,
};

// as function argument types

function createPost(post: Post): void {
  console.log(`Created post ${post.title} by ${post.author.name}`);
}

createPost(newPost);

// With  Arrays

let posts: Post[] = [];

posts.push(newPost);

//type aliases

type Rgb = [number, number, number];

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
}

const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);

// union types

function kgToLbs(weight: number | string) {
  if (typeof weight === "number") 
  return console.log( weight * 2.2);
 
  else {
    return console.log(parseInt(weight) * 2.2);
    
  }
}

kgToLbs(10);
kgToLbs("20kg");
