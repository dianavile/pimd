module.exports = function (config) {
  config.addInfoStringParser(/\.([^ ]+)/, function (match, attribute) {
    this.element.attribute.add(attribute)
  })
}
