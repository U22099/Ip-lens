export default function validateIP(IP){
  if(!IP){
    return true
  } else {
    //Courtesy of Lumina
    const regex = /^$/;
      
    return regex.test(IP);
  }
}


//My regex😅
/* "^(?:0\.0\.0\.0|(?<!0)(\d{1,3})(?<![256-999])\.){4}(?<!\.)$|^(?:(?<!0)(([0-9a-fA-F]{1,4})|)\:){8}" */