import fetchIP from "./fetchIP";
import handleData from "./handleData";

export default class Model{
  async fetch(IP){
    const data = await fetchIP(IP);
    if(!data){
     return {error: "An error occured please try again"}
    }
    return handleData(data);
  }
  async test(){
    const data = await fetchIP("2a00:1450:4000:802::2001");
    console.log(handleData(data));
  }
}