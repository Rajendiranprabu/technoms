// console.log("Page Loaded")
// console.warn("Page loaded with warnings")
// console.error("This page as an error")

const form1 = document.getElementById("form1")

form1.style.background = "grey"

console.log(document.querySelector('.name'))

const subbtn = document.querySelector('#submit')

subbtn.style.background = "green";
subbtn.style.color = 'white';

let b = true;
subbtn.addEventListener('click', (e) => {
    console.log("Clicked")
    if (b) {
        subbtn.style.background = "blue";
        b = false;
    }
    else {
        subbtn.style.background = "green";
        b = true
    }
})

const clist = document.querySelector('#clist');

clist.firstElementChild.innerHTML = '<h3>Java 13</h3>';
clist.children[1].innerHTML = '<h3>C#</h1>'
const li2 = document.createElement('li')
li2.innerText = "Java Server Pages"
clist.appendChild(li2);

const form2 = document.createElement('form');
const txt = document.createElement('input')
form2.appendChild(txt);

const bd = document.getElementsByTagName('body')

bd.appendChild(form2);
//clist.firstElementChild.remove()

