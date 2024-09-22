export const getElement = (elementID) => {
  if (!elementID) {
    console.error(`Element with ID '${elementID}' not found.`);
    return;
  }
  
  return document.getElementById(elementID);
}
