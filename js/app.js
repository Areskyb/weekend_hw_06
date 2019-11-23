document.addEventListener('DOMContentLoaded', () => {
  console.log('Dom loaded1');
  
  const form = document.querySelector('.form');
  form.addEventListener('submit',handleFormSubmit);
  
});

const handleFormSubmit = function(event) {
  event.preventDefault();
  console.log(event);
}

