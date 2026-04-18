/**
 * QMS001 Quality Policy — SCORM Module Application
 * Handles slide navigation, quiz logic, language toggling, and SCORM communication.
 *
 * Data is loaded from separate files via window globals:
 *   - window.MODULE_CONFIG  (data/config.js)
 *   - window.MODULE_SLIDES  (data/slides.js)
 *   - window.MODULE_QUIZZES (data/quizzes.js)
 */
(function () {
  "use strict";

  /* ---- Assemble MODULE_DATA from modular data files ---- */
  const MODULE_DATA = {
    title: window.MODULE_CONFIG.title,
    description: window.MODULE_CONFIG.description,
    passingScore: window.MODULE_CONFIG.passingScore,
    orderIndex: window.MODULE_CONFIG.orderIndex,
    slides: window.MODULE_SLIDES,
    quizzes: window.MODULE_QUIZZES,
  };

  /* ---- State ---- */
  let currentSlide = 0;
  let currentLang = "en"; // 'en' or 'bn'
  let phase = "slides"; // 'slides' | 'quiz' | 'results'
  let quizAnswers = {};
  let quizSubmitted = false;

  const totalSlides = MODULE_DATA.slides.length;

  /* ---- DOM Refs ---- */
  const slideArea = document.getElementById("slide-area");
  const quizArea = document.getElementById("quiz-area");
  const progressFill = document.getElementById("progress-fill");
  const progressText = document.getElementById("progress-text");
  const progressLabel = document.getElementById("progress-label");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const slideCounter = document.getElementById("slide-counter");
  const langBtns = document.querySelectorAll(".lang-btn");
  const slideMenu = document.getElementById("slide-menu");

  // Mobile drawer refs
  const sidebarPanel = document.getElementById("sidebar-panel");
  const sidebarBackdrop = document.getElementById("sidebar-backdrop");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
  const mobileCounter = document.getElementById("mobile-counter");

  // Image Lightbox refs
  const imageOverlay = document.getElementById("image-overlay");
  const overlayImg = document.getElementById("overlay-img");
  const overlayClose = document.getElementById("overlay-close");

  /* ---- Initialization ---- */
  function init() {
    ScormAPI.init();

    // Try to restore state
    const savedLoc = ScormAPI.getLocation();
    if (savedLoc) {
      const loc = parseInt(savedLoc, 10);
      if (!isNaN(loc) && loc >= 0 && loc < totalSlides) {
        currentSlide = loc;
      }
    }

    const suspendData = ScormAPI.getSuspendData();
    if (suspendData) {
      try {
        const data = JSON.parse(suspendData);
        if (data.lang) currentLang = data.lang;
        if (data.phase) phase = data.phase;
        if (data.quizAnswers) quizAnswers = data.quizAnswers;
        if (data.quizSubmitted) quizSubmitted = data.quizSubmitted;
      } catch (e) {
        /* ignore */
      }
    }

    // Set language buttons
    updateLangButtons();
    bindLangToggle();
    renderMenu();

    if (phase === "quiz") {
      showQuiz();
    } else if (phase === "results") {
      showResults();
    } else {
      renderSlide();
    }

    // Bind nav
    btnPrev.addEventListener("click", prevSlide);
    btnNext.addEventListener("click", nextSlide);

    // Bind mobile drawer
    hamburgerBtn.addEventListener("click", toggleSidebar);
    sidebarCloseBtn.addEventListener("click", toggleSidebar);
    sidebarBackdrop.addEventListener("click", toggleSidebar);

    // Bind image overlay
    if (overlayClose) overlayClose.addEventListener("click", closeImageModal);
    if (imageOverlay) {
      imageOverlay.addEventListener("click", (e) => {
        if (e.target === imageOverlay) closeImageModal();
      });
    }

    // Handle window close
    window.addEventListener("beforeunload", () => {
      saveState();

      // Determine exit status
      const status = ScormAPI.getValue("cmi.core.lesson_status");
      if (
        status !== "passed" &&
        status !== "failed" &&
        status !== "completed"
      ) {
        ScormAPI.setExit("suspend");
      } else {
        ScormAPI.setExit("");
      }

      ScormAPI.finish();
    });
  }

  /* ---- Save State ---- */
  function saveState() {
    ScormAPI.setLocation(String(currentSlide));
    ScormAPI.setSuspendData(
      JSON.stringify({
        lang: currentLang,
        phase: phase,
        quizAnswers: quizAnswers,
        quizSubmitted: quizSubmitted,
      }),
    );
  }

  /* ---- Language ---- */
  function updateLangButtons() {
    langBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === currentLang);
    });
  }

  function bindLangToggle() {
    langBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        currentLang = btn.dataset.lang;
        updateLangButtons();
        renderMenu();
        if (phase === "slides") renderSlide();
        else if (phase === "quiz") showQuiz();
        else if (phase === "results") showResults();
        saveState();
      });
    });
  }

  /* ---- Sidebar Toggle ---- */
  function toggleSidebar() {
    sidebarPanel.classList.toggle("active");
    sidebarBackdrop.classList.toggle("active");
  }

  /* ---- Image Modal ---- */
  function openImageModal(src) {
    if (!imageOverlay || !overlayImg) return;
    overlayImg.src = src;
    imageOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  function closeImageModal() {
    if (!imageOverlay) return;
    imageOverlay.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  }

  function bindImagePopups() {
    const images = slideArea.querySelectorAll("img");
    images.forEach((img) => {
      img.addEventListener("click", () => {
        openImageModal(img.src);
      });
    });
  }

  /* ---- Slide Menu ---- */
  function renderMenu() {
    if (!slideMenu) return;
    slideMenu.innerHTML = "";

    // Add slide links
    MODULE_DATA.slides.forEach((slide, idx) => {
      const btn = document.createElement("button");
      btn.className = "menu-item";
      if (phase === "slides" && currentSlide === idx) {
        btn.classList.add("active");
      }
      btn.textContent =
        currentLang === "bn" && slide.banglaTitle
          ? slide.banglaTitle
          : slide.title;
      btn.addEventListener("click", () => {
        phase = "slides";
        currentSlide = idx;
        renderSlide();
      });
      slideMenu.appendChild(btn);
    });
  }

  /* ---- Slide Rendering ---- */
  function renderSlide() {
    phase = "slides";
    slideArea.style.display = "flex";
    quizArea.style.display = "none";
    slideArea.classList.remove("fadeIn");
    void slideArea.offsetWidth; // trigger reflow
    slideArea.classList.add("fadeIn");

    const slide = MODULE_DATA.slides[currentSlide];
    const title =
      currentLang === "bn" && slide.banglaTitle
        ? slide.banglaTitle
        : slide.title;
    const content =
      currentLang === "bn" && slide.banglaContent
        ? slide.banglaContent
        : slide.content;

    document.getElementById("slide-title").textContent = title;
    document.getElementById("slide-content").innerHTML = content;

    // Update progress
    const pct = Math.round(((currentSlide + 1) / totalSlides) * 100);
    progressFill.style.width = pct + "%";
    progressText.textContent = pct + "%";
    progressLabel.textContent =
      currentLang === "bn"
        ? `স্লাইড ${currentSlide + 1} / ${totalSlides}`
        : `Slide ${currentSlide + 1} of ${totalSlides}`;

    // Counter
    slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;

    // Nav buttons
    btnPrev.disabled = currentSlide === 0;
    btnPrev.innerHTML = currentLang === "bn" ? "← পূর্ববর্তী" : "← Previous";
    if (currentSlide === totalSlides - 1) {
      btnNext.innerHTML =
        currentLang === "bn" ? "কুইজ শুরু করুন →" : "Start Quiz →";
      btnNext.classList.add("primary-btn");
    } else {
      btnNext.innerHTML = currentLang === "bn" ? "পরবর্তী →" : "Next →";
      btnNext.classList.remove("primary-btn");
    }
    btnNext.disabled = false;

    // Mobile specific: Close sidebar and update counter
    sidebarPanel.classList.remove("active");
    sidebarBackdrop.classList.remove("active");
    if (mobileCounter) {
      mobileCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;
    }

    // Bind options-list interactive buttons
    bindScenarioButtons();

    // Bind image popups
    bindImagePopups();

    ScormAPI.setStatus("incomplete");
    saveState();
    renderMenu();
  }

  function bindScenarioButtons() {
    const optBtns = slideArea.querySelectorAll(".option-btn");
    optBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // disable all
        const siblings =
          this.closest(".options-list").querySelectorAll(".option-btn");
        siblings.forEach((b) => {
          b.disabled = true;
          b.classList.remove("correct", "incorrect");
        });

        const isCorrect = this.dataset.correct === "true";
        this.classList.add(isCorrect ? "correct" : "incorrect");

        // Find feedback div
        const feedbackId = this.closest(".options-list").id.replace(
          "-options",
          "-feedback",
        );
        const feedbackDiv = document.getElementById(feedbackId);
        if (feedbackDiv) {
          feedbackDiv.textContent = isCorrect
            ? this.dataset.smsg
            : this.dataset.emsg;
          feedbackDiv.className =
            "feedback-msg show " + (isCorrect ? "success" : "error");
        }
      });
    });
  }

  /* ---- Navigation ---- */
  function nextSlide() {
    if (phase === "slides") {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        renderSlide();
      } else {
        showQuiz();
      }
    }
  }

  function prevSlide() {
    if (phase === "slides" && currentSlide > 0) {
      currentSlide--;
      renderSlide();
    } else if (phase === "quiz") {
      currentSlide = totalSlides - 1;
      phase = "slides";
      renderSlide();
    }
  }

  /* ---- Quiz ---- */
  function showQuiz() {
    phase = "quiz";
    slideArea.style.display = "none";
    quizArea.style.display = "block";

    const quiz = MODULE_DATA.quizzes[0];

    // Progress
    progressFill.style.width = "100%";
    progressText.textContent = "100%";
    progressLabel.textContent =
      currentLang === "bn" ? "কুইজ" : "Knowledge Check";
    slideCounter.textContent = currentLang === "bn" ? "কুইজ" : "Quiz";

    btnPrev.disabled = false;
    btnPrev.innerHTML =
      currentLang === "bn" ? "← স্লাইডে ফিরুন" : "← Back to Slides";
    btnNext.disabled = true;
    btnNext.innerHTML = "";
    btnNext.classList.remove("primary-btn");

    let html = `
      <div class="quiz-header">
        <h2>${currentLang === "bn" ? "জ্ঞান যাচাই" : quiz.title}</h2>
        <p class="quiz-subtitle">${
          currentLang === "bn"
            ? `পাস করার জন্য ${MODULE_DATA.passingScore}% প্রয়োজন`
            : `You need ${MODULE_DATA.passingScore}% to pass`
        }</p>
      </div>
    `;

    quiz.questions.forEach((q, qi) => {
      const qText =
        currentLang === "bn" && q.banglaText ? q.banglaText : q.text;
      html += `<div class="quiz-question-card">
        <div class="question-number">${
          currentLang === "bn" ? `প্রশ্ন ${qi + 1}` : `Question ${qi + 1}`
        }</div>
        <div class="question-text">${qText}</div>
        <ul class="quiz-options">`;

      q.options.forEach((opt, oi) => {
        const oText =
          currentLang === "bn" && opt.banglaText ? opt.banglaText : opt.text;
        const selected = quizAnswers[qi] === oi ? "selected" : "";
        const disabled = quizSubmitted ? "disabled" : "";

        let extraClass = "";
        if (quizSubmitted && quizAnswers[qi] === oi) {
          if (opt.isCorrect) extraClass = "correct-answer";
          else extraClass = "wrong-answer";
        }

        html += `<li><button type="button" class="quiz-option-btn ${selected} ${extraClass}" ${disabled}
          data-qi="${qi}" data-oi="${oi}">${oText}</button></li>`;
      });

      html += `</ul></div>`;
    });

    if (!quizSubmitted) {
      html += `<div class="quiz-submit-area">
        <button type="button" class="nav-btn primary-btn" id="btn-submit-quiz">${
          currentLang === "bn" ? "জমা দিন" : "Submit Quiz"
        }</button>
      </div>`;
    } else {
      html += `<div class="quiz-submit-area">
        <button type="button" class="nav-btn primary-btn" id="btn-retake-quiz-review">${
          currentLang === "bn" ? "আবার চেষ্টা করুন" : "Retake Quiz"
        }</button>
      </div>`;
    }

    quizArea.innerHTML = html;

    // Bind quiz option clicks
    if (!quizSubmitted) {
      quizArea.querySelectorAll(".quiz-option-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          const qi = parseInt(this.dataset.qi);
          const oi = parseInt(this.dataset.oi);
          quizAnswers[qi] = oi;
          // Update selection visuals
          const card = this.closest(".quiz-question-card");
          card
            .querySelectorAll(".quiz-option-btn")
            .forEach((b) => b.classList.remove("selected"));
          this.classList.add("selected");
          saveState();
        });
      });

      const submitBtn = document.getElementById("btn-submit-quiz");
      if (submitBtn) {
        submitBtn.addEventListener("click", submitQuiz);
      }
    } else {
      const retakeBtn = document.getElementById("btn-retake-quiz-review");
      if (retakeBtn) {
        retakeBtn.addEventListener("click", retakeQuiz);
      }
    }

    saveState();
    renderMenu();
  }

  function submitQuiz() {
    const quiz = MODULE_DATA.quizzes[0];
    const totalQs = quiz.questions.length;

    // Ensure all questions answered
    const answered = Object.keys(quizAnswers).length;
    if (answered < totalQs) {
      alert(
        currentLang === "bn"
          ? "অনুগ্রহ করে সকল প্রশ্নের উত্তর দিন।"
          : "Please answer all questions before submitting.",
      );
      return;
    }

    quizSubmitted = true;

    // Calculate score
    let correct = 0;
    quiz.questions.forEach((q, qi) => {
      const selectedIdx = quizAnswers[qi];
      if (selectedIdx !== undefined && q.options[selectedIdx].isCorrect) {
        correct++;
      }
    });

    const score = Math.round((correct / totalQs) * 100);
    ScormAPI.complete(score, MODULE_DATA.passingScore);
    saveState();
    showResults(score, correct, totalQs);
  }

  function showResults(score, correct, total) {
    phase = "results";
    slideArea.style.display = "none";
    quizArea.style.display = "block";

    // Recalculate if not provided
    if (score === undefined) {
      const quiz = MODULE_DATA.quizzes[0];
      total = quiz.questions.length;
      correct = 0;
      quiz.questions.forEach((q, qi) => {
        const sel = quizAnswers[qi];
        if (sel !== undefined && q.options[sel].isCorrect) correct++;
      });
      score = Math.round((correct / total) * 100);
    }

    const passed = score >= MODULE_DATA.passingScore;

    progressLabel.textContent = currentLang === "bn" ? "ফলাফল" : "Results";
    slideCounter.textContent = currentLang === "bn" ? "ফলাফল" : "Results";

    btnPrev.disabled = false;
    btnPrev.innerHTML = currentLang === "bn" ? "← কুইজ দেখুন" : "← Review Quiz";
    btnNext.disabled = true;
    btnNext.innerHTML = "";
    btnPrev.onclick = () => {
      quizSubmitted = true;
      showQuiz();
      btnPrev.onclick = prevSlide;
    };

    quizArea.innerHTML = `
      <div class="results-card">
        <div class="score-circle ${passed ? "passed" : "failed"}">
          ${score}%
          <span>${currentLang === "bn" ? "স্কোর" : "Score"}</span>
        </div>
        <h2>${
          passed
            ? currentLang === "bn"
              ? "🎉 অভিনন্দন! আপনি পাস করেছেন!"
              : "🎉 Congratulations! You Passed!"
            : currentLang === "bn"
              ? "❌ দুঃখিত, আপনি পাস করতে পারেননি।"
              : "❌ Sorry, You Did Not Pass."
        }</h2>
        <p class="result-status">
          ${
            currentLang === "bn"
              ? `আপনি ${total} টি প্রশ্নের মধ্যে ${correct} টি সঠিক উত্তর দিয়েছেন। পাসের জন্য ${MODULE_DATA.passingScore}% প্রয়োজন ছিল।`
              : `You answered ${correct} out of ${total} questions correctly. Passing score was ${MODULE_DATA.passingScore}%.`
          }
        </p>
        <div class="results-actions">
          <button type="button" class="nav-btn primary-btn" id="btn-retake-quiz">
            ${currentLang === "bn" ? "আবার চেষ্টা করুন" : "Retake Quiz"}
          </button>
        </div>
      </div>
    `;

    const retakeBtn = document.getElementById("btn-retake-quiz");
    if (retakeBtn) {
      retakeBtn.addEventListener("click", retakeQuiz);
    }

    saveState();
    renderMenu();
  }

  function retakeQuiz() {
    quizAnswers = {};
    quizSubmitted = false;
    phase = "quiz";
    currentSlide = MODULE_DATA.slides.length - 1;
    saveState();
    showQuiz();
  }

  /* ---- Bootstrap ---- */
  document.addEventListener("DOMContentLoaded", init);
})();
