export default function validateIP(IP) {
  //Declares a regular expression to check if input only contains number, hexadecimal numbers and . or :
  const regex = /^([0-9a-fA-F]|\:|\.)+$/;
  //Returns true or false
  return regex.test(IP);
}
