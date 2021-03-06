const readline = require("readline");
const {CaesarCipher: CaesarCipher} = require("./helpers");

let plainText,cipherKey;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let theCipher = new CaesarCipher(rl);

new Promise((resolve) =>{
    let warningMessage = "Make sure to only enter alphabetical characters";
    theCipher.prompt("Enter Text to Cipher: \n", /^[a-zA-Z]+$/,resolve, warningMessage);

})

.then((resolve) =>{
    plainText = resolve;

    return new Promise((resolve) => {
        let warningMessage = "Make sure to only enter Numerical characters";
        theCipher.prompt("Enter a Key: \n", /^[0-9]+$/, resolve,warningMessage );

    })
})

.then((resolve)=>{
    cipherKey = resolve;

    rl.close();

    return new Promise((resolve) => {
        theCipher.cipherText(plainText, cipherKey, resolve);
    });
})

.then((resolve) =>{
    console.log(`Your Ciphered Text is: \n${resolve}`);
})

