"use strict";
// // let myAge: number = 30;
// // let firstName: string = "Mario";
// let isFictional: boolean;
const authorOne = { name: "mario", avatar: "/img/mario.png" };
const newPost = {
    title: "my first post",
    body: "something interesting",
    tags: ["gaming", "tech"],
    create_at: new Date(),
    author: authorOne,
};
// as function argument types
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// With  Arrays
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
// union types
function kgToLbs(weight) {
    if (typeof weight === "number")
        return console.log(weight * 2.2);
    else {
        return console.log(parseInt(weight) * 2.2);
    }
}
kgToLbs(10);
kgToLbs("20kg");
