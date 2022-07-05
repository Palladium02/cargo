const { Container } = require("../build");

class User {
  constructor() {
    this.name = "Test";
  }
};

Container.set("_id", User);
