// app.js - Rendering and Interactive Logic for SURD Lab Homepage

document.addEventListener("DOMContentLoaded", () => {
  // Initialize dynamic content rendering
  renderHeroAndStats();
  renderAboutSection();
  renderResearchSection();
  renderMembersSection();
  renderPublicationsSection();
  renderAlumniSection();
  renderNewsSection();
  renderContactSection();

  // Initialize Interactive UI Controls
  initNavigation();
  initProjectsFilter();
  initPublicationsFilter();
  initScrollEffects();

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* =========================================================================
   1. HERO & STATS RENDERING
   ========================================================================= */
function renderHeroAndStats() {
  // Hero Tagline (Exact 6 lines with custom line spacing)
  const taglineEl = document.getElementById("hero-tagline-text");
  if (taglineEl && SURD_DATA.tagline) {
    taglineEl.innerHTML = SURD_DATA.tagline.map(line => line === "" ? "<br>" : line).join("<br>");
  }

  // Stats Grid
  const statsContainer = document.getElementById("stats-container");
  if (statsContainer && SURD_DATA.stats) {
    statsContainer.innerHTML = SURD_DATA.stats.map(stat => `
      <div class="stat-card">
        <div class="stat-value" data-target="${parseInt(stat.value)}">${stat.value}</div>
        <div class="stat-label-kr">${stat.labelKr}</div>
        <div class="stat-label-en">${stat.labelEn}</div>
      </div>
    `).join("");
  }

  // Home Section Previews (News Preview)
  const newsPreviewContainer = document.getElementById("news-preview-container");
  if (newsPreviewContainer && SURD_DATA.news) {
    const latestNews = SURD_DATA.news.slice(0, 3);
    newsPreviewContainer.innerHTML = latestNews.map(news => `
      <div class="news-preview-item">
        <div class="news-preview-date">${news.date}</div>
        <h4 class="news-preview-title">${news.titleKr}</h4>
        <div class="news-preview-desc">${news.descKr}</div>
      </div>
    `).join("");
  }

  // Home Section Previews (Research Summary)
  const researchPreviewContainer = document.getElementById("research-preview-container");
  if (researchPreviewContainer && SURD_DATA.research && SURD_DATA.research.areas) {
    const areas = SURD_DATA.research.areas;
    researchPreviewContainer.innerHTML = areas.map(area => `
      <div class="research-preview-item">
        <h4>${area.titleKr}</h4>
        <p>${area.shortDescKr}</p>
      </div>
    `).join("");
  }
}

/* =========================================================================
   2. ABOUT SECTION RENDERING
   ========================================================================= */
function renderAboutSection() {
  const about = SURD_DATA.about;
  if (!about) return;

  // Philosophy
  const philosophyEl = document.getElementById("about-philosophy-text");
  if (philosophyEl) {
    philosophyEl.innerHTML = `
      <span style="font-weight: 600; display: block; margin-bottom: 1rem; line-height: 1.7; color: var(--primary-color);">${about.philosophyKr}</span>
      <span style="font-family: var(--font-en); font-size: 0.95rem; color: var(--text-secondary); display: block; line-height: 1.7;">${about.philosophyEn}</span>
    `;
  }

  // Welcome Message
  const welcomeEl = document.getElementById("pi-welcome-text");
  if (welcomeEl) {
    welcomeEl.innerHTML = `
      <span style="display: block; margin-bottom: 0.75rem;">${about.piWelcomeKr}</span>
      <span style="font-family: var(--font-en); font-size: 0.85rem; color: var(--text-secondary); display: block; line-height: 1.6; font-style: italic;">${about.piWelcomeEn}</span>
    `;
  }

  // PI Card details
  const pi = SURD_DATA.members.pi;
  if (pi) {
    document.getElementById("pi-avatar").innerText = pi.initials || "JN";
    document.getElementById("pi-name").innerText = pi.nameKr;
    document.getElementById("pi-role").innerText = pi.roleKr;
    document.getElementById("pi-contact-email").innerHTML = `<a href="mailto:${pi.email}" style="color:var(--primary-color); border-bottom:1px dashed var(--accent-color);">${pi.email}</a>`;
    document.getElementById("pi-contact-office").innerText = pi.office.split("/")[1].trim(); // Get Korean office part
  }

  // Timeline
  const timelineContainer = document.getElementById("timeline-container");
  if (timelineContainer && about.timeline) {
    timelineContainer.innerHTML = about.timeline.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-year">${item.year}</div>
          <h4 class="timeline-item-title">
            ${item.titleKr}
            <span style="font-family: var(--font-en); font-size: 0.85rem; color: var(--text-light); font-weight: 500; display: block; margin-top: 0.15rem;">${item.titleEn}</span>
          </h4>
          <p class="timeline-item-desc">
            ${item.descKr}
            <span style="font-family: var(--font-en); font-size: 0.8rem; color: var(--text-light); display: block; margin-top: 0.25rem;">${item.descEn}</span>
          </p>
        </div>
      </div>
    `).join("");
  }
}

/* =========================================================================
   3. RESEARCH SECTION RENDERING
   ========================================================================= */
function renderResearchSection() {
  const research = SURD_DATA.research;
  if (!research) return;

  // Research Areas Cards
  const areasContainer = document.getElementById("research-areas-container");
  const icons = {
    renewal: "home",
    "data-gis": "map",
    sustainable: "globe"
  };

  if (areasContainer && research.areas) {
    areasContainer.innerHTML = research.areas.map(area => `
      <div class="research-card">
        <div class="research-card-icon">
          <i data-lucide="${icons[area.id] || "layers"}" style="width: 32px; height: 32px;"></i>
        </div>
        <h3>
          ${area.titleKr}
          <span style="font-family: var(--font-en); font-size: 0.85rem; color: var(--text-light); font-weight: 500; display: block; margin-top: 0.25rem;">${area.titleEn}</span>
        </h3>
        <p class="research-card-text">${area.shortDescKr}</p>
        
        <!-- Sliding overlay from bottom (0.3s ease) -->
        <div class="research-card-overlay">
          <h4>${area.titleEn}</h4>
          <p style="margin-bottom: 0.75rem; font-size: 0.85rem;">${area.descKr}</p>
          <p style="font-family: var(--font-en); font-size: 0.75rem; opacity: 0.85; line-height: 1.5;">${area.descEn}</p>
        </div>
      </div>
    `).join("");
  }

  // Initial projects rendering
  renderProjects("all");
}

function renderProjects(filter = "all") {
  const projectsContainer = document.getElementById("projects-list-container");
  if (!projectsContainer || !SURD_DATA.research || !SURD_DATA.research.projects) return;

  const filtered = SURD_DATA.research.projects.filter(p => filter === "all" || p.status === filter);

  if (filtered.length === 0) {
    projectsContainer.innerHTML = `<div style="padding: 3rem; text-align: center; color: var(--text-light);">연구 과제가 없습니다.</div>`;
    return;
  }

  projectsContainer.innerHTML = filtered.map(p => `
    <div class="project-item">
      <div class="project-main-info">
        <span class="project-status-tag ${p.status}">${p.status === "ongoing" ? "진행 중 Ongoing" : "완료 Completed"}</span>
        <h4 class="project-item-title">${p.titleKr}</h4>
        <div class="project-item-subtitle">${p.titleEn}</div>
        <div class="project-details">
          <div class="project-funding"><strong>Sponsor:</strong> ${p.fundingKr} / ${p.fundingEn}</div>
          <div class="project-period"><strong>Period:</strong> ${p.duration}</div>
        </div>
      </div>
    </div>
  `).join("");
}

/* =========================================================================
   4. MEMBERS SECTION RENDERING
   ========================================================================= */
function renderMembersSection() {
  const members = SURD_DATA.members;
  if (!members) return;

  // PI Info Detailed
  const pi = members.pi;
  if (pi) {
    document.getElementById("pi-avatar-large").innerText = pi.initials || "JN";
    document.getElementById("pi-name-large").innerHTML = `${pi.nameKr} <span>${pi.nameEn}</span>`;
    document.getElementById("pi-role-large").innerText = pi.roleKr;
    document.getElementById("pi-email-large").innerHTML = `<a href="mailto:${pi.email}" style="color:var(--primary-color); border-bottom:1px dashed var(--accent-color);">${pi.email}</a>`;
    document.getElementById("pi-office-large").innerText = pi.office;
    
    // Bio
    document.getElementById("pi-bio-text").innerHTML = `
      <span style="font-weight: 600; display: block; margin-bottom: 0.75rem; line-height: 1.7; color: var(--primary-color);">${pi.bioKr}</span>
      <span style="font-family: var(--font-en); font-size: 0.9rem; color: var(--text-secondary); display: block; line-height: 1.7;">${pi.bioEn}</span>
    `;

    // Education / Experience list
    const eduItems = [
      "일본 도쿄대학교 (University of Tokyo) 도시계획학 박사 (Ph.D. in Urban Planning)",
      "서울대학교 대학원 도시공학 석사 (M.S. in Urban Engineering, SNU)",
      "서울시립대학교 도시공학과 학사 (B.S. in Urban Engineering, UOS)",
      "국토교통부 도시재생 특별위원회 위원 (National Urban Regeneration Committee Member, MOLIT)",
      "서울특별시 도시계획위원회 위원 (Seoul Metropolitan City Planning Committee Member)",
      "스마트 도시정비 및 주택 정비 재생 분야 주요 국책 과제 총괄 책임자"
    ];
    document.getElementById("pi-education-list").innerHTML = eduItems.map(item => `<li>${item}</li>`).join("");
  }

  // Students Grids
  renderStudentGrid("phd", "phd-grid");
  renderStudentGrid("masters", "masters-grid");
}

function renderStudentGrid(category, containerId) {
  const container = document.getElementById(containerId);
  const students = SURD_DATA.members[category];
  if (!container || !students) return;

  container.innerHTML = students.map(student => `
    <div class="member-card">
      <div class="member-avatar">${student.initials}</div>
      <h4 class="member-name">
        ${student.nameKr}
        <span>${student.nameEn}</span>
      </h4>
      <p class="member-role">${student.roleKr}</p>
      
      <!-- Hover reveal: research interest + email icon -->
      <div class="member-hover-overlay">
        <div class="member-hover-title">Research Area</div>
        <div class="member-interests">
          <strong style="display: block; font-size: 0.85rem; margin-bottom: 0.25rem;">${student.interestsKr}</strong>
          <span style="font-family: var(--font-en); font-size: 0.75rem; display: block; opacity: 0.85; line-height: 1.4;">${student.interestsEn}</span>
        </div>
        <a href="mailto:${student.email}" class="member-email-icon" title="이메일 보내기">
          <i data-lucide="mail" style="width: 16px; height: 16px;"></i>
        </a>
      </div>
    </div>
  `).join("");
}

/* =========================================================================
   5. PUBLICATIONS SECTION RENDERING
   ========================================================================= */
function renderPublicationsSection(filter = "all") {
  const listContainer = document.getElementById("publications-container-list");
  if (!listContainer || !SURD_DATA.publications) return;

  // Filter items
  const filtered = SURD_DATA.publications.filter(pub => filter === "all" || pub.category === filter);

  // Group by year descending
  const years = [...new Set(filtered.map(pub => pub.year))].sort((a, b) => b - a);

  if (filtered.length === 0) {
    listContainer.innerHTML = `<div style="padding: 3rem; text-align: center; color: var(--text-light);">발표된 논문이 없습니다.</div>`;
    return;
  }

  listContainer.innerHTML = years.map(year => {
    const yearPubs = filtered.filter(pub => pub.year === year);
    const itemsHtml = yearPubs.map(pub => {
      const badgeClass = pub.category.toLowerCase();
      const englishSubTitle = pub.englishTitle ? `<div class="pub-title-en-sub">${pub.englishTitle}</div>` : "";
      
      // DOI link button if available
      const doiHtml = pub.doi ? `
        <div class="pub-doi-btn">
          <a href="${pub.doi}" target="_blank" class="btn btn-primary" style="font-size: 0.75rem; padding: 0.4rem 0.8rem; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px;">
            DOI <i data-lucide="external-link" style="width: 12px; height: 12px;"></i>
          </a>
        </div>
      ` : "";

      return `
        <div class="pub-item">
          <span class="pub-badge ${badgeClass}">${pub.category}</span>
          <div class="pub-details">
            <h4 class="pub-title ${badgeClass === 'kci' ? 'kr-title' : ''}">${pub.title}</h4>
            ${englishSubTitle}
            <div class="pub-authors">${pub.authors}</div>
            <div class="pub-journal">${pub.journal} (${pub.year}), <strong>${pub.volumeInfo}</strong></div>
          </div>
          ${doiHtml}
        </div>
      `;
    }).join("");

    return `
      <div class="pub-year-group">
        <div class="pub-year-title">${year}</div>
        <div class="pub-year-list">
          ${itemsHtml}
        </div>
      </div>
    `;
  }).join("");

  // Re-trigger Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* =========================================================================
   6. ALUMNI SECTION RENDERING
   ========================================================================= */
function renderAlumniSection() {
  const alumniContainer = document.getElementById("alumni-grid-container");
  if (!alumniContainer || !SURD_DATA.alumni) return;

  alumniContainer.innerHTML = SURD_DATA.alumni.map(al => `
    <div class="alumni-card">
      <span class="alumni-year-badge">${al.gradYear} Graduation</span>
      <h4 class="alumni-name">
        ${al.nameKr}
        <span style="font-family: var(--font-en); font-size: 0.8rem; font-weight: 500; color: var(--text-light); display: block; margin-top: 0.15rem;">${al.nameEn}</span>
      </h4>
      <span class="alumni-degree">${al.degreeKr} (${al.degreeEn})</span>
      <div class="alumni-affiliation">
        ${al.currentKr}
        <span style="font-family: var(--font-en); font-size: 0.75rem; color: var(--text-light); display: block; margin-top: 0.25rem; line-height: 1.3;">${al.currentEn}</span>
      </div>
    </div>
  `).join("");
}

/* =========================================================================
   7. NEWS SECTION RENDERING
   ========================================================================= */
function renderNewsSection() {
  const newsContainer = document.getElementById("news-grid-container");
  if (!newsContainer || !SURD_DATA.news) return;

  newsContainer.innerHTML = SURD_DATA.news.map(n => `
    <div class="news-card">
      <div class="news-meta">
        <span class="news-date">${n.date}</span>
        <span class="news-category-badge ${n.category.toLowerCase()}">${n.category}</span>
      </div>
      <h4 class="news-title">
        ${n.titleKr}
        <span style="font-family: var(--font-en); font-size: 0.85rem; font-weight: 500; display: block; margin-top: 0.25rem; color: var(--text-secondary); line-height: 1.4;">${n.titleEn}</span>
      </h4>
      <!-- Hover expands to show full details -->
      <div class="news-desc-container">
        <p class="news-desc">
          ${n.descKr}
          <span style="font-family: var(--font-en); font-size: 0.8rem; color: var(--text-light); display: block; margin-top: 0.5rem; line-height: 1.5;">${n.descEn}</span>
        </p>
      </div>
    </div>
  `).join("");
}

/* =========================================================================
   8. CONTACT SECTION RENDERING
   ========================================================================= */
function renderContactSection() {
  const contact = SURD_DATA.contact;
  if (!contact) return;

  document.getElementById("contact-email").innerText = contact.email;
  document.getElementById("contact-email").setAttribute("href", `mailto:${contact.email}`);
  
  document.getElementById("contact-address").innerHTML = `
    ${contact.officeKr}<br>
    <span style="font-size:0.9rem; color:var(--text-light); font-family:var(--font-en);">${contact.officeEn}</span>
  `;
  
  document.getElementById("contact-directions-text").innerHTML = `
    <strong>대중교통 안내 / Transit:</strong><br>
    ${contact.directionsKr}<br><br>
    <span style="font-family: var(--font-en); font-size: 0.85rem; color: var(--text-secondary); display: block; line-height: 1.5;">${contact.directionsEn}</span>
  `;

  // Inject header nav contact info dynamically
  document.getElementById("dropdown-email").innerText = contact.email;
  document.getElementById("dropdown-office").innerText = contact.officeEn.split(",")[0]; // Just the room/building name
}

/* =========================================================================
   INTERACTIVE CONTROLS: NAVIGATION & SCROLL EFFECTS
   ========================================================================= */
function initNavigation() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  
  // Toggle Hamburger menu
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("open");
    navMenu.classList.toggle("open");
  });

  // Mobile navigation links click behavior
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      // Toggle dropdown item on mobile if clicking Contact
      const parentItem = link.parentElement;
      if (window.innerWidth <= 768 && parentItem.querySelector(".nav-dropdown")) {
        // Prevent immediate jump to footer on mobile to show info first
        if (!parentItem.classList.contains("dropdown-active")) {
          e.preventDefault();
          parentItem.classList.add("dropdown-active");
          return;
        }
      }

      hamburgerBtn.classList.remove("open");
      navMenu.classList.remove("open");
      document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("dropdown-active"));
      
      // Update active state manually on click
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      hamburgerBtn.classList.remove("open");
      navMenu.classList.remove("open");
      document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("dropdown-active"));
    }
  });
}

function initProjectsFilter() {
  const tabs = document.querySelectorAll(".projects-tabs .tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filterValue = tab.getAttribute("data-filter");
      renderProjects(filterValue);
    });
  });
}

function initPublicationsFilter() {
  const filterBtns = document.querySelectorAll(".publications-filters .filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filterValue = btn.getAttribute("data-filter");
      renderPublicationsSection(filterValue);
    });
  });
}

function initScrollEffects() {
  const header = document.getElementById("header");
  const scrollTopBtn = document.getElementById("scroll-top-btn");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    // Header scrolled state
    if (scrollPos > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Scroll to top button visibility
    if (scrollPos > 500) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }

    // ScrollSpy active link tracking
    let currentSectionId = "home";
    sections.forEach(sec => {
      const secTop = sec.offsetTop - parseInt(getComputedStyle(document.documentElement).scrollPaddingTop) - 10;
      const secHeight = sec.offsetHeight;
      if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
        currentSectionId = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  // Scroll to top action
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
