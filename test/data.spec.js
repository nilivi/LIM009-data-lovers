global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

//TESTEAR CON JEST
describe('lol', () => {
  
  it('debería ser un objeto', () => {
    assert.equal(typeof lol, 'object');
  });

  describe('lol.getNameAndImageOfChampion', ()=>{
    it('debería ser una función', () => {
      assert.equal(typeof lol.getNameAndImageOfChampion, 'function');
    });
  })
  describe('lol.getNameAndImageOfChampion', ()=>{
    it('debería ser una función', () => {
      assert.equal(typeof lol.getNameAndImageOfChampion, 'function');
    });
  })
})
