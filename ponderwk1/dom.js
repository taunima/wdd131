const title = document.querySelector('h1');

console.log(title);

title.textContent = "Web Page Components";

document.querySelector('#topics').style.color = 'red';

let list = document.querySelectorAll('.list');

list.style.border = '3px solid black';

let para = document.querySelectorAll('p');

para.style.backgroundColor = 'lightblue';

//para.classList.add('background'); this works with the css but is commented out for now

const image = document.querySelector('img');
image.setAttribute('src','images/web.png');


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'blue';
});
