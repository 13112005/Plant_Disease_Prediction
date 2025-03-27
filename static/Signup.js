document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const user = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
  };

  // Store user data in localStorage
  localStorage.setItem('user', JSON.stringify(user));
  
  // Redirect to login page
  window.location.href = 'login.html';
});