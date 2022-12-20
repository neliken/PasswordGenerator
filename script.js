class PasswordGenerator {
    constructor() {
        this.slider = document.getElementById("slider");
        this.characterLength = document.getElementById("characterLengthValue");
        this.password = document.getElementById("password");
        this.spans = document.querySelectorAll('span');
        this.checkboxs = document.getElementsByTagName('input');
        this.stregthtType = document.getElementById('stregthtType');
        this.characterLengthValue = 10;
        this.chars = "";
    }

    checkPasswordStrength(generatedPassword) {
        let score = zxcvbn(generatedPassword).score;
        let scoreType = ['LOW', 'MEDIUM-LOW' ,'MEDIUM', 'COMPLEX'];

        this.deleteActiveSpans();
        for (let i = 0; i < this.spans.length; i++) {
            this.stregthtType.innerText = scoreType[score-1];
            if(i < score) {
                this.spans[i].classList.add('active');
            }
        }
    }

    deleteActiveSpans() {
        this.spans.forEach((span) => {
            span.classList.remove('active');
        })
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
        this.checkPasswordStrength(generatedPassword);
    }

    copyPassword() {
        navigator.clipboard.writeText(this.password.innerText);
    }
}

const passwordGenerator = new PasswordGenerator();
