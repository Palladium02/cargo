const { Container } = require("../build");
require("./some.test");

console.log(
  Container.get("_id")
);