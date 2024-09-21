

export default class Controller{
  constructor(model, view){
    this.model = model;
    this.view = view;
  }
  run(){
    console.log("ran");
    console.log(this.model.test());
  }
}



/*
Output example
{
  "ip": "0.0.0.0",
  "city": "Lagos",
  "region": "Lagos",
  "country": "NG",
  "loc": "8.521,92.647",
  "org": "AS65152 MTN NIGERIA Communication limited",
  "timezone": "Africa/Lagos"
}
*/