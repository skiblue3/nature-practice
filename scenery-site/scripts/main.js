let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/polar-lights.jpg') {
        myImage.setAttribute('src', 'images/river-house.jpg');
    } else {
        myImage.setAttribute('src', 'images/polar-lights.jpg');
    }    
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        alert('Enter valid name!')
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = `Nature! Welcome ${myName}!`;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = `Nature! Welcome ${storedName}!`;
}

myButton.onclick =  function() {
    setUserName();
}