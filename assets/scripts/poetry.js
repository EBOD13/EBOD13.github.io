document.addEventListener('DOMContentLoaded', function () {
    // DOM elements
    const bookPages = document.getElementById('bookPages');
    const bookCover = document.getElementById('bookCover');
    const collectionTitle = document.getElementById('collectionTitle');
    const collectionsList = document.getElementById('collectionsList');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const collectionsBtn = document.getElementById('collectionsBtn');
    const collectionsSidebar = document.getElementById('collectionsSidebar');
    const closeSidebar = document.getElementById('closeSidebar');

    // State
    let currentCollection = null;
    let currentPoemIndex = -1;
    let poems = [];
    let collections = [];

    // Configuration - Adjust these paths based on your actual file structure
    const PATHS = {
        collections: './collections/list.json',
        collectionData: (id) => `./collections/${id}/list.json`,
        poem: (collectionId, poemFile) => `./collections/${collectionId}/${poemFile}`
    };

    // Initialize the application
    init();

    async function init() {
        try {
            await loadCollections();
            setupEventListeners();
            
            // Load first collection by default, or show cover
            if (collections.length > 0) {
                // Optional: Auto-load first collection
                // await loadCollection(collections[0].id);
            }
        } catch (error) {
            console.error('Failed to initialize poetry app:', error);
            showError('Failed to initialize application');
        }
    }

    async function loadCollections() {
        try {
            console.log('Loading collections from:', PATHS.collections);
            const response = await fetch(`${PATHS.collections}?cacheBust=${Date.now()}`);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            collections = await response.json();
            console.log('Loaded collections:', collections);
            renderCollectionsList();
            
        } catch (error) {
            console.error('Error loading collections:', error);
            collectionsList.innerHTML = `
                <div class="error">
                    <p>Failed to load collections</p>
                    <small>Check browser console for details</small>
                </div>
            `;
            throw error;
        }
    }

    function renderCollectionsList() {
        if (!collections.length) {
            collectionsList.innerHTML = '<div class="no-collections">No collections found</div>';
            return;
        }

        collectionsList.innerHTML = collections.map(collection => `
            <div class="collection-item ${currentCollection?.id === collection.id ? 'active' : ''}" 
                 data-collection="${collection.id}">
                <div class="collection-name">${collection.name}</div>
                ${collection.years ? `<div class="collection-years">${collection.years}</div>` : ''}
                ${collection.description ? `<div class="collection-description">${collection.description}</div>` : ''}
            </div>
        `).join('');

        // Add click event listeners
        document.querySelectorAll('.collection-item').forEach(item => {
            item.addEventListener('click', async () => {
                const collectionId = item.getAttribute('data-collection');
                await loadCollection(collectionId);
                collectionsSidebar.classList.remove('open');
            });
        });
    }

    async function loadCollection(collectionId) {
        try {
            showLoading('Loading collection...');
            
            const collection = collections.find(c => c.id === collectionId);
            if (!collection) {
                throw new Error(`Collection ${collectionId} not found`);
            }

            console.log('Loading collection data from:', PATHS.collectionData(collectionId));
            const response = await fetch(`${PATHS.collectionData(collectionId)}?cacheBust=${Date.now()}`);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: Failed to load collection data`);
            }

            const data = await response.json();
            console.log('Loaded collection data:', data);

            currentCollection = data;
            poems = data.poems || [];
            currentPoemIndex = -1;

            // Update UI
            collectionTitle.textContent = currentCollection.name;
            bookCover.style.display = 'flex';
            bookPages.innerHTML = '';

            // Update active state in collections list
            document.querySelectorAll('.collection-item').forEach(item => {
                item.classList.toggle('active', item.getAttribute('data-collection') === collectionId);
            });

            // Show cover initially
            showCover();

        } catch (error) {
            console.error('Error loading collection:', error);
            showError(`Failed to load collection: ${error.message}`);
        }
    }

    async function loadPoem(index) {
        if (index < 0 || index >= poems.length) {
            console.error('Invalid poem index:', index);
            return;
        }

        try {
            showLoading('Loading poem...');
            
            const poem = poems[index];
            currentPoemIndex = index;

            const poemUrl = `${PATHS.poem(currentCollection.id, poem.file)}?cacheBust=${Date.now()}`;
            console.log('Fetching poem from:', poemUrl);

            const response = await fetch(poemUrl);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: Failed to load poem`);
            }

            const content = await response.text();
            const { data, content: poemContent } = parseFrontMatter(content);

            // Render the poem
            renderPoemPage(data, poemContent);
            bookCover.style.display = 'none';

            updateNavigation();

        } catch (error) {
            console.error('Error loading poem:', error);
            showError(`Failed to load poem: ${error.message}`);
        }
    }

    function parseFrontMatter(content) {
        // Default empty data
        const result = { data: {}, content };

        try {
            const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)/;
            const match = content.match(frontMatterRegex);

            if (match) {
                const frontMatter = match[1];
                result.content = match[2];
                result.data = {};

                frontMatter.split('\n').forEach(line => {
                    const colonIndex = line.indexOf(':');
                    if (colonIndex > -1) {
                        const key = line.substring(0, colonIndex).trim();
                        let value = line.substring(colonIndex + 1).trim();
                        
                        // Remove quotes if present
                        if ((value.startsWith('"') && value.endsWith('"')) || 
                            (value.startsWith("'") && value.endsWith("'"))) {
                            value = value.substring(1, value.length - 1);
                        }
                        
                        result.data[key] = value;
                    }
                });
            }
        } catch (error) {
            console.warn('Error parsing front matter, using raw content:', error);
        }

        return result;
    }

    function renderPoemPage(frontMatter, content) {
        bookPages.innerHTML = '';
        
        const page = document.createElement('div');
        page.className = 'poem-page active';
        
        page.innerHTML = `
            ${frontMatter.title ? `<h1 class="poem-title">${escapeHtml(frontMatter.title)}</h1>` : ''}
            ${frontMatter.era ? `<p class="poem-era">${escapeHtml(frontMatter.era)}</p>` : ''}
            ${frontMatter.date ? `<p class="poem-date">${escapeHtml(frontMatter.date)}</p>` : ''}
            <div class="poem-content">${marked.parse(content)}</div>
        `;

        bookPages.appendChild(page);
        
        // Add fade-in animation
        setTimeout(() => {
            page.classList.add('fade-in');
        }, 10);
    }

    function showCover() {
        bookPages.innerHTML = '';
        bookCover.style.display = 'flex';
        currentPoemIndex = -1;
        updateNavigation();
    }

    function navigateToPrev() {
        if (currentPoemIndex === -1) {
            // Already at cover, do nothing
            return;
        }

        if (currentPoemIndex === 0) {
            // Go back to cover
            showCover();
        } else {
            // Go to previous poem
            loadPoem(currentPoemIndex - 1);
        }
    }

    function navigateToNext() {
        if (currentPoemIndex === -1 && poems.length > 0) {
            // From cover to first poem
            loadPoem(0);
        } else if (currentPoemIndex < poems.length - 1) {
            // Go to next poem
            loadPoem(currentPoemIndex + 1);
        }
    }

    function updateNavigation() {
        // Update previous button
        prevBtn.disabled = currentPoemIndex <= 0 && currentPoemIndex !== -1;
        
        // Update next button
        const isLastPoem = currentPoemIndex >= poems.length - 1;
        nextBtn.disabled = isLastPoem && currentPoemIndex !== -1;
        
        // Update button titles for accessibility
        prevBtn.title = currentPoemIndex === -1 ? 'No previous poem' : 'Previous poem';
        nextBtn.title = isLastPoem ? 'No next poem' : 'Next poem';
    }

    function setupEventListeners() {
        // Navigation buttons
        prevBtn.addEventListener('click', navigateToPrev);
        nextBtn.addEventListener('click', navigateToNext);
        
        // Sidebar controls
        collectionsBtn.addEventListener('click', () => {
            collectionsSidebar.classList.toggle('open');
        });
        
        closeSidebar.addEventListener('click', () => {
            collectionsSidebar.classList.remove('open');
        });
        
        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (!collectionsSidebar.contains(e.target) && 
                !collectionsBtn.contains(e.target) &&
                collectionsSidebar.classList.contains('open')) {
                collectionsSidebar.classList.remove('open');
            }
        });

        // Swipe gestures for mobile
        if (typeof Hammer !== 'undefined') {
            const hammer = new Hammer(bookPages);
            hammer.on('swipeleft', navigateToNext);
            hammer.on('swiperight', navigateToPrev);
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') navigateToPrev();
            if (e.key === 'ArrowRight') navigateToNext();
            if (e.key === 'Escape') collectionsSidebar.classList.remove('open');
        });

        // Prevent sidebar clicks from closing immediately
        collectionsSidebar.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Utility functions
    function showLoading(message = 'Loading...') {
        bookPages.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                <p>${message}</p>
            </div>
        `;
    }

    function showError(message) {
        bookPages.innerHTML = `
            <div class="error-message">
                <i class="ri-error-warning-line"></i>
                <p>${message}</p>
                <button class="retry-btn" onclick="location.reload()">Retry</button>
            </div>
        `;
    }

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
});

// Add these styles to your poetry.css or include them here
const additionalStyles = `
.loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    color: #666;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #666;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.error-message {
    text-align: center;
    padding: 3rem;
    color: #dc3545;
}

.error-message i {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.retry-btn {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.retry-btn:hover {
    background: #c82333;
}

.no-collections {
    text-align: center;
    padding: 2rem;
    color: #666;
    font-style: italic;
}

.collection-item {
    padding: 1rem;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    transition: background-color 0.2s;
}

.collection-item:hover {
    background-color: #f8f9fa;
}

.collection-item.active {
    background-color: #e3f2fd;
    border-left: 3px solid #2196f3;
}

.collection-name {
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.collection-years {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 0.25rem;
}

.collection-description {
    font-size: 0.875rem;
    color: #888;
    font-style: italic;
}

.poem-page {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.poem-page.fade-in {
    opacity: 1;
}

.poem-era, .poem-date {
    color: #666;
    font-style: italic;
    text-align: center;
    margin-bottom: 1rem;
}
`;

// Inject additional styles
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = additionalStyles;
    document.head.appendChild(styleSheet);
}