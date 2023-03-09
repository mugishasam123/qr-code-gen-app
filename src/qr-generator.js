const qr = require('qrcode')
const fs = require('fs')
const [options, optionsTerminal] = require('./options')

const generateQRCodeImage = (data, name) => {
  // Generate the QR code as a Image
  qr.toBuffer(data, options, (err, buffer) => {
    if (err) throw err

    // Save the buffer to a file
    fs.writeFile(`${name}.png`, buffer, (err) => {
      if (err) throw err

      console.log(`QR code saved to ${name}.png`)
    })
  })
}

const generateQRCodeTerminal = (data) => {
  // Generate the QR code to console
  qr.toString(data, optionsTerminal, (err, code) => {
    if (err) throw err
    console.log('QR code generated below')
    console.log(code)
  })
}

module.exports = [generateQRCodeImage, generateQRCodeTerminal]
