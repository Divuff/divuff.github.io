// Get the home button
const homeBtn = document.getElementById('home-btn');

// Add click event listener to the home button
homeBtn.addEventListener('click', navigateToMainPage);

// Home button click event handler
function navigateToMainPage() {
  window.location.href = 'index.html';
}