export const writeToDom = (input, elementID, boolean = false) => {
  let element = document.getElementById(elementID);
  
  if (!element) {
    console.error(`Element with ID '${elementID}' not found.`);
    return;
  }
    
  if (boolean == true) {
    element.insertAdjacentHTML('beforebegin', input)
  } else {
    element.innerText = input;
  }
  
}