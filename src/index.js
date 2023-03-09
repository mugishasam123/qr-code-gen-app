const prompt = require('prompt-sync')()
const [generateQRCodeImage, generateQRCodeTerminal] = require('./qr-generator')

const main = async () => {
  console.log('Welcome! Enter any data and I will generate QR code for you! \n')
  let choice = 0
  const text = prompt('Enter Data: ')

  do {
    console.log('1. Generate QR as image')
    console.log('2. Generate QR to terminal')
    console.log('3. Exit the program')

    choice = prompt('CHOOSE AN OPTION: ')

    switch (parseInt(choice, 10)) {
      case 1:
        const imageName = prompt('Enter image file name: ')
        generateQRCodeImage(text, imageName)
        choice = 0
        break
      case 2:
        generateQRCodeTerminal(text)
        choice = 0
        break
      case 3:
        choice = 0
        break
      default:
        console.log('Please select among provided options')
    }
  } while (choice !== 0)
}

main()
