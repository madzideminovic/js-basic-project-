var inputs = document.querySelectorAll("input");

var errors = {
    "name_surname": [],
    "user_name": [],
    "email": [],
    "password": [],
    "repeat_password": [],
    
}

inputs.forEach(element => {
    element.addEventListener('change', e => {

        var curentInput = e.target;
        var inputValue = curentInput.value;
        var inputName = curentInput.getAttribute('name');

        if (inputValue.length > 4) {
            errors[inputName] = [];

            switch (inputName) {
                case 'name_surname':
                    var validation = inputValue.trim();
                    validation = validation.split(" ");
                    if (validation.length < 2) {
                        errors[inputName].push("You must enter your name and surname");
                    }

                    break;
                    
                    case 'email': 
                    if(!validateEmail(inputValue)){
                       errors[inputName].push("Incorrect email addres");
                    }
                    break;

                    case 'repeat_password':
                        var password = document.querySelector('input[name="password"]').value;
                        if (inputValue !== password) {
                            errors[inputName].push("Passwords don't match");
                        }
            }
        }
        else {
            errors[inputName] = ['You must enter more than five characters'];
        }

        populateErrors(errors);

    });
});

const togglePasswords = document.querySelector("#togglePasswords");
const password = document.querySelector("#password");

togglePassword.addEventListener('click', function (e) {

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    this.classList.toggle('bi-eye');
});

const togglePassword = document.querySelector("#togglePassword");
const repeatPassword = document.querySelector("#repeat_password");

togglePasswords.addEventListener('click', function (e) {

    const type = repeatPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    repeatPassword.setAttribute('type', type);
    
    this.classList.toggle('bi-eye');
});


const populateErrors = (errors) => {

    for (var elem of document.querySelectorAll('ul')) {
        elem.remove();
    }

    for (var key of Object.keys(errors)) {
        var input = document.querySelector(`input[name="${key}"]`);
        var parentElement = input.parentElement;
        var errorsElement = document.createElement("ul");
        parentElement.appendChild(errorsElement);


        errors[key].forEach(error => {
            var li = document.createElement("li");
            li.innerText = error;

            errorsElement.appendChild(li);
        });

        
    }
}

const validateEmail = email => {
    if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        return true;
    }
    return false;
}