const [
    generateQRCodeImage,
    generateQRCodeTerminal,
  ] = require('../src/qr-generator')
  
  const assert = require('assert')
  const fs = require('fs')
  const chai = require('chai')
  const chaiSpies = require('chai-spies')
  const sinon = require('sinon')
  
  chai.use(chaiSpies)
  
  describe('generateQRCodeTerminal', () => {
    it('should generate a QR code to console', (done) => {
      const data = 'test data'
  
      const consoleLogSpy = sinon.spy(console, 'log')
  
      generateQRCodeTerminal(data)
  
      setTimeout(() => {
        assert(consoleLogSpy.firstCall.calledWith('QR code generated below'))
        assert(consoleLogSpy.firstCall.calledWith(sinon.match.string))
        done()
      }, 500)
    })
  })
  
  describe('generateQRCodeImage', () => {
    it('should generate and save a QR code image', (done) => {
      const data = 'test data'
      const name = 'test'
  
      generateQRCodeImage(data, name)
  
      setTimeout(() => {
        // Check if the image file exists
        fs.access(`${name}.png`, (err) => {
          assert.ifError(err)
          done()
        })
      }, 500)
    })
  })
  