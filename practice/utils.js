const {module}=require("node:module");
const HelloFunc= require('./helloWorld');

console.log(HelloFunc);

console.log(HelloFunc.name);

//setTimeOut

setTimeout(() => {
    console.log(HelloFunc.name);
}, 5000);

//setInterval

setInterval(() => {
    HelloFunc.Hello();
}, 1000);

//Local Module
//Global Module
//3rd Party Module/Package
