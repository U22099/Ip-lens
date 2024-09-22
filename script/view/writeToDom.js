export const writeToDom = (elementID, input, boolean) => {
  let element = document.getElementById(elementID);

  if (!element) {
    console.error(`Element with ID '${elementID}' not found.`);
    return;
  }

  if (boolean == true) {
    element.value = input || "";
  } else {
    element.innerText = input || "";
  }
};
