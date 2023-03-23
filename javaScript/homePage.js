let name = document.getElementById('fullName');
let input = document.getElementById('input');
let output = document.getElementById('result-box');
// function userName(){

// return .innerHTML = '<span>name</span>';
// }
document.getElementById('clear-btn').onclick = function () {
    input.value = null;
}

document.getElementById('clear-btn-2').onclick = function () {
    output.innerHTML = null;
}

let originalString = document.getElementById('originalString');
originalString.innerHTML = 'I love my country Pakistan.<br> I like my city Faisalabad.<br> I love my Homeland.'

function lowerCase() {
    let afterLowerCase = originalString.innerHTML.toLowerCase();
    output.innerHTML = afterLowerCase;
}

function upperCase() {
    let afterUpperCase = originalString.innerHTML.toUpperCase();
    output.innerHTML = afterUpperCase;
}

function capitalize() {
    originalString = originalString.innerHTML;
    originalString = originalString.split(" ");
    x = originalString.length;
    for (let i = 0; i < x; i++) {
        originalString[i] = originalString[i][0].toUpperCase() + originalString[i].substr(1).toLowerCase();
        output.innerHTML = originalString.join(" ");
    }
}

function betterFormat() {
    output.innerHTML = null;
    var inputField = input.value;
    if (!inputField) {
        return alert('Please enter your text in the Input Field.');
    }
    inputField = inputField.split(" ");
    x = inputField.length;
    for (let i = 0; i < x; i++) {
        inputField[i] = inputField[i][0].toUpperCase() + inputField[i].substr(1).toLowerCase();
        output.innerHTML = inputField.join(" ");
    }
}

let cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Sheikhupura', 'Kashmir'];

function addCity() {
    output.innerHTML = null;
    var inputField = input.value;
    if (!inputField) {
        return Toastify({
            text: "Please Enter The City Name",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #305e80, #097976)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        
    }
    if (inputField.length < 3) {
        return Toastify({
            text: "Please Enter The Proper City Name",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #305e80, #097976)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        
    }

    inputField = inputField.toLowerCase();
    let firstInputField = inputField.charAt(0).toUpperCase();
    let finalInputField = firstInputField + inputField.substr(1);
    for (let i = 0; i < cities.length; i++) {
        if (finalInputField == cities[i]) {
            // return output.innerHTML = '<span style="color:green; font-weight : bold">' + '"' + finalInputField + '"' + '</span>' + ' is already in the list';
            return Toastify({
                text: "This is already in the list",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #305e80, #097976)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
            
        }

    }
    cities.push(finalInputField);
    // output.innerHTML = '<span style="color:green; font-weight : bold">' + '"' + finalInputField + '"' + '</span>' + ' has been added in the list';
    return Toastify({
        text: "Your city has been added to the list.",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #305e80, #097976)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
}

function printCities() {
    output.innerHTML = "";
    let serialNumber = 1;
    for (let i = 0; i < cities.length; i++) {
        output.innerHTML += serialNumber + ') ' + cities[i] + '<br>';
        serialNumber++;
    }
}

function checkCity() {
    output.innerHTML = null;
    var inputField = input.value;
    if (!inputField) {
        return alert('Please enter a city in the Input Field.');
    }
    if (inputField.length < 3) {
        return alert('Please enter city name in proper format.');
    }
    inputField = inputField.toLowerCase();
    let firstInputField = inputField.charAt(0).toUpperCase();
    let finalInputField = firstInputField + inputField.substr(1);
    for (let i = 0; i < cities.length; i++) {
        if (finalInputField == cities[i]) {
            return output.innerHTML = '<span style="color:green; font-weight : bold">' + '"' + finalInputField + '"' + '</span>' + ' has been found in the list.';
        }
        else {
            output.innerHTML = '<span style="color:red; font-weight : bold">' + '"' + finalInputField + '"' + '</span>' + ' is not found in the list.';
        }
    }
}

function findWord() {
    output.innerHTML = "";
    let newOriginalString = 'I love my country Pakistan I like my city Mananwala I love my Homeland';
    var inputField = input.value;
    inputField = inputField.toLowerCase();
    let firstInputField = inputField.charAt(0).toUpperCase();
    let finalInputField = firstInputField + inputField.substr(1);
    newOriginalString = newOriginalString.split(" ");
    x = newOriginalString.length;

    for (let i = 0; i < x; i++) {
        newOriginalString[i] = newOriginalString[i][0].toUpperCase() + newOriginalString[i].substr(1).toLowerCase();
        if (finalInputField == newOriginalString[i]) {
            return output.innerHTML = '<span style="color:green; font-weight : bold">' + '"' + finalInputField + '"' + '</span>' + ' is found at index ' + newOriginalString.indexOf(finalInputField) + '.';
        }
        output.innerHTML = '<span style="color:red; font-weight : bold">' + '"' + inputField + '"' + '</span>' + ' is not found in the string.';
    }
}
function replaceWord() {
    output.innerHTML = null;

    let originalString = document.getElementById('originalString');
    originalString.innerHTML = 'I love my country Pakistan.<br> I like my city Mananwala.<br> I love my Homeland.';

    var inputField = input.value;

    if (!inputField) {
        return alert('Please enter a word for replacing');
    }
    let beReplaced = prompt('Please enter the word you want to replace with :');
    if (!beReplaced) {
        return alert('Please enter the word to replace with "' + inputField + '".');
    }
    inputField = inputField.toLowerCase();
    beReplaced = beReplaced.toLowerCase();
    beReplaced = new RegExp(beReplaced, 'g');
    originalString = originalString.innerHTML.toLowerCase();

    let afterReplace = originalString.replace(beReplaced, inputField);
    afterReplace = afterReplace.split(" ");
    x = afterReplace.length;

    for (let i = 0; i < x; i++) {
        afterReplace[i] = afterReplace[i][0].toUpperCase() + afterReplace[i].substr(1).toLowerCase();
        output.innerHTML = afterReplace.join(" ");
    }
}