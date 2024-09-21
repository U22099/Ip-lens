import './style.css';
import Model from "./model/init.js";
import View from "./view/init.js";
import Controller from "./controller/init.js";

//Initialising the model, view and controller classes
const model = new Model();
const view = new View();
const controller = new Controller(model, view);