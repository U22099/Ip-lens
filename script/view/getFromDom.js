export const getFromDom = (elementID) => {
  //Checks if input id if null/undefined/empty and returns null
  if (!elementID) {
    console.error(`Element with ID '${elementID}' not found.`);
    return;
  }
  //Returns value from the DOM element using the id
  return document.getElementById(elementID).value;
};
