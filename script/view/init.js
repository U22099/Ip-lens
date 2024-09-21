import { getElement as getElementFunc } from './getElement.js';
import { getFromDom as getFromDomFunc } from './getFromDom.js'
import { writeToDom as writeToDomFunc } from './writeToDom.js'

export default class View {
  getElement() {
    getElementFunc();
  }
  
  getFromDom() {
    getFromDomFunc();
  }
  
  writeToDom() {
    writeToDomFunc();
  }
}