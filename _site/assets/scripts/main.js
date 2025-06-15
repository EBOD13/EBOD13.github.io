/**
 * Initialize all navigation functionality
 */
function initNavigation() {
    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('ri-close-line');
                icon.classList.toggle('ri-menu-line');
            }
        });
        
        // Dropdown functionality for mobile
        const dropdownItems = document.querySelectorAll('.dropdown__item');
        
        dropdownItems.forEach(item => {
            const trigger = item.querySelector('.dropdown__trigger');
            if (trigger) {
                trigger.addEventListener('click', function(e) {
                    // Only prevent default for mobile (when toggle is visible)
                    if (window.getComputedStyle(navToggle).display !== 'none') {
                        e.preventDefault();
                        item.classList.toggle('active');
                    }
                });
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('ri-close-line');
                    icon.classList.add('ri-menu-line');
                }
            }
        });
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.getElementById('nav-menu');
                const navToggle = document.getElementById('nav-toggle');
                if (navMenu?.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (navToggle) {
                        const icon = navToggle.querySelector('i');
                        if (icon) {
                            icon.classList.remove('ri-close-line');
                            icon.classList.add('ri-menu-line');
                        }
                    }
                }
            }
        });
    });
}

/**
 * Add scroll effects to header
 */
function initHeaderScrollEffects() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 20px hsla(220, 32%, 8%, 0.2)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.boxShadow = '0 2px 16px hsla(220, 32%, 8%, 0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.9)';
        }
    });
    
    // Initialize scroll position
    window.dispatchEvent(new Event('scroll'));
}

/**
 * Animate elements when they come into view
 */
function initScrollAnimations() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll(
            '.about__image, .math__card, .poetry__card, .travel__image-container'
        );
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll(
        '.about__image, .math__card, .poetry__card, .travel__image-container'
    ).forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
}

/**
 * Main initialization function
 */
function initializeApp() {
    initNavigation();
    initSmoothScrolling();
    initHeaderScrollEffects();
    initScrollAnimations();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// If navigation is loaded after DOMContentLoaded (via fetch), this will catch it
document.addEventListener('navLoaded', initializeApp);

// Function to include HTML content (if needed)
function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    
    elements.forEach(element => {
        const file = element.getAttribute('data-include');
        
        if (file) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    element.innerHTML = data;
                    // Dispatch event that nav is loaded
                    if (element.id === 'nav-container') {
                        document.dispatchEvent(new Event('navLoaded'));
                    }
                    
                    // Execute any scripts within the included content
                    const scripts = element.getElementsByTagName('script');
                    for (let i = 0; i < scripts.length; i++) {
                        try {
                            new Function(scripts[i].text)();
                        } catch (e) {
                            console.error('Error executing included script:', e);
                        }
                    }
                })
                .catch(err => {
                    console.error(`Error including ${file}:`, err);
                    element.innerHTML = `Error loading ${file}`;
                });
        }
    });
}

// Initialize HTML includes if any exist
if (document.querySelector('[data-include]')) {
    includeHTML();
}
// ============== MOUNT BLOG POSTS ====================
const GITHUB_USER = "ebod13";
const REPO_NAME = "ebod13.github.io";
const POSTS_FOLDER = "about/math/posts"; // ← use exact path from GitHub

async function loadPosts() {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = ''; // Clear existing posts first

  try {
    // Add timestamp to bypass cache
    const timestamp = new Date().getTime();
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_USER}/${REPO_NAME}/contents/${POSTS_FOLDER}?t=${timestamp}`
    );
    if (!response.ok) throw new Error("Failed to fetch posts.");

    const files = await response.json();

    for (const file of files) {
      if (file.name.endsWith(".txt")) {
        // Add timestamp to file URL too
        const postResponse = await fetch(`${file.download_url}?t=${timestamp}`);
        const postContent = await postResponse.text();

        const [firstLine, ...bodyLines] = postContent.split("\n");
        const title = firstLine.replace("Title: ", "");
        const body = bodyLines.join("\n");

        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.innerHTML = `
          <h2>${title}</h2>
          <div class="post-date">${file.name.replace(".txt", "")}</div>
          <p>${body}</p>
        `;
        postsContainer.appendChild(postElement);
      }
    }
  } catch (error) {
    console.error("Error loading posts:", error);
    postsContainer.innerHTML = "<p>Failed to load posts. Check console.</p>";
  }
}

loadPosts();
