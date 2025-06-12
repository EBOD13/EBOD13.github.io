// Function to include HTML content
function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  
  elements.forEach(element => {
    const file = element.getAttribute('data-include');
    
    if (file) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          element.innerHTML = data;
          
          // Execute any scripts within the included content
          const scripts = element.getElementsByTagName('script');
          for (let i = 0; i < scripts.length; i++) {
            eval(scripts[i].text);
          }
        })
        .catch(err => {
          console.error(`Error including ${file}:`, err);
          element.innerHTML = `Error loading ${file}`;
        });
    }
  });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', includeHTML);