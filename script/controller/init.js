

export default class Controller{
  constructor(model, view){
    this.model = model;
    this.view = view;
  }
 run(){
    this.model.test()
  }
}