// app.js - Rendering and Interactive Logic for SURD Lab Homepage (Multi-Page Version)

document.addEventListener("DOMContentLoaded", () => {
  // Initialize dynamic content rendering with DOM safety checks
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
  initNewsTabs();
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
  const piAvatarEl = document.getElementById("pi-avatar");
  if (pi && piAvatarEl) {
    if (pi.image) {
      piAvatarEl.classList.remove("fallback-active");
      piAvatarEl.innerHTML = `
        <img src="${pi.image}" alt="${pi.nameKr}" class="avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline'; this.parentNode.classList.add('fallback-active');">
        <span class="avatar-initials" style="display:none;">${pi.initials || "NJ"}</span>
      `;
    } else {
      piAvatarEl.classList.add("fallback-active");
      piAvatarEl.innerHTML = `<span class="avatar-initials">${pi.initials || "NJ"}</span>`;
    }
    const piNameEl = document.getElementById("pi-name");
    if (piNameEl) piNameEl.innerText = pi.nameKr;
    const piRoleEl = document.getElementById("pi-role");
    if (piRoleEl) piRoleEl.innerText = pi.roleKr;
    const piEmailEl = document.getElementById("pi-contact-email");
    if (piEmailEl) piEmailEl.innerHTML = `<a href="mailto:${pi.email}" style="color:var(--primary-color); border-bottom:1px dashed var(--accent-color);">${pi.email}</a>`;
    const piOfficeEl = document.getElementById("pi-contact-office");
    if (piOfficeEl) piOfficeEl.innerText = pi.office.split("/")[1].trim(); // Get Korean office part
  }

  // PI Education / Experience list
  const piEducationListEl = document.getElementById("pi-education-list");
  if (piEducationListEl && pi && pi.education) {
    piEducationListEl.innerHTML = pi.education.map(item => {
      if (typeof item === "object" && item !== null) {
        if (item.en) {
          return `<li>
            <span class="edu-kr" style="display: block; line-height: 1.4;">${item.kr}</span>
            <span class="edu-en" style="display: block; font-size: 0.82rem; color: var(--text-light); font-family: var(--font-en); line-height: 1.35; margin-top: 0.15rem;">${item.en}</span>
          </li>`;
        }
        return `<li><span class="edu-kr" style="display: block; line-height: 1.4;">${item.kr}</span></li>`;
      }
      return `<li>${item}</li>`;
    }).join("");
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
    "Renewal": `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-custom" aria-hidden="true">
        <path d="M2 21h20" />
        <path d="M4 21V12h5v9" />
        <path d="M9 21V5h6v16" />
        <path d="M15 21V10h5v11" />
      </svg>
    `,
    "Housing Market": `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-custom" aria-hidden="true">
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      </svg>
    `,
    "Urban and Housing Development Analysis": `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-custom" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="7.5" />
        <path d="M8.5 8.5l1.75 7 1.75-4.5 1.75 4.5 1.75-7" />
        <path d="M7 11.5h10M7 13.5h10" />
      </svg>
    `
  };

  if (areasContainer && research.areas) {
    areasContainer.innerHTML = research.areas.map(area => `
      <div class="research-card" tabindex="0">
        <div class="research-card-icon">
          ${icons[area.id] || `<i data-lucide="layers" style="width: 32px; height: 32px;"></i>`}
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

    // Add mobile tap-to-toggle overlay support
    areasContainer.querySelectorAll(".research-card").forEach(card => {
      card.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          const wasActive = card.classList.contains("active");
          areasContainer.querySelectorAll(".research-card.active").forEach(c => c.classList.remove("active"));
          if (!wasActive) card.classList.add("active");
        }
      });
    });
  }

  // Initial projects rendering
  const projectsContainer = document.getElementById("projects-list-container");
  if (projectsContainer) {
    renderProjects("all");
  }
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
        ${p.titleEn ? `<div class="project-item-subtitle">${p.titleEn}</div>` : ""}
        <div class="project-details">
          <div class="project-period"><strong>연구기간 / Period:</strong> ${p.period}</div>
          <div class="project-stage"><strong>연구개발단계 / Stage:</strong> ${p.stageKr}${p.stageEn ? ` (${p.stageEn})` : ""}</div>
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



  // Research Professors Info Detailed (Supports multiple research professors: 김진하, 이정현)
  const rpContainer = document.getElementById("rp-list-container");
  const rpSection = document.getElementById("rp-section");
  const rpList = members.researchProfessors || (members.researchProfessor ? [members.researchProfessor] : []);

  if (rpContainer) {
    if (rpList.length === 0) {
      if (rpSection) rpSection.style.display = "none";
    } else {
      if (rpSection) rpSection.style.display = "block";
      rpContainer.innerHTML = rpList.map(rp => {
        const hasImage = rp.image && rp.image.trim() !== "";
        const imageHtml = hasImage
          ? `<img src="${rp.image}" alt="${rp.nameKr}" class="rp-photo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
             <div class="rp-photo-placeholder" style="display:none;">${rp.initials || "RP"}</div>`
          : `<div class="rp-photo-placeholder">${rp.initials || "RP"}</div>`;

        const contactItems = [];
        if (rp.email) {
          contactItems.push(`
            <div class="rp-contact-item">
              <span class="rp-contact-label">Email</span>
              <span class="rp-contact-value"><a href="mailto:${rp.email}">${rp.email}</a></span>
            </div>
          `);
        }
        if (rp.office) {
          contactItems.push(`
            <div class="rp-contact-item">
              <span class="rp-contact-label">Office</span>
              <span class="rp-contact-value">${rp.office}</span>
            </div>
          `);
        }

        const eduHtml = (rp.education && rp.education.length > 0)
          ? rp.education.map(edu => {
              if (typeof edu === "object" && edu !== null) {
                if (edu.en) {
                  return `<li>
                    <span class="edu-kr" style="display: block; line-height: 1.4;">${edu.kr}</span>
                    <span class="edu-en" style="display: block; font-size: 0.82rem; color: var(--text-light); font-family: var(--font-en); line-height: 1.35; margin-top: 0.15rem;">${edu.en}</span>
                  </li>`;
                }
                return `<li><span class="edu-kr" style="display: block; line-height: 1.4;">${edu.kr}</span></li>`;
              }
              return `<li>${edu}</li>`;
            }).join("")
          : "";

        return `
          <div class="rp-card">
            <div class="rp-photo-col">
              ${imageHtml}
            </div>
            <div class="rp-info-col">
              <div class="rp-header">
                <div class="rp-title-wrap">
                  <h4 class="rp-name">${rp.nameKr} <span class="rp-name-en">${rp.nameEn || ""}</span></h4>
                  <span class="rp-role-tag">${rp.roleKr || "연구교수"}${rp.roleEn ? ` <span class="rp-role-tag-en">/ ${rp.roleEn}</span>` : ""}</span>
                </div>
                ${contactItems.length > 0 ? `<div class="rp-contact-box">${contactItems.join("")}</div>` : ""}
              </div>
              <div class="rp-body">
                ${rp.bioKr ? `<p class="rp-bio-kr">${rp.bioKr}</p>` : ""}
                ${rp.bioEn ? `<p class="rp-bio-en">${rp.bioEn}</p>` : ""}
                ${eduHtml ? `
                  <div class="rp-edu-box">
                    <h5 class="rp-edu-heading">주요 약력 및 학력</h5>
                    <ul class="rp-edu-list">
                      ${eduHtml}
                    </ul>
                  </div>
                ` : ""}
              </div>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  // Render full-time and part-time list
  const ftListEl = document.getElementById("fulltime-list");
  if (ftListEl) {
    renderResearchersList("full-time", "fulltime-list", "fulltime-section");
  }
  const ptListEl = document.getElementById("parttime-list");
  if (ptListEl) {
    renderResearchersList("part-time", "parttime-list", "parttime-section");
  }
}

function renderResearchersList(type, containerId, sectionId) {
  const container = document.getElementById(containerId);
  const section = document.getElementById(sectionId);
  if (!container) return;

  const phdList = SURD_DATA.members.phd || [];
  const mastersList = SURD_DATA.members.masters || [];
  const allStudents = [...phdList, ...mastersList];

  // Filter by type (default to full-time if type property is missing)
  const filtered = allStudents.filter(s => (s.type || "full-time").toLowerCase() === type);

  if (filtered.length === 0) {
    if (section) section.style.display = "none";
    return;
  }

  if (section) section.style.display = "block";

  // Check if any researcher has an affiliation
  const hasAffiliation = filtered.some(s => s.affiliation && s.affiliation.trim() !== "");

  // Render Table/List Structure
  let tableHeader = `
    <div class="member-list-header">
      <div class="ml-col-name">Name / 이름</div>
      <div class="ml-col-program">Program / 과정</div>
      ${hasAffiliation ? `<div class="ml-col-affil">Affiliation / 소속</div>` : ""}
    </div>
  `;

  let tableRows = filtered.map(s => {
    return `
      <div class="member-list-row">
        <div class="ml-col-name">
          <span class="ml-name-kr">${s.nameKr}</span>
          <span class="ml-name-en">${s.nameEn}</span>
        </div>
        <div class="ml-col-program">
          <span class="ml-prog-kr">${s.roleKr}</span>
          <span class="ml-prog-en">/ ${s.roleEn}</span>
        </div>
        ${hasAffiliation ? `<div class="ml-col-affil">${s.affiliation || ""}</div>` : ""}
      </div>
    `;
  }).join("");

  container.innerHTML = `<div class="member-list-container">${tableHeader}${tableRows}</div>`;
}

/* ===============================================/* =========================================================================
   5. PUBLICATIONS SECTION RENDERING
   ========================================================================= */
let publicationsDataCache = null;

function renderPublicationsSection(filter = "all") {
  const listContainer = document.getElementById("publications-container-list");
  if (!listContainer) return;

  // Show loading message if cache is empty and fetch starts
  if (!publicationsDataCache) {
    listContainer.innerHTML = `
      <div class="pub-loading" style="padding: 3rem; text-align: center; color: var(--text-light); display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
        <div class="spinner" style="width: 24px; height: 24px; border: 2px solid var(--border-color); border-top-color: var(--primary-color); border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
        <span>데이터를 불러오는 중입니다...</span>
      </div>
    `;

    // Inject spinner animation dynamically if not present
    if (!document.getElementById("spinner-keyframe-style")) {
      const style = document.createElement("style");
      style.id = "spinner-keyframe-style";
      style.textContent = "@keyframes spin { to { transform: rotate(360deg); } }";
      document.head.appendChild(style);
    }

    fetch('./data/publications.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        publicationsDataCache = data;
        displayPublications(publicationsDataCache, filter);
      })
      .catch(error => {
        console.error("Publications 데이터 로드 실패:", error);
        listContainer.innerHTML = `
          <div style="padding: 3rem; text-align: center; color: var(--accent-color-hover);">
            데이터를 불러오는 중에 오류가 발생했습니다.<br>
            <span style="font-size: 0.85rem; color: var(--text-light); margin-top: 0.5rem; display: block;">${error.message}</span>
          </div>
        `;
      });
  } else {
    displayPublications(publicationsDataCache, filter);
  }
}

function displayPublications(data, filter) {
  const listContainer = document.getElementById("publications-container-list");
  if (!listContainer) return;

  // Filter items based on type_index mapping
  const filtered = data.filter(pub => {
    if (filter === "all") return true;

    const idxType = (pub.type_index || "").trim().toUpperCase();
    if (filter === "SSCI/SCIE") {
      return idxType === "SSCI" || idxType === "SCIE";
    }
    if (filter === "KCI") {
      return idxType === "KCI";
    }
    if (filter === "Other") {
      return idxType === "OTHER" || idxType === "UNVERIFIED" || idxType === "NOT APPLICABLE" || idxType === "";
    }
    return false;
  });

  if (filtered.length === 0) {
    listContainer.innerHTML = `<div style="padding: 3rem; text-align: center; color: var(--text-light);">조건에 해당하는 논문이 없습니다.</div>`;
    return;
  }

  // Group by year descending
  const years = [...new Set(filtered.map(pub => pub.year))].sort((a, b) => b - a);

  listContainer.innerHTML = years.map(year => {
    const yearPubs = filtered.filter(pub => pub.year === year);
    const itemsHtml = yearPubs.map(pub => {
      const idxTypeLower = (pub.type_index || "other").toLowerCase();
      // Class mapping for badge styles
      let badgeClass = "other";
      if (idxTypeLower === "ssci" || idxTypeLower === "scie") badgeClass = "ssci";
      else if (idxTypeLower === "kci") badgeClass = "kci";

      // Formulate volume and issue
      let volumeInfo = "";
      if (pub.volume && pub.issue) {
        volumeInfo = `${pub.volume}(${pub.issue})`;
      } else if (pub.volume) {
        volumeInfo = `${pub.volume}`;
      } else if (pub.issue) {
        volumeInfo = `(${pub.issue})`;
      }

      // Natural bibliography string formatting
      let bibParts = [];
      if (pub.journal) bibParts.push(pub.journal);
      if (pub.year) bibParts.push(`(${pub.year})`);

      let bibText = bibParts.join(" ");

      let detailsParts = [];
      if (volumeInfo) detailsParts.push(volumeInfo);
      if (pub.pages) detailsParts.push(`pp. ${pub.pages}`);

      if (detailsParts.length > 0) {
        if (bibText) {
          bibText += `, ${detailsParts.join(", ")}`;
        } else {
          bibText = detailsParts.join(", ");
        }
      }

      if (bibText) bibText += ".";

      // Link resolution (DOI vs URL)
      let linkUrl = "";
      let isDoi = false;
      if (pub.doi) {
        const doiStr = pub.doi.trim();
        isDoi = true;
        if (doiStr.startsWith("http://") || doiStr.startsWith("https://")) {
          linkUrl = doiStr;
        } else {
          linkUrl = `https://doi.org/${doiStr}`;
        }
      } else if (pub.url) {
        linkUrl = pub.url.trim();
      }

      const linkHtml = linkUrl ? `
        <div class="pub-doi-btn">
          <a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 0.75rem; padding: 0.4rem 0.8rem; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px;">
            ${isDoi ? "DOI" : "Link"} <i data-lucide="external-link" style="width: 12px; height: 12px;"></i>
          </a>
        </div>
      ` : "";

      return `
        <div class="pub-item">
          <span class="pub-badge ${badgeClass}">${pub.type_index || "Other"}</span>
          <div class="pub-details">
            <h4 class="pub-title ${badgeClass === 'kci' ? 'kr-title' : ''}">${pub.title || ""}</h4>
            <div class="pub-authors">${pub.authors || ""}</div>
            <div class="pub-journal">${bibText}</div>
          </div>
          ${linkHtml}
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
let currentAlumniTab = "phd";

function renderAlumniSection() {
  const alumniContainer = document.getElementById("alumni-grid-container");
  if (!alumniContainer || !SURD_DATA.alumni) return;

  // 1. Calculate & Display Dynamic Total Alumni Count
  const totalCount = SURD_DATA.alumni.length;
  const countKrEl = document.getElementById("alumni-count-kr");
  const countEnEl = document.getElementById("alumni-count-en");
  if (countKrEl) countKrEl.textContent = `(총 ${totalCount}명)`;
  if (countEnEl) countEnEl.textContent = `(${totalCount})`;

  // Helper to check if alumni is PhD
  const isPhdAlumni = (al) => {
    if (al.degrees && Array.isArray(al.degrees)) {
      return al.degrees.some(d =>
        (d.degreeKr && d.degreeKr.includes("박사")) ||
        (d.degreeEn && (d.degreeEn.includes("Ph.D") || d.degreeEn.includes("PhD")))
      );
    }
    if (al.degreeKr && al.degreeKr.includes("박사")) return true;
    if (al.degreeEn && (al.degreeEn.includes("Ph.D") || al.degreeEn.includes("PhD"))) return true;
    return false;
  };

  // Helper to get top graduation year
  const getTopYear = (al) => {
    if (al.degrees && al.degrees.length > 0) {
      const phdDeg = al.degrees.find(d => d.degreeKr && d.degreeKr.includes("박사"));
      if (phdDeg && phdDeg.gradYear) return parseInt(phdDeg.gradYear) || 0;
      return parseInt(al.degrees[0].gradYear) || 0;
    }
    if (al.graduationYear) return parseInt(al.graduationYear) || 0;
    return 0;
  };

  // Korean syllable decomposition for English initials (Given initial + Family initial)
  const getKoreanRomanizedInitials = (koreanName) => {
    if (!koreanName || typeof koreanName !== "string") return "?";
    const name = koreanName.replace(/[^가-힣]/g, "");
    if (!name) return "?";

    const familyNameMap = {
      "김": "K", "이": "L", "박": "P", "최": "C", "정": "J", "강": "K", "조": "C", "윤": "Y", "장": "J", "임": "L",
      "한": "H", "오": "O", "서": "S", "신": "S", "권": "K", "황": "H", "안": "A", "송": "S", "류": "R", "유": "Y",
      "홍": "H", "고": "K", "문": "M", "양": "Y", "손": "S", "배": "B", "백": "B", "허": "H", "노": "N", "심": "S",
      "하": "H", "곽": "K", "성": "S", "차": "C", "주": "J", "우": "W", "구": "K", "전": "J", "민": "M", "나": "N",
      "진": "J", "지": "J", "엄": "E", "채": "C", "원": "W", "천": "C", "방": "B", "공": "K", "현": "H", "함": "H",
      "변": "B", "염": "Y", "여": "Y", "추": "C", "도": "D", "소": "S", "석": "S", "선": "S", "설": "S", "마": "M"
    };
    const initialMap = ["G", "G", "N", "D", "D", "R", "M", "B", "B", "S", "S", "", "J", "J", "C", "K", "T", "P", "H"];
    const vowelMap = ["A", "A", "Y", "Y", "E", "E", "Y", "Y", "O", "W", "W", "W", "Y", "U", "W", "W", "W", "Y", "E", "Y", "I"];

    const getCharInit = (char, isFamily = false) => {
      if (isFamily && familyNameMap[char]) return familyNameMap[char];
      const code = char.charCodeAt(0) - 0xac00;
      if (code < 0 || code > 11171) return "";
      const initIdx = Math.floor(code / (21 * 28));
      const vowIdx = Math.floor((code % (21 * 28)) / 28);
      if (initIdx === 11) return vowelMap[vowIdx] || "A";
      return initialMap[initIdx] || "K";
    };

    if (name.length >= 3) {
      const fam = getCharInit(name[0], true);
      const given = getCharInit(name[1], false);
      return (given + fam).toUpperCase();
    } else if (name.length === 2) {
      const fam = getCharInit(name[0], true);
      const given = getCharInit(name[1], false);
      return (given + fam).toUpperCase();
    } else if (name.length === 1) {
      return getCharInit(name[0], true).toUpperCase() || "?";
    }
    return "?";
  };

  // Helper for initials (Priority: initials -> nameEn -> Korean Romanized Initials -> '?')
  const getAlumniInitials = (al) => {
    if (al.initials && al.initials.trim()) return al.initials.trim().toUpperCase();
    if (al.nameEn && al.nameEn.trim()) {
      const parts = al.nameEn.trim().replace(/[^a-zA-Z\s-]/g, "").split(/[\s-]+/).filter(Boolean);
      if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      } else if (parts.length === 1 && parts[0].length >= 2) {
        return parts[0].substring(0, 2).toUpperCase();
      }
    }
    if (al.nameKr && al.nameKr.trim()) {
      return getKoreanRomanizedInitials(al.nameKr.trim());
    }
    return "?";
  };

  // Separate PhD and Masters
  const phdList = SURD_DATA.alumni.filter(isPhdAlumni).sort((a, b) => getTopYear(b) - getTopYear(a));
  const mastersList = SURD_DATA.alumni.filter(al => !isPhdAlumni(al)).sort((a, b) => getTopYear(b) - getTopYear(a));

  // Update Badges
  const phdBadge = document.getElementById("phd-count-badge");
  const mastersBadge = document.getElementById("masters-count-badge");
  if (phdBadge) phdBadge.textContent = phdList.length;
  if (mastersBadge) mastersBadge.textContent = mastersList.length;

  // Render Function by Tab
  const renderTabContent = (tab) => {
    if (tab === "phd") {
      alumniContainer.className = "phd-alumni-grid";
      alumniContainer.innerHTML = phdList.map(al => {
        const topYear = getTopYear(al);
        const initials = getAlumniInitials(al);
        const nameEnClean = (al.nameEn || "").trim();
        const affiliation = al.affiliationKr || al.affiliationEn || "";
        const position = al.positionKr || al.positionEn || "";
        const bio = al.bioKr || al.bioEn || "";

        // Format degrees for overlay
        const degreeLines = (al.degrees || []).map(d =>
          `${d.degreeKr} (${d.degreeEn})${d.gradYear ? ` ${d.gradYear}` : ""}`
        ).join(" · ");

        const formatMultiline = (text) => text ? text.replace(/\n/g, "<br>") : "";
        const formattedAffiliation = formatMultiline(affiliation);
        const formattedPosition = formatMultiline(position);
        const formattedBio = formatMultiline(bio);
        const bioContent = formattedBio
          ? formattedBio
          : (formattedAffiliation ? `${formattedAffiliation}${formattedPosition ? ' ' + formattedPosition : ''}` : '');

        const avatarHtml = al.photo
          ? `<img src="${al.photo}" alt="${al.nameKr}" class="phd-avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
             <div class="phd-avatar-placeholder" style="display:none;">${initials}</div>`
          : `<div class="phd-avatar-placeholder">${initials}</div>`;

        return `
          <div class="phd-alumni-card" tabindex="0">
            <div class="phd-avatar-wrapper">
              ${avatarHtml}
            </div>
            <div class="phd-info">
              <span class="phd-degree-badge">Ph.D. ${topYear || ""}</span>
              <h4 class="phd-name">
                ${al.nameKr}
                ${nameEnClean ? `<span class="phd-name-en">${nameEnClean}</span>` : ""}
              </h4>
              ${formattedAffiliation ? `<div class="phd-affiliation">${formattedAffiliation}</div>` : ""}
              ${formattedPosition ? `<div class="phd-position">${formattedPosition}</div>` : ""}
              <button type="button" class="phd-card-mobile-btn" aria-label="${al.nameKr} 약력 보기">약력 보기 / View profile</button>
            </div>
            <div class="phd-bio-overlay">
              <div class="phd-bio-title">${al.nameKr}</div>
              ${bioContent ? `<div class="phd-bio-text">${bioContent}</div>` : ""}
              ${degreeLines ? `<div class="phd-bio-degrees">${degreeLines}</div>` : ""}
            </div>
          </div>
        `;
      }).join("");

      // Bind mobile card toggle
      alumniContainer.querySelectorAll(".phd-alumni-card").forEach(card => {
        const mobileBtn = card.querySelector(".phd-card-mobile-btn");
        if (mobileBtn) {
          mobileBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const wasActive = card.classList.contains("is-active");
            alumniContainer.querySelectorAll(".phd-alumni-card.is-active").forEach(c => c.classList.remove("is-active"));
            if (!wasActive) card.classList.add("is-active");
          });
        }
        card.addEventListener("click", () => {
          if (window.innerWidth <= 768) {
            card.classList.toggle("is-active");
          }
        });
      });
    } else {
      alumniContainer.className = "masters-alumni-grid";
      alumniContainer.innerHTML = mastersList.map(al => {
        const topYear = getTopYear(al);
        const nameEnClean = (al.nameEn || "").trim();
        const degreesHtml = (al.degrees || []).map(d =>
          `<span class="alumni-degree-item">${d.degreeKr} (${d.degreeEn})</span>`
        ).join("");

        return `
          <div class="alumni-card">
            <span class="alumni-year-badge">${topYear} Graduation</span>
            <h4 class="alumni-name">
              ${al.nameKr}
              ${nameEnClean ? `<span class="alumni-name-en">${nameEnClean}</span>` : ""}
            </h4>
            <div class="alumni-degrees">
              ${degreesHtml}
            </div>
          </div>
        `;
      }).join("");
    }
  };

  // Initialize Tabs and event listeners (one-time binding)
  const tabButtons = document.querySelectorAll(".alumni-tab-btn");
  tabButtons.forEach((btn, index) => {
    btn.onclick = () => {
      const selectedTab = btn.getAttribute("data-tab");
      if (selectedTab === currentAlumniTab) return;
      currentAlumniTab = selectedTab;

      tabButtons.forEach(b => {
        const isActive = b === btn;
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      renderTabContent(currentAlumniTab);
    };

    // Keyboard navigation
    btn.onkeydown = (e) => {
      let targetIndex = -1;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        targetIndex = (index + 1) % tabButtons.length;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        targetIndex = (index - 1 + tabButtons.length) % tabButtons.length;
      } else if (e.key === "Home") {
        targetIndex = 0;
      } else if (e.key === "End") {
        targetIndex = tabButtons.length - 1;
      }
      if (targetIndex !== -1) {
        e.preventDefault();
        tabButtons[targetIndex].focus();
        tabButtons[targetIndex].click();
      }
    };
  });

  // Initial render with default tab (PhD)
  renderTabContent(currentAlumniTab);
}

/* =========================================================================
   7. NEWS SECTION RENDERING
   ========================================================================= */
function renderNewsSection() {
  const newsContainer = document.getElementById("news-grid-container");
  if (!newsContainer) return;

  // Default to rendering Lab News
  renderLabNews();
}

function renderLabNews() {
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

function renderInterviews() {
  const newsContainer = document.getElementById("news-grid-container");
  if (!newsContainer) return;

  if (!SURD_DATA.interviews || SURD_DATA.interviews.length === 0) {
    newsContainer.innerHTML = `
      <div class="news-empty-state" style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: #ffffff; border-radius: var(--radius-lg); border: 1px solid var(--border-color); display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: var(--shadow-sm);">
        <i data-lucide="message-square" style="width: 48px; height: 48px; color: var(--text-light); margin-bottom: 1rem;"></i>
        <p class="empty-title" style="font-size: 1.1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">등록된 인터뷰 및 기고문이 없습니다.</p>
        <p class="empty-subtitle" style="font-size: 0.9rem; color: var(--text-light); font-family: var(--font-en);">Interviews and columns will be updated soon.</p>
      </div>
    `;
    if (window.lucide) {
      window.lucide.createIcons();
    }
    return;
  }

  newsContainer.innerHTML = SURD_DATA.interviews.map(item => `
    <div class="news-card interview-card">
      <div class="news-meta">
        <span class="news-date">${item.date}</span>
        <span class="news-category-badge ${item.type.toLowerCase()}">${item.type.toUpperCase()}</span>
      </div>
      <h4 class="news-title">
        ${item.titleKr}
        ${item.titleEn ? `<span style="font-family: var(--font-en); font-size: 0.85rem; font-weight: 500; display: block; margin-top: 0.25rem; color: var(--text-secondary); line-height: 1.4;">${item.titleEn}</span>` : ""}
      </h4>
      <div class="news-desc-container">
        <p class="news-desc" style="margin-bottom: 1rem;">
          ${item.description}
          <span class="interview-source" style="display: block; margin-top: 0.75rem; font-size: 0.85rem; font-weight: 600; color: var(--primary-color);">매체 / Source: ${item.source}</span>
        </p>
        ${item.url ? `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="news-link-btn">
          원문 보기 &rarr;
        </a>
        ` : ""}
      </div>
    </div>
  `).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initNewsTabs() {
  const tabs = document.querySelectorAll(".news-content-tab");
  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Deactivate all tabs
      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      // Activate clicked tab
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      // Render corresponding content
      const tabType = tab.getAttribute("data-tab");
      if (tabType === "news") {
        renderLabNews();
      } else if (tabType === "interview") {
        renderInterviews();
      }
    });
  });
}

/* =========================================================================
   8. CONTACT SECTION RENDERING
   ========================================================================= */
function renderContactSection() {
  const contact = SURD_DATA.contact;
  if (!contact) return;

  const contactEmailEl = document.getElementById("contact-email");
  if (contactEmailEl) {
    contactEmailEl.innerText = contact.email;
  }

  const contactTelWrapper = document.getElementById("contact-tel-wrapper");
  const contactTelEl = document.getElementById("contact-tel");
  if (contact.tel && contactTelEl) {
    contactTelEl.innerText = contact.tel;
    if (contactTelWrapper) {
      contactTelWrapper.style.display = "block";
    }
  } else if (contactTelWrapper) {
    contactTelWrapper.style.display = "none";
  }

  const contactAddressEl = document.getElementById("contact-address");
  if (contactAddressEl) {
    contactAddressEl.innerHTML = `
      ${contact.officeKr}<br>
      <span style="font-size:0.9rem; color:var(--text-light); font-family:var(--font-en);">${contact.officeEn}</span>
    `;
  }

  const contactDirectionsTextEl = document.getElementById("contact-directions-text");
  if (contactDirectionsTextEl) {
    contactDirectionsTextEl.innerHTML = `
      <strong>대중교통 안내 / Transit:</strong><br>
      ${contact.directionsKr}<br><br>
      <span style="font-family: var(--font-en); font-size: 0.85rem; color: var(--text-secondary); display: block; line-height: 1.5;">${contact.directionsEn}</span>
    `;
  }

  // Inject header nav contact info dynamically (if dropdown elements are present)
  const dropdownEmailEl = document.getElementById("dropdown-email");
  if (dropdownEmailEl) {
    dropdownEmailEl.innerText = contact.email;
  }
  const dropdownOfficeEl = document.getElementById("dropdown-office");
  if (dropdownOfficeEl) {
    const parts = contact.officeEn.split(",");
    dropdownOfficeEl.innerText = parts[0].trim() + ", " + parts[1].trim(); // "Baebong Hall, Room 315"
  }
}

/* =========================================================================
   INTERACTIVE CONTROLS: NAVIGATION & SCROLL EFFECTS
   ========================================================================= */
function initNavigation() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!hamburgerBtn || !navMenu) return;

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
  if (tabs.length === 0) return;

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
  if (filterBtns.length === 0) return;

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

  if (!header || !scrollTopBtn) return;

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
  });

  // Scroll to top action
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
