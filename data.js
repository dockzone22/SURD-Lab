// data.js - Content database for SURD Lab
// Easily edit this file to update the website content.

const SURD_DATA = {
  labName: {
    en: "Smart Urban Renewal & Development Laboratory (SURD Lab)",
    kr: "스마트도시주택정비및개발연구실",
    abbr: "SURD Lab"
  },
  university: {
    kr: "서울시립대학교 도시공학과",
    en: "Department of Urban Engineering, University of Seoul"
  },
  
  // Hero Tagline (Exact 6 lines requested)
  tagline: [
    "칼로 잰 듯 나누어 떨어지지 않는 무리수처럼,",
    "우리가 사는 도시는 단순하지 않습니다.",
    "정답이 없어 보이는 그 복잡함 속에서,",
    "우리는 오히려 더 깊이 파고듭니다.",
    "",
    "SURD Lab은 도시의 복잡함을 단순하게 만들려 하지 않습니다.",
    "그 안에서, 더 나은 답을 찾아갑니다."
  ],

  // Key Statistics
  stats: [
    { labelKr: "연구원 수", labelEn: "Members", value: "14", icon: "users" },
    { labelKr: "발표 논문", labelEn: "Publications", value: "85+", icon: "file-text" },
    { labelKr: "수행 완료 프로젝트", labelEn: "COMPLETED PROJECTS", value: "24", icon: "briefcase" },
    { labelKr: "설립 연도", labelEn: "Year Founded", value: "2018", icon: "calendar" }
  ],

  // About Section
  about: {
    philosophyKr: "SURD Lab은 급변하는 도시 환경 속에서 발생하는 주택, 인프라, 지역 쇠퇴 문제를 해결하기 위해 스마트 기술과 데이터 기반 분석을 적용합니다. 우리는 단순히 물리적인 정비를 넘어, 도시 구성원들의 삶의 질을 높이고 환경적 지속가능성을 확보할 수 있는 정책과 기술적 솔루션을 함께 고민합니다.",
    philosophyEn: "SURD Lab applies smart technology and data-driven analysis to resolve housing, infrastructure, and urban decline issues occurring in rapidly changing urban environments. Beyond mere physical renewal, we explore policy and technical solutions that enhance the quality of life for urban residents and secure environmental sustainability.",
    piWelcomeKr: "안녕하세요. 스마트도시주택정비및개발연구실(SURD Lab)의 지도교수 남진입니다. 우리 연구실은 복잡하고 다차원적인 도시 문제를 무리수(Surd)처럼 있는 그대로 받아들이고, 실질적이고 과학적인 분석을 통해 해답을 모색하는 학문 공동체입니다. 스마트 기술, 빅데이터, 공간 통계를 활용하여 더 살기 좋고 포용적인 도시의 미래를 함께 그려나갈 인재들을 환영합니다.",
    piWelcomeEn: "Welcome to the Smart Urban Renewal & Development Laboratory (SURD Lab). I am Professor Jin Nam. Our lab is an academic community that embraces complex, multidimensional urban issues as they are—much like irrational numbers (surds)—and seeks practical, scientific solutions through rigorous analysis. We welcome creative minds to join us in shaping a better, more inclusive urban future using smart technologies, big data, and spatial statistics.",
    piPhoto: "", // Empty to trigger the placeholder
    
    // Lab History Timeline
    timeline: [
      {
        year: "2024 - Present",
        titleKr: "스마트 도시재생 R&D 거점 연구소 지정",
        titleEn: "Designated as Smart Urban Renewal R&D Center",
        descKr: "국토교통부 스마트시티 혁신인재 육성사업 참여 및 국가 연구단 연구 개시",
        descEn: "Participation in MOLIT's smart city human resource development project and national R&D project initiation"
      },
      {
        year: "2022",
        titleKr: "도시 데이터 시각화 플랫폼 구축",
        titleEn: "Urban Data Visualization Platform Launch",
        descKr: "서울/수도권 주택 노후도 및 취약성 평가 GIS 오픈 플랫폼 배포",
        descEn: "Released GIS open platform evaluating building aging and vulnerability in Seoul metropolitan area"
      },
      {
        year: "2020",
        titleKr: "해외 우수 학술지 논문 게재 다수",
        titleEn: "Expansion of High-Impact Publications",
        descKr: "SSCI/SCIE 등 저명 국제 학술지에 스마트 정비 정책 효과 분석 논문 다수 게재",
        descEn: "Published multiple papers analyzing smart renewal policy effects in prestigious SSCI/SCIE journals"
      },
      {
        year: "2018",
        titleKr: "SURD Lab 설립",
        titleEn: "SURD Lab Founded",
        descKr: "스마트도시주택정비및개발연구실 출범 (지도교수 김상우)",
        descEn: "Established the Smart Urban Renewal & Development Laboratory under Prof. Sangwoo Kim"
      }
    ]
  },

  // Research Areas
  research: {
    areas: [
      {
        id: "renewal",
        titleKr: "스마트 도시정비 & 주택개발",
        titleEn: "Smart Urban Renewal & Housing",
        shortDescKr: "기술 융합형 정비사업 모델 설계 및 주거복지 향상을 위한 노후 주거지 재생 연구",
        shortDescEn: "Designing technology-converged renewal models and researching old residential area restoration.",
        descKr: "기존의 전면 철거형 정비 방식에서 벗어나, 빅데이터와 스마트 센서를 적용해 필요한 노후 주거지를 맞춤형으로 재생하는 전략을 수립합니다. 주택 노후도 진단 자동화, 공간 복지 시설 배치 최적화, 기후 변화에 대응하는 주택 성능 개선 연구를 수행합니다.",
        descEn: "Moving away from traditional total-demolition redevelopment, we establish tailored renewal strategies for aged residential areas using big data and smart sensors. We conduct research on automated building degradation diagnosis, optimization of public facility distribution, and housing performance upgrades resilient to climate change."
      },
      {
        id: "data-gis",
        titleKr: "도시 데이터 & GIS 공간 분석",
        titleEn: "Urban Data & GIS Spatial Analysis",
        shortDescKr: "GIS, 공간통계, 인공지능 기반의 대규모 도시 빅데이터 분석 및 시각화",
        shortDescEn: "Analyzing and visualizing large-scale urban big data based on GIS, spatial statistics, and AI.",
        descKr: "도시에서 생성되는 이동 통신, 유동 인구, 카드 매출, 환경 센서 등의 다양한 빅데이터를 수집하고 공간 분석(GIS)을 수행합니다. 공간 회귀 분석, 인공지능 기반의 도시 변화 예측 모델링을 통해 정책 의사결정을 지원하는 디지털 트윈 기반 기술을 연구합니다.",
        descEn: "We collect and conduct spatial analysis (GIS) on diverse urban big data, including mobile communication, pedestrian counts, credit card transactions, and environmental sensors. We study digital-twin-based technologies supporting policy decisions through spatial regression and AI-driven urban change prediction."
      },
      {
        id: "sustainable",
        titleKr: "지속가능한 도시개발 & 기후변화",
        titleEn: "Sustainable Development & Climate Change",
        shortDescKr: "탄소중립 및 재해 복원력을 고려한 포용적이고 지속가능한 도시 모델 연구",
        shortDescEn: "Researching inclusive and sustainable urban models considering carbon neutrality and resilience.",
        descKr: "기후 변화에 따른 재난 재해(홍수, 폭염 등)에 회복탄력성(Resilience)을 갖는 지속가능한 도시 개발 패러다임을 제안합니다. 저탄소 녹색 인프라의 배치 효과 시뮬레이션, 에너지 자립형 마이크로그리드 주거 단지 모형 설계 등을 주된 영역으로 합니다.",
        descEn: "We propose sustainable urban development paradigms resilient to climate disasters (floods, heat waves). Our focus includes simulating low-carbon green infrastructure impact and designing energy-independent microgrid residential complex models."
      }
    ],
    projects: [
      {
        titleKr: "빅데이터 기반 주거지 노후도 평가 및 맞춤형 정비 계획 수립 모델 개발",
        titleEn: "Development of Big Data-based Residential Aging Evaluation and Tailored Renewal Planning Model",
        duration: "2024.03 ~ 2027.02",
        fundingKr: "국토교통부 (MOLIT)",
        fundingEn: "Ministry of Land, Infrastructure and Transport",
        status: "ongoing"
      },
      {
        titleKr: "디지털 트윈을 활용한 탄소중립 스마트 그린 인프라 입지 최적화 연구",
        titleEn: "Digital Twin-based Optimization for Smart Green Infrastructure Location for Carbon Neutrality",
        duration: "2023.06 ~ 2026.05",
        fundingKr: "한국연구재단 (NRF)",
        fundingEn: "National Research Foundation of Korea",
        status: "ongoing"
      },
      {
        titleKr: "수도권 교통 소외지역의 포용적 대중교통 접근성 공간 계량 분석",
        titleEn: "Spatial Econometric Analysis of Inclusive Transit Accessibility in Seoul Metropolitan Area",
        duration: "2024.01 ~ 2024.12",
        fundingKr: "서울연구원 (Seoul Institute)",
        fundingEn: "The Seoul Institute",
        status: "ongoing"
      },
      {
        titleKr: "인공지능(AI) 기반 도시 쇠퇴 지수 예측 및 선제적 재생 사업 우선순위 도출",
        titleEn: "AI-based Urban Decline Index Prediction and Preemptive Regeneration Prioritization",
        duration: "2021.09 ~ 2024.08",
        fundingKr: "한국연구재단 (NRF)",
        fundingEn: "National Research Foundation of Korea",
        status: "completed"
      },
      {
        titleKr: "스마트 가로수 및 그린 네트워크 구축을 통한 도시 열섬 현상 저감 실증 연구",
        titleEn: "Empirical Study on Mitigation of Urban Heat Island Effect through Smart Street Trees and Green Network",
        duration: "2022.03 ~ 2023.12",
        fundingKr: "환경부 (ME)",
        fundingEn: "Ministry of Environment",
        status: "completed"
      }
    ]
  },

  // Members Section
  members: {
    pi: {
      nameKr: "남진 교수",
      nameEn: "Prof. Jin Nam",
      initials: "JN",
      roleKr: "지도교수 / 공학박사",
      roleEn: "Principal Investigator / Ph.D.",
      photo: "", // Placeholder initials will be "JN"
      email: "namjin@uos.ac.kr",
      office: "Professor Nam Jin’s Office: Baebong Hall, Room 301 / 배봉관 301호",
      bioKr: "남진 교수는 서울시립대학교 도시공학과를 졸업하고 서울대학교 대학원에서 석사, 일본 도쿄대학교(University of Tokyo)에서 도시계획학 박사 학위를 취득하였습니다. 서울시립대학교 도시공학과 교수로 재직 중이며, 스마트 도시재생, 도시정비 정책, 공간 경제 분석 분야에서 다수의 핵심 국책 연구 과제를 수행하고 있습니다.",
      bioEn: "Prof. Jin Nam received his B.S. in Urban Engineering from the University of Seoul, M.S. from Seoul National University, and Ph.D. in Urban Planning from the University of Tokyo. He is a professor at the University of Seoul, actively conducting major national R&D projects focusing on smart urban renewal, housing redevelopment policies, and spatial economics."
    },
    phd: [
      {
        nameKr: "이지민",
        nameEn: "Jimin Lee",
        initials: "JL",
        roleKr: "박사과정 (수료)",
        roleEn: "Ph.D. Candidate",
        interestsKr: "도시 공간 빅데이터, 공간 회귀 모형, 주택 금융",
        interestsEn: "Urban Big Data, Spatial Regression, Housing Finance",
        email: "jimin.lee@university.ac.kr"
      },
      {
        nameKr: "박준서",
        nameEn: "Junseo Park",
        initials: "JP",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        interestsKr: "스마트시티 기획, 기후탄력성 도시 정비, 탄소저감",
        interestsEn: "Smart City Planning, Climate-resilient Renewal, Carbon Reduction",
        email: "junseo.p@university.ac.kr"
      },
      {
        nameKr: "최아름",
        nameEn: "Ahreum Choi",
        initials: "AC",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        interestsKr: "공간 복지, 노인 거주 취약성, AI 의사결정 모델",
        interestsEn: "Spatial Welfare, Elderly Housing Vulnerability, AI Decision Models",
        email: "ar.choi@university.ac.kr"
      }
    ],
    masters: [
      {
        nameKr: "강도현",
        nameEn: "Dohyun Kang",
        initials: "DK",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        interestsKr: "GIS 공간 분석, 유동 인구 이동 패턴, 디지털 트윈",
        interestsEn: "GIS Spatial Analysis, Pedestrian Flow Patterns, Digital Twin",
        email: "dh.kang@university.ac.kr"
      },
      {
        nameKr: "윤서연",
        nameEn: "Seoyeon Yoon",
        initials: "SY",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        interestsKr: "가로환경 정비, 스마트 보행 네트워크, 미세먼지 저감",
        interestsEn: "Streetscape Improvement, Smart Pedestrian Network, Fine Dust Abatement",
        email: "sy.yoon@university.ac.kr"
      },
      {
        nameKr: "김민재",
        nameEn: "Minjae Kim",
        initials: "MK",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        interestsKr: "주거 젠트리피케이션, 도시 재생 상생협약, 공간 경제",
        interestsEn: "Residential Gentrification, Win-win Agreements, Spatial Economics",
        email: "mj.kim@university.ac.kr"
      },
      {
        nameKr: "Sarah Jenkins",
        nameEn: "Sarah Jenkins",
        initials: "SJ",
        roleKr: "석사과정 (유학생)",
        roleEn: "M.S. Student (International)",
        interestsKr: "글로벌 지속가능 도시 지표 개발, 대중교통 지향 개발 (TOD)",
        interestsEn: "Global Sustainable Urban Indicators, Transit-Oriented Development (TOD)",
        email: "sarah.j@university.ac.kr"
      }
    ]
  },

  // Publications Section
  publications: [
    {
      category: "SSCI",
      title: "Predicting Urban Gentrification Trajectories Using Machine Learning and Multi-source Spatial Big Data",
      authors: "Lee, J., Kim, S. (Corresponding Author), & Park, J.",
      journal: "Landscape and Urban Planning",
      year: 2024,
      volumeInfo: "Vol. 241, 104928",
      doi: "https://doi.org/10.1016/j.landurbplan.2023.104928"
    },
    {
      category: "SSCI",
      title: "How Smart Green Infrastructures Mitigate Urban Heat Island Effects: A Spatial Econometric Approach in Seoul",
      authors: "Park, J., Choi, A., & Kim, S.",
      journal: "Sustainable Cities and Society",
      year: 2023,
      volumeInfo: "Vol. 95, 104612",
      doi: "https://doi.org/10.1016/j.scs.2023.104612"
    },
    {
      category: "KCI",
      title: "기계학습 기반의 서울시 아파트 노후도 평가와 스마트 유지보수 의사결정 모델",
      englishTitle: "Machine Learning-Based Building Degradation Assessment and Smart Maintenance Decision Model for Apartments in Seoul",
      authors: "최아름, 이지민, 김상우",
      journal: "대한국토·도시계획학회지 [국토계획]",
      year: 2023,
      volumeInfo: "제58권 제3호, pp. 45-62",
      doi: "https://doi.org/10.17208/jkpa.2023.06.58.3.45"
    },
    {
      category: "KCI",
      title: "도시 소외지역 정비를 위한 스마트 공간 복지 시설의 최적 입지 선정 모델",
      englishTitle: "Optimization Model for Location Selection of Smart Spatial Welfare Facilities for Urban Disadvantaged Areas",
      authors: "윤서연, 강도현, 김상우",
      journal: "한국도시설계학회지 [도시설계]",
      year: 2022,
      volumeInfo: "제23권 제5호, pp. 89-104",
      doi: "https://doi.org/10.38195/judik.2022.10.23.5.89"
    },
    {
      category: "Conference",
      title: "A Digital Twin Framework for Simulating Flood Resilience in Low-Lying Urban Residential Blocks",
      authors: "Kang, D., Jenkins, S., & Kim, S.",
      journal: "Proceedings of the 2024 International Conference on Smart Urbanism (ICSU)",
      year: 2024,
      volumeInfo: "Singapore, June 14-16",
      doi: ""
    },
    {
      category: "Conference",
      title: "Evaluating the Effectiveness of Smart Street Design on Pedestrian Spatial Behavior Using WiFi Sniffer Logs",
      authors: "Yoon, S., & Kim, S.",
      journal: "Annual Conference of the Association of Collegiate Schools of Planning (ACSP)",
      year: 2023,
      volumeInfo: "Chicago, USA, October 19-21",
      doi: ""
    }
  ],

  // Alumni Section
  alumni: [
    {
      nameKr: "정성호",
      nameEn: "Sungho Jung",
      degreeKr: "공학박사",
      degreeEn: "Ph.D.",
      gradYear: "2023",
      currentKr: "국토연구원 부연구위원",
      currentEn: "Associate Research Fellow, Korea Research Institute for Human Settlements"
    },
    {
      nameKr: "김혜원",
      nameEn: "Hyewon Kim",
      degreeKr: "공학석사",
      degreeEn: "M.S.",
      gradYear: "2022",
      currentKr: "한국토지주택공사(LH) 스마트도시기획실 연구원",
      currentEn: "Researcher, Smart City Planning Div., Korea Land & Housing Corporation"
    },
    {
      nameKr: "이동우",
      nameEn: "Dongwoo Lee",
      degreeKr: "공학석사",
      degreeEn: "M.S.",
      gradYear: "2021",
      currentKr: "서울시정연구원 연구원",
      currentEn: "Researcher, Seoul Institute"
    },
    {
      nameKr: "최윤지",
      nameEn: "Yoonji Choi",
      degreeKr: "공학석사",
      degreeEn: "M.S.",
      gradYear: "2020",
      currentKr: "㈜삼안 도시계획본부 대리",
      currentEn: "Assistant Manager, Urban Planning Dept., Saman Eng"
    }
  ],

  // News Section
  news: [
    {
      date: "2026.05.15",
      category: "Award",
      titleKr: "이지민 박사과정, 한국도시계획학회 우수 논문상 수상",
      titleEn: "Jimin Lee wins Outstanding Paper Award at KPA Spring Conference",
      descKr: "디지털 트윈을 활용한 미개발 노후주거지 도로망 격자성 분석 논문으로 우수 포스터 발표 부문을 수상하였습니다.",
      descEn: "Won the Outstanding Poster Presentation Award for her research on structural analysis of street networks in underdeveloped residential blocks using digital twins."
    },
    {
      date: "2026.04.10",
      category: "Paper",
      titleKr: "도시 환경 분야 저명 국제 학술지 'Sustainable Cities and Society' 논문 게재 확정",
      titleEn: "New paper accepted in 'Sustainable Cities and Society'",
      descKr: "박준서, 최아름 학생 및 김상우 교수가 공동 연구한 스마트 녹색인프라의 도심 열섬 저감 효과 실증 분석 논문이 등재되었습니다.",
      descEn: "Our paper on empirical analysis of heat island mitigation using smart green infrastructure co-authored by J. Park, A. Choi, and Prof. S. Kim has been accepted for publication."
    },
    {
      date: "2026.03.02",
      category: "Event",
      titleKr: "2026학년도 1학기 개강 및 신입생 환영회",
      titleEn: "Spring 2026 Semester Kickoff & Welcome dinner",
      descKr: "새로 입학한 석사과정 연구원들을 환영하고 이번 학기 진행 프로젝트 마일스톤을 점검하는 랩 세미나 및 친목 모임을 진행하였습니다.",
      descEn: "Held our kickoff seminar and welcome dinner to greet incoming master's students and review milestones for research projects this semester."
    },
    {
      date: "2025.11.20",
      category: "Award",
      titleKr: "SURD Lab, 국토교통부 스마트 시티 R&D 성과 평가 최우수 선정",
      titleEn: "SURD Lab wins Top Evaluation in MOLIT Smart City R&D Program",
      descKr: "지난 2년간 진행한 도시 데이터 플랫폼 실증 부문 연구가 국토부 과제 연차 평가에서 전국 연구단 중 최우수 등급을 받았습니다.",
      descEn: "Our research in the spatial data platform verification section was awarded the top rank among national teams during the annual evaluation of MOLIT's smart city human resource program."
    }
  ],

  // Interviews and Columns Section
  interviews: [
    /*
    {
      date: "YYYY.MM.DD",
      type: "interview", // "interview" | "column"
      titleKr: "국문 제목",
      titleEn: "영문 제목", // or empty string
      description: "간단한 소개",
      source: "언론사 또는 게재 매체",
      url: "원문 링크"
    }
    */
  ],

  // Contact Section
  contact: {
    email: "namjin@uos.ac.kr",
    tel: "02-6490-2720", // Realistic UOS office prefix
    officeKr: "서울특별시 동대문구 서울시립대로 163, 서울시립대학교 배봉관 315호",
    officeEn: "Baebong Hall, Room 315, University of Seoul, 163 Seoulsiripdae-ro, Dongdaemun-gu, Seoul, Republic of Korea",
    directionsKr: "지하철 1호선 청량리역 3번 출구 또는 경의중앙선 회기역 2번 출구에서 서울시립대학교 방면으로 오시면 편리합니다. 버스를 이용하시는 경우 서울시립대 정문 정류장(ID: 06-188)에서 하차하신 후 배봉관 315호로 오시면 편리합니다.",
    directionsEn: "A short walk from Cheongnyangni Station (Line 1, Exit 3) or Hoegi Station (Gyeongui-Jungang Line, Exit 2) towards the University of Seoul. If traveling by bus, please get off at the University of Seoul Main Gate stop (ID: 06-188) and proceed to Baebong Hall, Room 315."
  }
};
