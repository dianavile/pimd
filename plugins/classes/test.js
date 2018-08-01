const {Document} = require('../..');
const plugin = require('.');
//const test = require('./test.js');

// Describe testcase:
describe('Info strings', () => {
  //test add class to H1 element
  it('should add a class to a H1 headline', () => {
    const input = '# Test <?: .my-class ?>'
    const doc = new Document(input)
    doc.config.add(plugin)
    const html = doc.render()

    expect(html).to.have.selector('h1.my-class')
//Why not use MOCHA ```assert(html).to.have.selector('h1.my-class')?```
//Why not Invoke with done() if test is complete?

// Also needed for H2-H6 elements, like for example?:
  it('should add a class to a H2 headline', () => {
      const input = '## Test <?: .my-class ?>'
      const doc = new Document(input)
      doc.config.add(plugin)
      const html = doc.render()

      expect(html).to.have.selector('h2.my-class')
 })

  //test add multiple classes to paragraph
  it('should add multiple classes to a paragraph', () => {
    const input = `Test <?: .my-class .my-second-class ?>`
    const doc = new Document(input)
    doc.config.add(plugin)
    const html = doc.render()

    expect(html).to.have.selector('p.my-class.my-second-class')
  })

   //test add class to codeblock
  it('should add a class to a code block', () => {
    const input = `~~~ html .my-class <p>Lorem</p> ~~~`
    const doc = new Document(input)
    doc.config.add(plugin)
    const html = doc.render()
    
    expect(html).to.have.selector('div.my-class')
  })

//test add class to table
it('should add a class to a table element', () => {
  const input = `~~~ html .my-table <td> </td> ~~~`
  const doc = new Document(input)
  doc.config.add(plugin)
  const html = doc.render()

  expect(html).to.have.selector('div.my-table')
  })
 
})
/* why use use() method instead of add()?
 * no white space needed between test and expectation 
*/
})

