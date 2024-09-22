import { getElement as getElementFunc } from "./getElement.js";
import { getFromDom as getFromDomFunc } from "./getFromDom.js";
import { writeToDom as writeToDomFunc } from "./writeToDom.js";

export default class View {
  //Imports and initialise each function
  getElement(id) {
    return getElementFunc(id);
  }

  getFromDom(id) {
    return getFromDomFunc(id);
  }

  writeToDom(id, input, boolean = false) {
    writeToDomFunc(id, input, boolean);
  }
}
