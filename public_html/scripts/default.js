window.addEventListener("load", function() {
  let copyrightYear = document.getElementById('copyrightYear');
  let currentYear = new Date().getFullYear();
  copyrightYear.innerText = currentYear;
}); // END of window load
