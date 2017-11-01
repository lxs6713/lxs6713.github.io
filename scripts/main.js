var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

myHeading.onclick = function() {
    alert('Ouch! Stop poking me!');
}


var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/a.jpg') {
      myImage.setAttribute ('src','images/b.jpg');
    } else {
      myImage.setAttribute ('src','images/a.jpg');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello world, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello world, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}