import fetchIP from "./fetchIP";
import validateIP from "./validateIP";

export default class Model{
  async fetch(ip){
    const valid = validateIP(ip);
    if(valid){
      const data = await fetchIP(ip);
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