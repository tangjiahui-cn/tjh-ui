module.exports = function (nameMap) {
  return Object.keys(nameMap).reduce((alias, key) => {
    alias[`^${key}/(.*)$`] = `<rootDir>/${nameMap[key]}/$1`
    return alias
  }, {})
}
