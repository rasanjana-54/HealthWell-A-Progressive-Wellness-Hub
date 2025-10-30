function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value.trim();
  
    if (!name || !email || !rating || !comments) {
      alert('Please fill in all fields.');
      return false;
    }
  
    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
    return false; // Prevent actual form submission
  }