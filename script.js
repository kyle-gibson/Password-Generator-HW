var enter;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;
 
symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {
      enter = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));
    
    if (!enter) {
        alert("This requires a value");
    } else if (enter < 8 || enter > 128) {
            enter = parseInt(prompt("Your password must be between 8 and 128"));

    } else {
        confirmNumber = confirm("Would you like to include numbers?");
        confirmSymbol = confirm("Would you like to include special symbols?");
        confirmUppercase = confirm("Would you like to include uppercase letters?");
        confirmLowercase = confirm("Would you like to include lowercase letters?");
    };

    if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
   
    else if (confirmSymbol && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = symbol.concat(number, alpha, alpha2);
    }
  
    else if (confirmSymbol && confirmNumber && confirmUppercase) {
        choices = symbol.concat(number, alpha2);
    }
    else if (confirmSymbol && confirmNumber && confirmLowercase) {
        choices = symbol.concat(number, alpha);
    }
    else if (confirmSymbol && confirmLowercase && confirmUppercase) {
        choices = symbol.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    
    else if (confirmSymbol && confirmNumber) {
        choices = symbol.concat(number);

    } else if (confirmSymbol && confirmLowercase) {
        choices = symbol.concat(alpha);

    } else if (confirmSymbol && confirmUppercase) {
        choices = symbol.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }

    else if (confirmSymbol) {
        choices = symbol;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}