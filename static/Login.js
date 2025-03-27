document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  
  loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values using array index (more reliable)
      const email = this[0].value; // First input field
      const password = this[1].value; // Second input field
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if(storedUser && storedUser.email === email && storedUser.password === password) {
          localStorage.setItem('currentUser', JSON.stringify(storedUser));
          // CORRECTED REDIRECTION
          window.location.href = 'Scan.html'; // All lowercase
      } else {
          alert('Invalid credentials! Please try again.');
          this.reset();
      }
  });
});