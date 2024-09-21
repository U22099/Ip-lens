import './style.css';
import Model from "./script/model/init.js";
import View from "./script/view/init.js";
import Controller from "./script/controller/init.js";

//Initialising the model, view and controller classes
const model = new Model();
const view = new View();
const controller = new Controller(model, view);
controller.run();