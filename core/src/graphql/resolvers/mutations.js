import fs from "fs";
import path from "path";

const basename = path.basename(__dirname);
let modules = {};

fs.readdirSync(__dirname + "/mutation")
  .filter(file =>
    file.indexOf("." !== 0 && file !== basename && file.slice(-3) === ".js")
  )
  .forEach(file => {
    const obj = require(__dirname + "/mutation/" + file);
    modules = { ...modules, ...obj.default };
  });

export default modules;
