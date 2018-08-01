/*
 * Module exports "configuration" function 
 * to add ? 
 * What I understand here is you put an ID(#) with Markdown
 * to automatically generate HTML code. But I do not fully understand how.
 */

module.export = function (config) {
config.addInfoStringParser(/#([^ ]+)/, 
function (match, id) {
	this.element.id = id;
})
}

