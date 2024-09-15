// Function to load the page content dynamically
function loadPage(page) {
  // Load the requested page's HTML content
  fetch(`${page}.html`)
    .then(response => response.text())
    .then(data => {
      // Insert the loaded content into the content div
      document.getElementById('content').innerHTML = data;

      // Conditionally show or hide the footer based on the page
      if (page === 'index') {
        document.getElementById('site-footer').style.display = 'block'; // Show footer on home page
      } else {
        document.getElementById('site-footer').style.display = 'none';  // Hide footer on other pages
      }

      // Dynamically load the corresponding CSS for each page
      const existingLink = document.querySelector('link[rel="stylesheet"][href*=".css"]:not([href*="index.css"])');
      const newLink = document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.href = `css/${page}.css`;

      // Replace the old page-specific CSS file with the new one
      if (existingLink) {
        document.head.replaceChild(newLink, existingLink);
      } else {
        document.head.appendChild(newLink);
      }

      // Set the active navigation link for the current page
      setActiveLink(page);
    })
    .catch(error => console.error('Error loading content:', error));
}

// Function to highlight the active link in the navigation bar
function setActiveLink(page) {
  // Remove the 'active' class from all links
  const links = document.querySelectorAll('.horizontal-nav ul li a');
  links.forEach(link => {
    link.classList.remove('active');
  });

  // Add the 'active' class to the link that matches the current page
  const activeLink = document.querySelector(`.horizontal-nav ul li a[href="#${page}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Function to toggle visibility of details when a heading is clicked
function toggleDetails(element) {
  const details = element.nextElementSibling;
  
  // Check if the details are currently hidden
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block"; // Show details
  } else {
    details.style.display = "none";  // Hide details
  }
}

// Ensure details are hidden by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.details').forEach(detail => {
    detail.style.display = 'none';
  });
});


// Load the home page by default when the page loads
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.hash.substring(1) || 'index'; // Default to 'index' (home)
  loadPage(currentPage); // Load the content for the current page or default to 'home'
});


