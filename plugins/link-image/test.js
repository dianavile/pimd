const {Document} = require('../..')
const plugin = require('.')

describe('Link/Image-plugin', () => {
  xit('should add a pi element to an link', () => {
    const input = unindent`
      a Test <?: a my-pi.element ?>
    `
    const doc = new Document(input)
    doc.config.use(plugin)
    const html = doc.render()
    expect(html)
      .to.have.selector('a my-pi.element')
  })

  xit('should add a pi element to an image', () => {
    const input = unindent`
      img Test <?: img my-pi.element ?>
    `
    const doc = new Document(input)
    doc.config.use(plugin)
    const html = doc.render()
    expect(html)
      .to.have.selector('img my-pi.element')
  })
 
})

