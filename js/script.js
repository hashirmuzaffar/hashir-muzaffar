function loadPage(page) {
    // If 'index' (Home) is clicked, simply reload the page
    if (page === 'index') {
      location.reload(); // Reloads the page to display the Home content
      return;
    }
  
    // Load HTML content for other pages
    fetch(`${page}.html`)
      .then(response => response.text())
      .then(data => {
        document.getElementById('content').innerHTML = data;
  
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
      })
      .catch(error => console.error('Error loading content:', error));
  }
  
  // The home page content is loaded by default (index.html), so no need to load it dynamically
  