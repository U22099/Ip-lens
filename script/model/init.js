import fetchIP from "./fetchIP";
import handleData from "./handleData";
import validateIP from "./validateIP";
import showToast from "./showToast";

export default class Model{
  async fetch(IP){
    const valid = validateIP(IP);
    if(!valid){
      showToast("error", "Invalid Input", "Input must be an IPv4 or IPv6");
      return null
    }
    const data = await fetchIP(IP);
    if(!data){
     return {error: "An error occured please try again"}
    } else if(data.status === 429){//rate limit reached
      showToast("error", "Request Limit Reached", "Request limit reached, available until next month");
      return null
    }
    return handleData(data);
  }
  async test(){
    //const data = await this.fetch("255.255.255.255");
    //console.log(data)
  }
}