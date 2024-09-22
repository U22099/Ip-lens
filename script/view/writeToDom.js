export const writeToDom = (elementID, input, boolean) => {
  let element = document.getElementById(elementID);
  //Checks if input id if null/undefined/empty and returns null
  if (!element) {
    console.error(`Element with ID '${elementID}' not found.`);
    return;
  }

  //Checks if boolean input is true
  if (boolean == true) {
    //If yes write to the value property
    element.value = input || "";
  } else {
    //If no write to the innerText property
    element.innerText = input || "";
  }
};
