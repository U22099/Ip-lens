export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.btn = this.view.getElement("btn");
    this.output = [
      "ip",
      "hostname",
      "city",
      "region",
      "country",
      "latitude",
      "longitude",
      "org",
      "postal",
      "timezone",
    ];
  }

  async init() {
    this.load();
    const result = await this.model.fetch();
    if (!result) {
      this.clear();
    } else if (result.bogon) {
      this.view.writeToDom("ip", result.ip);
    } else {
      this.display(result);
    }
    this.btn.addEventListener("click", async () => await this.run());
  }
  async run() {
    this.load();
    const ip = this.view.getFromDom("input");
    const result = await this.model.fetch(ip);
    if (!result) {
      this.clear();
    } else if (result.bogon) {
      this.view.writeToDom("ip", result.ip);
    } else {
      this.display(result);
    }
  }

  display(result) {
    this.model.createMap(result.latitude, result.longitude)
    this.output.forEach((name) => {
      this.view.writeToDom(name, result[name]);
    });
  }

  load() {
    this.output.map((name) => {
      this.view.writeToDom(name, "Loading...");
    });
  }

  clear() {
    this.output.map((name) => {
      this.view.writeToDom(name, "");
    });
  }
}
