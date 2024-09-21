import './style.css';
import Model from "./script/model/init.js";
import View from "./script/view/init.js";
import Controller from "./script/controller/init.js";

console.log("hi")
//Initialising the model, view and controller classes
const model = new Model();
const view = new View();
const controller = new Controller(model, view);
console.log("hey")
controller.run();
console.log("hello")