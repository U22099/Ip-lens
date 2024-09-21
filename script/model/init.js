import fetchIP from "./fetchIP";
import validateIP from "./validateIP";

export default class Model{
  async fetch(IP){
    const valid = validateIP(IP);
    if(valid){
      const data = await fetchIP(IP);
      if(!data){
       return {error: "An error occured please try again"}
      }
      return data;
    } else {
      return {error: "IP is invalid"}
    }
  }
  test(){
    console.log("test");
    return validateIP("2.152.255.1");
  }
}