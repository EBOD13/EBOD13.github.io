
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

    // Init
    loadCollections();
    setupEventListeners();

    async function loadCollections() {
        try {
            const path = `/library/poetry/collections/list.json?cacheBust=${Date.now()}`;
            const response = await fetch(path);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            collections = await response.json();
            renderCollectionsList();
        } catch (error) {
            console.error('Error loading collections:', error);
            collectionsList.innerHTML = `<div class="error">Failed to load collections. Check console for details.</div>`;
        }
    }

    function renderCollectionsList() {
        collectionsList.innerHTML = collections.map(collection => `
            <div class="collection-item" data-collection="${collection.id}">
                ${collection.name}
            </div>
        `).join('');

        document.querySelectorAll('.collection-item').forEach(item => {
            item.addEventListener('click', async () => {
                const collectionId = item.getAttribute('data-collection');
                loadCollection(collectionId);
                collectionsSidebar.classList.remove('open');
            });
        });
    }

    async function loadCollection(collectionId) {
        try {
            const response = await fetch(`/library/poetry/collections/${collectionId}/list.json?cacheBust=${Date.now()}`);
            const data = await response.json();

            currentCollection = data;
            poems = data.poems;
            currentPoemIndex = -1;

            collectionTitle.textContent = currentCollection.name;
            bookCover.style.display = 'flex';
            bookPages.innerHTML = '';

            if (poems.length > 0) {
                loadPoem(0);
            }

            document.querySelectorAll('.collection-item').forEach(item => {
                item.classList.toggle('active', item.getAttribute('data-collection') === collectionId);
            });

        } catch (error) {
            console.error('Error loading collection:', error);
            bookPages.innerHTML = `<div class="error">Failed to load collection.</div>`;
        }
    }

async function loadPoem(index) {
    if (index < 0 || index >= poems.length) return;

    currentPoemIndex = index;
    const poem = poems[index];

    try {
        const url = `./library/poetry/collections/${currentCollection.id}/${poem.file}?cacheBust=${Date.now()}`;
        console.log("Fetching poem from:", url);

        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status} - ${url}`);

        const content = await response.text();
        const { data, content: poemContent } = parseFrontMatter(content);

        const page = document.createElement('div');
        page.className = 'poem-page active';
        page.innerHTML = `
            <h1 class="poem-title">${data.title}</h1>
            ${data.era ? `<p class="poem-era">${data.era}</p>` : ''}
            <div class="poem-content">${marked.parse(poemContent)}</div>
        `;

        bookPages.appendChild(page);
        bookCover.style.display = 'none';

        updateNavigation();

        if (window.MathJax) {
            MathJax.typesetPromise([page]);
        }

    } catch (error) {
        console.error('Error loading poem:', error);
        bookPages.innerHTML = `
            <div class="error-message">
                <p>Poem not found: <code>${poem.file}</code></p>
            </div>
        `;
    }
}


    function parseFrontMatter(content) {
        const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)/;
        const match = content.match(frontMatterRegex);

        if (match) {
            const frontMatter = match[1];
            const content = match[2];
            const data = {};

            frontMatter.split('\n').forEach(line => {
                const colonIndex = line.indexOf(':');
                if (colonIndex > -1) {
                    const key = line.substring(0, colonIndex).trim();
                    let value = line.substring(colonIndex + 1).trim();
                    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                        value = value.substring(1, value.length - 1);
                    }
                    data[key] = value;
                }
            });

            return { data, content };
        }

        return { data: {}, content };
    }

    function updateNavigation() {
        prevBtn.disabled = currentPoemIndex <= 0 && currentPoemIndex !== -1;
        nextBtn.disabled = currentPoemIndex >= poems.length - 1;
    }

    function navigateToPrev() {
        if (currentPoemIndex === -1) return;
        if (currentPoemIndex === 0) {
            bookCover.style.display = 'flex';
            document.querySelector('.poem-page').classList.remove('active');
            currentPoemIndex = -1;
        } else {
            document.querySelector('.poem-page.active').classList.remove('active');
            loadPoem(currentPoemIndex - 1);
        }
        updateNavigation();
    }

    function navigateToNext() {
        if (currentPoemIndex === -1) {
            bookCover.style.display = 'none';
            loadPoem(0);
        } else if (currentPoemIndex < poems.length - 1) {
            document.querySelector('.poem-page.active').classList.remove('active');
            loadPoem(currentPoemIndex + 1);
        }
        updateNavigation();
    }

    function setupEventListeners() {
        prevBtn.addEventListener('click', navigateToPrev);
        nextBtn.addEventListener('click', navigateToNext);
        collectionsBtn.addEventListener('click', () => collectionsSidebar.classList.toggle('open'));
        closeSidebar.addEventListener('click', () => collectionsSidebar.classList.remove('open'));

        const hammer = new Hammer(bookPages);
        hammer.on('swipeleft', navigateToNext);
        hammer.on('swiperight', navigateToPrev);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') navigateToPrev();
            if (e.key === 'ArrowRight') navigateToNext();
        });
    }
});
