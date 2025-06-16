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