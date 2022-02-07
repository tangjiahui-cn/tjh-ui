const rootResolve = require("./rootResolve");

module.exports = function (nameMap) {
  return Object.keys(nameMap).reduce((alias, key) => {
    alias[key] = rootResolve(nameMap[key]);
    return alias;
  }, {});
};
