console.log('Hello World!');

// grabs the loading icon from HTML
const loadingElement = document.querySelector('.loading');

// now that I have the loading element, I can do things with it
// hiding the loading icon from the client
loadingElement.style.display = 'none';

// grabs the <form> from the HTML
const form = document.querySelector('form');

// now that we have form. we'll listen for when the form is submitted
form.addEventListener('submit', event => {
  event.preventDefault();
  // creates an object with form data
  const formData = new FormData(form);
  // grabs 'name' property from the form data
  const name = formData.get('name');
  // grabs 'content' property from the form data
  const content = formData.get('content');

  // prove that we now have the name and contet data
  const mew = {
    name,
    content,
  };
  console.log(mew);

  // after I hit submit, the form disappears and the loading icon displays
  form.style.display = 'none';
  loadingElement.style.display = '';
});
