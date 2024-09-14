function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.display = 'none';
    });
  
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
      selectedPage.style.display = 'block';
    }
  }
  
  // Set the default page to 'home'
  document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
  });
  