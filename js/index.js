

const someElement = document.createElement('div')

someElement.innerHTML = 'Hello, DOM!'
someElement.style.backgroundColor = 'grey'

document.body.appendChild(someElement)

someElement.style.textAlign = 'center';


const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

someElement.appendChild(ul);

ul.style.textAlign = 'left';

ul.removeChild(ul.querySelector('li:nth-child(2)'));

ul.remove();

//testing
