document.addEventListener('DOMContentLoaded', () => {
  console.log('Dom loaded1');
  
  const form = document.querySelector('.form');
  form.addEventListener('submit',handleFormSubmit);
  
  const del = document.querySelector('#delete');
  del.addEventListener('click',handleDelete);
  
});

const handleFormSubmit = function(event) {
  event.preventDefault();
  
const list = document.querySelector('.list');
const item = document.createElement('div');

const name = document.createElement('h1');
name.textContent = event.target.name.value;

const type = document.createElement('h2');
type.textContent = event.target.banana.value;

const power = document.createElement('p');
power.textContent = event.target.power.value;

item.appendChild(name);
item.appendChild(type);
item.appendChild(power);

list.appendChild(item);

this.reset();

};

const handleDelete = function(event){
  const list = document.querySelector('.list');
  while(list.firstChild){
  list.removeChild(list.firstChild);
};
}

//store the values into variables.
//create new elements into the dom 


