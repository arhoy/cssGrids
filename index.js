const express = require('express');
const app = express();

const courses = [
    {id: 1, name: 'How to code with style'},
    {id:2, name: 'Working with Node.JS'}
];

console.log(courses);
console.log(app);
console.log(`NODE_ENV is: ${process.env.NODE_ENV}`);