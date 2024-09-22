export const getElement = (elementID) => {
  //Checks if input id if null/undefined/empty and returns null
  if (!elementID) {
    console.error(`Element with ID '${elementID}' not found.`);
    return;
  }
  //Returns DOM element using the input id
  return document.getElementById(elementID);
};
