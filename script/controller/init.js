
export default class Controller{
  constructor(model, view){
    this.model = model;
    this.view = view;
    this.btn = this.view.getElement("btn");
    this.output = ["ip", "hostname", "city", "region", "country", "latitude", "longitude", "org", "postal", "timezone"]
  }
  run(){
    this.btn.addEventListener("click", async ()=>{
      const ip = this.view.getFromDom("input");
      const result = await this.model.fetch(ip);
      if(!result) clear();
      display(result);
     })
  }
  display(result){
    this.output.map(name => {
      this.view.writeToDom(name, result[name]);
    })
  }
  clear(){
    this.output.map(name => {
      this.view.writeToDom(name, "");
    })
  }
}