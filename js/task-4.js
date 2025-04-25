const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const {
    email: { value: emailValue },
    password: { value: passwordValue }
  } = form.elements;

  const trimmedEmail = emailValue.trim();
  const trimmedPassword = passwordValue.trim();

  if (trimmedEmail === '' || trimmedPassword === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: trimmedEmail,
    password: trimmedPassword
  };

  console.log(formData);
  form.reset(); 
});

