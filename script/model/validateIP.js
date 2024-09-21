export default function validateIP(IP){
  const regex =/^([0-9a-fA-F]|\:|\.)+$/;
  return regex.test(IP);
}