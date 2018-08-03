const {Document} = require('../..')
const plugin = require('.')

describe('Attributes', () => {
  xit('should add an attribute to an element or blockcode', () => {
    const input = unindent`
      X Test <?: [attribute=value] ?>
    `
    const doc = new Document(input)
    doc.config.use(plugin)
    const html = doc.render()
    expect(html)
      .to.have.selector('attribute="value"')
  })

  xit('should add an attribute to ...', () => {
    const input = unindent`
      Test <?: .my-class .my-second-class ?>
    `
    const doc = new Document(input)
    doc.config.use(plugin)
    const html = doc.render()
    expect(html)
      .to.have.selector('p.my-class.my-second-class')
  })

  xit('should add an attribute to ...', () => {
    const input = unindent`
      ~~~ html .my-class
      <p>Lorem</p>
      ~~~
    `
    const doc = new Document(input)
    doc.config.use(plugin)
    const html = doc.render()
    expect(html)
      .to.have.selector('div.my-class')
  })
})


/*TESTCASES
`[attribute=value]` → `attribute="value"`
`[attribute="value"]` quotation marks must be stripped → `attribute="value"`
`[attribute='value']` quotation marks must be stripped → `attribute="value"`
`[attribute='[value]']` quotation marks must be stripped → `attribute="[value]"`
`[attribute]` only the attribute name should be set → `attribute`
*/