class PasswordGenerator {
    constructor() {
        this.slider = document.getElementById("slider");
        this.characterLength = document.getElementById("characterLengthValue");
        this.password = document.getElementById("password");
        this.spans = document.getElementsByClassName("span");
        this.chars = "";
    }

    getCharacterLengthValue() {
        this.characterLengthValue = this.slider.value;
        this.characterLength.innerHTML = this.characterLengthValue
    }

    setChar(chars) {
        if(window.event.target.checked) {
            this.chars = this.chars + chars;
        } else {
            this.chars = this.chars.replace(chars, '');
        }
    }

    generatePassword() {
        var generatedPassword = "";
        for (var i = 0; i < this.characterLengthValue; i++) {
            var randomNumber = Math.floor(Math.random() * this.chars.length);
            generatedPassword += this.chars.substring(randomNumber, randomNumber +1);
        }
        this.password.innerHTML = generatedPassword;
    }

    copyPassword() {
        
    }
}

const passwordGenerator = new PasswordGenerator();