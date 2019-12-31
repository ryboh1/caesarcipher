exports.CaesarCipher = function CaesarCipher(readline)
{

    this.rl = readline,

    this.prompt = (theQuestion, theRegex, theResolve, theWarningMessage) => {

        this.rl.question(theQuestion, (answer) =>{
            let noSpacesAnswer = answer.replace(/\s+/g, '');
            let theCondition = theRegex.test(noSpacesAnswer);

            if( theCondition ){
                theResolve(answer);
            }
            else{
                console.log(theWarningMessage);
                this.prompt(theQuestion,theRegex, theResolve, theWarningMessage);
            }
        });
    };


    this.cipherText = (thePlainText, theCipheringNumber, resolve) =>{
        let cipheredText = "";        
        let lowerPlainText = thePlainText.toLowerCase();
        let movingSpaces = theCipheringNumber % 26;

        for( let i = 0; i < thePlainText.length; i++){
            
            currentLetter = lowerPlainText[i].charCodeAt(0);
            
            if(currentLetter != 32){
                let currentAlphabetPosition = ((currentLetter + movingSpaces) % 97 ) % 26;
                currentAlphabetPosition = 97 + currentAlphabetPosition;
                cipheredText += String.fromCharCode(currentAlphabetPosition);
            }

            else{
                cipheredText += lowerPlainText[i];
            }
        
        };

        resolve(cipheredText);

    };

};