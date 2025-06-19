function scrollSessions(direction) {
        const container = document.getElementById("sessionScroll");
        const scrollAmount = 200;
        container.scrollBy({
          left: direction * scrollAmount,
          behavior: "smooth",
        });
      }

      function toggleSolution(button) {
        const solution = button.nextElementSibling;
        const isHidden =
          solution.style.display === "none" || solution.style.display === "";
        solution.style.display = isHidden ? "block" : "none";
        button.textContent = isHidden ? "Hide Solution" : "Show Solution";

        // Tell MathJax to typeset the solution when shown
        if (isHidden && window.MathJax) {
          MathJax.typesetPromise([solution]);
        }
      }

      // Initialize the question loader
      document.addEventListener("DOMContentLoaded", function () {
        // Set up event listeners for all filter buttons
        const levelButtons = document.querySelectorAll(".level-btn");
        const paperButtons = document.querySelectorAll(".paper-btn");
        const sessionButtons = document.querySelectorAll(".session-btn");

        // Track current selections
        let currentLevel = "";
        let currentSubject = "";
        let currentPaper = "";
        let currentSession = "";

        // Add click handlers for level buttons
        levelButtons.forEach((button) => {
          button.addEventListener("click", function () {
            currentLevel = this.getAttribute("data-level");
            levelButtons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");
            loadQuestionsIfReady();
          });
        });

        // Add click handlers for paper buttons
        paperButtons.forEach((button) => {
          button.addEventListener("click", function () {
            currentSubject = this.getAttribute("data-subject");
            currentPaper = this.getAttribute("data-paper");
            paperButtons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");
            loadQuestionsIfReady();
          });
        });

        // Add click handlers for session buttons
        sessionButtons.forEach((button) => {
          button.addEventListener("click", function () {
            currentSession = this.getAttribute("data-session");
            sessionButtons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");
            loadQuestionsIfReady();
          });
        });

        // Function to check if all selections are made and load questions
        function loadQuestionsIfReady() {
          if (
            currentLevel &&
            currentSubject &&
            currentPaper &&
            currentSession
          ) {
            loadQuestions(
              currentLevel,
              currentSubject,
              currentPaper,
              currentSession
            );
          }
        }

        // Function to load questions from the appropriate markdown file
        async function loadQuestions(level, subject, paper, session) {
          const loadingSpinner = document.getElementById("loadingSpinner");
          const questionsContainer =
            document.getElementById("questionsContainer");

          // Show loading spinner
          loadingSpinner.style.display = "block";
          questionsContainer.innerHTML = "";

          // Construct the file path based on selections
          const filePath = constructFilePath(level, subject, paper, session);

          try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error("File not found");

            const markdownContent = await response.text();
            renderQuestions(markdownContent);
          } catch (error) {
            console.error("Error loading questions:", error);
            questionsContainer.innerHTML = `
              <div class="error-message">
                <i class="ri-error-warning-line"></i>
                <p>Questions not available for this selection.</p>
                ${
                  currentLevel &&
                  currentSubject &&
                  currentPaper &&
                  currentSession
                    ? `<p class="debug-path">Tried to load: ${filePath}</p>`
                    : ""
                }
              </div>
            `;
          } finally {
            loadingSpinner.style.display = "none";
          }
        }

        // Function to construct the proper file path based on selections
        function constructFilePath(level, subject, paper, session) {
          // Example: /math/ib_papers/hl/aa/may/2023/paper1.md
          const [month, year] = session.split("/");
          return `/math/ib_papers/${level}/${subject}/${month}/${year}/paper${paper}.md`;
        }

        // Function to parse markdown and render questions
        function renderQuestions(markdownContent) {
          const questionsContainer =
            document.getElementById("questionsContainer");
          questionsContainer.innerHTML = "";

          // Split the content by question markers
          const questionSections = markdownContent.split("## Question ");

          // Skip the first section (it's the header)
          for (let i = 1; i < questionSections.length; i++) {
            const section = questionSections[i];
            const questionNumber = section.split("\n")[0].trim();
            const contentParts = section.split("**Content:**");
            const solutionParts = section.split("**Solution:**");

            if (contentParts.length > 1 && solutionParts.length > 1) {
              const questionContent = contentParts[1]
                .split("**Solution:**")[0]
                .trim();
              const solutionContent = solutionParts[1].trim();

              // Create question card
              const questionCard = document.createElement("div");
              questionCard.className = "question-card";
              questionCard.innerHTML = `
                <div class="question-number">Question ${questionNumber}</div>
                <div class="question-content">${marked.parse(
                  questionContent
                )}</div>
                <button class="toggle-btn">Show Solution</button>
                <div class="solution" style="display: none;">
                  <div style="padding-left: 1rem; margin-left: -1.5rem">
                    ${marked.parse(solutionContent)}
                  </div>
                </div>
              `;

              // Add event listener to the toggle button
              const toggleBtn = questionCard.querySelector(".toggle-btn");
              toggleBtn.addEventListener("click", function () {
                toggleSolution(this);
              });

              questionsContainer.appendChild(questionCard);
            }
          }

          // Tell MathJax to typeset the new content
          if (window.MathJax) {
            MathJax.typesetPromise();
          }
        }
      });


// =========== RENDER CANVAS ==============
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('cartesianPlane');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const originX = width / 2;
  const originY = height / 2;
  const scale = 40;

  // Axes
  ctx.beginPath();
  ctx.moveTo(0, originY);
  ctx.lineTo(width, originY);
  ctx.moveTo(originX, 0);
  ctx.lineTo(originX, height);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Grid
  ctx.strokeStyle = '#eee';
  ctx.lineWidth = 1;
  for (let x = 0; x < width; x += scale) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += scale) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  const toCanvasCoords = (x, y) => ({
    x: originX + x * scale,
    y: originY - y * scale
  });

  const A = { x: 2, y: 3 };
  const B = { x: -3, y: -1 };

  const canvasA = toCanvasCoords(A.x, A.y);
  ctx.beginPath();
  ctx.arc(canvasA.x, canvasA.y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.fillText(`A (${A.x}, ${A.y})`, canvasA.x + 10, canvasA.y - 10);

  const canvasB = toCanvasCoords(B.x, B.y);
  ctx.beginPath();
  ctx.arc(canvasB.x, canvasB.y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.fillText(`B (${B.x}, ${B.y})`, canvasB.x + 10, canvasB.y - 10);
});


// =========== POP UP DOCUMENT SCREEN ==========
document.addEventListener('DOMContentLoaded', function() {
  const pdfBtn = document.getElementById('pdfFloatingBtn');
  const pdfPopup = document.getElementById('pdfPopup');
  const closePdfBtn = document.getElementById('closePdfBtn');
  
  pdfBtn.addEventListener('click', function() {
    pdfPopup.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
  });
  
  closePdfBtn.addEventListener('click', function() {
    pdfPopup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  });
  
  // Close popup when clicking outside the content
  pdfPopup.addEventListener('click', function(e) {
    if (e.target === pdfPopup) {
      pdfPopup.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});