const options = {
    errorCorrectionLevel: 'H',
    type: 'image/png',
    quality: 0.92,
    margin: 1,
    scale: 5,
  }
  
  // Options for the QR code
  const optionsTerminal = {
    errorCorrectionLevel: 'H',
    type: 'terminal',
    quality: 0.92,
    margin: 1,
    scale: 2,
  }
  
  module.exports = [options, optionsTerminal]
  