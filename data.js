// data.js - Content database for SURD Lab
// Easily edit this file to update the website content.

const SURD_DATA = {
  labName: {
    en: "Smart Urban housing Renewal & Development Laboratory (SURD Lab)",
    kr: "스마트도시주택정비및개발연구실",
    abbr: "SURD Lab"
  },
  university: {
    kr: "서울시립대학교 도시공학과",
    en: "Department of Urban Planning and Design, University of Seoul"
  },

  // Hero Tagline (Exact 6 lines requested)
  tagline: [
    "칼로 잰 듯 나누어 떨어지지 않는 무리수처럼,",
    "우리가 사는 도시는 단순하지 않습니다.",
    "정답이 없어 보이는 그 복잡함 속에서",
    "우리는 오히려 더 깊이 파고듭니다.",
    "",
    "SURD Lab은 도시의 복잡함을 단순하게 만들려 하지 않습니다.",
    "그 안에서 더 나은 답을 찾아갑니다."
  ],

  // Key Statistics
  stats: [
    { labelKr: "연구원 수", labelEn: "Members", value: "58", icon: "users" },
    { labelKr: "발표 논문", labelEn: "Publications", value: "126", icon: "file-text" },
    { labelKr: "수행 완료 프로젝트", labelEn: "COMPLETED PROJECTS", value: "24", icon: "briefcase" },
    { labelKr: "설립 연도", labelEn: "Year Founded", value: "2003", icon: "calendar" }
  ],

  // About Section
  about: {
    philosophyKr: "SURD Lab은 급변하는 도시 환경 속에서 발생하는 주택, 인프라, 지역 쇠퇴 문제를 해결하기 위해 스마트 기술과 데이터 기반 분석을 적용합니다. 우리는 단순히 물리적인 정비를 넘어, 도시 구성원들의 삶의 질을 높이고 환경적 지속가능성을 확보할 수 있는 정책과 기술적 솔루션을 함께 고민합니다.",
    philosophyEn: "SURD Lab applies smart technology and data-driven analysis to resolve housing, infrastructure, and urban decline issues occurring in rapidly changing urban environments. Beyond mere physical renewal, we explore policy and technical solutions that enhance the quality of life for urban residents and secure environmental sustainability.",
    piWelcomeKr: "안녕하세요. 스마트도시주택정비및개발연구실(SURD Lab)의 지도교수 남진입니다. 우리 연구실은 복잡하고 다차원적인 도시 문제를 무리수(Surd)처럼 있는 그대로 받아들이고, 실질적이고 과학적인 분석을 통해 해답을 모색하는 학문 공동체입니다. 스마트 기술, 빅데이터, 공간 통계를 활용하여 더 살기 좋고 포용적인 도시의 미래를 함께 그려나갈 인재들을 환영합니다.",
    piWelcomeEn: "Welcome to the Smart Urban Renewal & Development Laboratory (SURD Lab). I am Professor Jin Nam. Our lab is an academic community that embraces complex, multidimensional urban issues as they are—much like irrational numbers (surds)—and seeks practical, scientific solutions through rigorous analysis. We welcome creative minds to join us in shaping a better, more inclusive urban future using smart technologies, big data, and spatial statistics.",
    piPhoto: "" // Empty to trigger the placeholder
  },

  // Research Areas
  research: {
    areas: [
      {
        id: "Renewal",
        titleKr: "도시개발 및 도시정비",
        titleEn: "Urban Renewal & Reconstruction",
        shortDescKr: "기성시가지의 지속가능한 개발·정비 전략과 실행방안",
        shortDescEn: "Sustainable development and renewal strategies for established urban areas.",
        descKr: "국내외 대도시의 기성시가지를 대상으로 도시개발과 도시정비의 전략, 계획기법, 금융구조 및 사업성을 폭넓게 연구합니다. 재개발·재건축을 비롯한 다양한 정비·개발사업의 제도와 추진 과정을 분석하고, 물리적 환경뿐만 아니라 지역의 사회·경제적 여건을 종합적으로 개선할 수 있는 실행방안을 모색합니다.",
        descEn: "Moving away from traditional total-demolition redevelopment, we establish tailored renewal strategies for aged residential areas using big data and smart sensors. We conduct research on automated building degradation diagnosis, optimization of public facility distribution, and housing performance upgrades resilient to climate change."
      },
      {
        id: "Housing Market",
        titleKr: "주택시장 분석 및 주택정책",
        titleEn: "Housing Market Analysis & Housing Policy",
        shortDescKr: "주택시장의 작동 원리와 주거문제를 분석하고 정책적 대안 모색",
        shortDescEn: "Analyzing the functioning principles of the housing market and addressing housing issues to develop policy alternatives.",
        descKr: "주택시장의 수요와 공급, 주거선택과 이동, 주택가격과 임대시장의 작동 원리를 이론 및 실증분석을 통해 연구합니다. 주택시장 변화와 다양한 주거문제를 진단하고, 주거 안정성과 정책의 실효성을 높이기 위한 주택정책의 방향을 모색합니다.",
        descEn: "We conduct theoretical and empirical research on housing supply and demand, residential choice and mobility, housing prices, and rental market dynamics. Our research diagnoses changes and challenges in housing markets and explores policies that promote residential stability and improve policy effectiveness"
      },
      {
        id: "Urban and Housing Development Analysis",
        titleKr: "도시·주택 개발사업 분석",
        titleEn: "Urban and Housing Development Analysis",
        shortDescKr: "도시·주택 개발사업의 계획, 금융구조 및 사업성 종합적 분석 ",
        shortDescEn: "Analyzing urban and housing development projects in terms of planning, financial structure, and feasibility.",
        descKr: "도시 및 주택 개발사업의 계획과 실행 과정에서 요구되는 사업성 분석, 금융기법, 제도 및 정책을 연구합니다. 시장성과 공공성을 함께 고려하여 실제 개발사업과 정책 결정에 활용할 수 있는 분석체계와 실행전략을 제시하고자 합니다.",
        descEn: "We study project feasibility, financing methods, institutions, and policies involved in the planning and implementation of urban and housing development projects. By considering both market viability and public value, we aim to develop analytical frameworks and implementation strategies applicable to real-world projects and policy decisions."
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
      image: "./assets/jin_nam.jpg",
      email: "jnam@uos.ac.kr",
      office: "Professor Nam Jin's Office: Baebong Hall, Room 301 / 배봉관 301호",
      bioKr: "남진 교수는 서울시립대학교 도시공학과를 졸업하고 동 대학원에서 석사, 일본 요코하마국립대학(Yokohama National University)에서 도시계획학 박사 학위를 취득하였습니다. 서울시립대학교 도시공학과 교수로 재직 중이며, 도시정비 및 개발, 주택시장, 스마트시티 분야에서 다수의 핵심 국책 연구 과제를 수행하고 있습니다.",
      bioEn: "Prof. Jin Nam received his B.S. in Urban Engineering from the University of Seoul, M.S. from University of Seoul, and Ph.D. in Urban Planning from the University of Yokohama. He is a professor at the University of Seoul, actively conducting major national R&D projects focusing on smart urban renewal, housing redevelopment policies, and spatial economics.",
      education: [
        "일본 요코하마국립대학 (Yokohama National University) 도시계획학 박사 (Ph.D. in Urban Planning)",
        "서울시립대학교 대학원 도시공학 석사 (M.S. in Urban Planning and Design, UOS)",
        "서울시립대학교 도시공학과 학사 (B.S. in Urban Planning and Design, UOS)",
        "국토교통부 도시재생 특별위원회 위원 (National Urban Regeneration Committee Member, MOLIT)",
        "서울특별시 도시계획위원회 위원 (Seoul Metropolitan City Planning Committee Member)",
        "스마트 도시정비 및 주택 정비 재생 분야 주요 국책 과제 총괄 책임자"
      ]
    },
    // TODO: 추후 실제 소개문 및 약력 정보로 교체 필요
    researchProfessor: {
      nameKr: "김진하 교수",
      nameEn: "Prof. Jinha Kim",
      initials: "JK",
      roleKr: "연구교수",
      roleEn: "Research Professor",
      image: "",
      email: "k_jinha@uos.ac.kr",
      office: "Baebong Hall, Room 315 / 배봉관 315호",
      bioKr: "김진하 교수는 도시와 주택을 둘러싼 다양한 현상을 연구하며, 관련 정책과 실무적 과제에 관심을 두고 있습니다.",
      bioEn: "Prof. Jinha Kim conducts research on a range of issues related to cities and housing, with an interest in relevant policy and practical challenges.",
      education: [
        "서울시립대학교 도시공학과 졸업 (B.S. in Urban Planning and Design, UOS)",
        "동 대학원 석·박사 졸업 (M.S. & Ph.D. in Urban Planning and Design, UOS)"
      ]
    },
    phd: [
      {
        nameKr: "송선영",
        nameEn: "Seonyeong Song",
        roleKr: "박사과정 (졸업)",
        roleEn: "Ph.D.",
        type: "full-time"
      },
      {
        nameKr: "이정현",
        nameEn: "Junghyun Lee",
        roleKr: "박사과정 (졸업)",
        roleEn: "Ph.D.",
        type: "full-time"
      },
      {
        nameKr: "김은광",
        nameEn: "Eunkwang Kim",
        roleKr: "박사과정 (수료)",
        roleEn: "Ph.D. Candidate",
        type: "full-time"
      },
      {
        nameKr: "이이주",
        nameEn: "Iiju Lee",
        roleKr: "박사과정 (수료)",
        roleEn: "Ph.D. candidate",
        type: "full-time"
      },
      {
        nameKr: "권영수",
        nameEn: "Youngsoo Kwon",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "full-time"
      },
      {
        nameKr: "최우진",
        nameEn: "Woojin Choi",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time"
      },
      {
        nameKr: "김태선",
        nameEn: "Taeseon Kim",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time"
      },
      {
        nameKr: "김기홍",
        nameEn: "Kihong Kim",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: "LH 도시재생사업단"
      },
      {
        nameKr: "이일우",
        nameEn: "Ilwoo Lee",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: "국민권익위원회"
      },
      {
        nameKr: "김재진",
        nameEn: "Jaejin Kim",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: "가람감정평가법인"
      },
      {
        nameKr: "이재문",
        nameEn: "Jaemoon Lee",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: "가람감정평가법인"
      },
      {
        nameKr: "박병옥",
        nameEn: "Byeongok Park",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: "(주)하우드엔지니어링"
      },
      {
        nameKr: "김창규",
        nameEn: "Changkyu Kim",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: "서울특별시 도시계획국"
      },
      {
        nameKr: "김진우",
        nameEn: "Jinwoo Kim",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "송기욱",
        nameEn: "Kiwook Song",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: "(주)젠스타메이트"
      },
      {
        nameKr: "민혜숙",
        nameEn: "Hyesook Min",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: "한국자산관리공사(KAMCO)"
      },
      {
        nameKr: "박민수",
        nameEn: "Minsoo Park",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: "(주)감정평가법인 이산"
      },
      {
        nameKr: "강대만",
        nameEn: "Daeman Kang",
        roleKr: "박사과정 (수료)",
        roleEn: "Ph.D. Candidate",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "송정미",
        nameEn: "Jungmi Song",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "이은숙",
        nameEn: "Eunsook Lee",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "김현철",
        nameEn: "Hyeoncheol Kim",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "안준영",
        nameEn: "Junyeong Ahn",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "김요한",
        nameEn: "Yohan Kim",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "류준영",
        nameEn: "Junyeong Ryu",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "서윤정",
        nameEn: "Yoonjeong Seo",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "심재욱",
        nameEn: "Jaewook Shim",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "이다원",
        nameEn: "Dawon Lee",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "김희진",
        nameEn: "Heejin Kim",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "윤혜림",
        nameEn: "Hyerim Yoon",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "송경일",
        nameEn: "Kyeongil Song",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "박미현",
        nameEn: "Mihyeon Park",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "고종환",
        nameEn: "Jongwhan Ko",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "류호덕",
        nameEn: "Hodeok Ryu",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: "나우동인건축사사무소"
      },
      {
        nameKr: "원종혁",
        nameEn: "Jonghyeok Won",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "김혜민",
        nameEn: "Hyemin Kim",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: "법무법인 송천"
      },
      {
        nameKr: "김정구",
        nameEn: "Jeonggu Kim",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "김선정",
        nameEn: "Seonjeong Kim",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "정현중",
        nameEn: "Hyeonjung Chung",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "김권일",
        nameEn: "Kwonil Kim",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "류인정",
        nameEn: "Injeong Ryu",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: "(주)도시류"
      },
      {
        nameKr: "박동진",
        nameEn: "Dongjin Park",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "이수빈",
        nameEn: "Subin Lee",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "홍석기",
        nameEn: "Seokgi Hong",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: "앤더스 엔지니어링, 도시계획기술사협회 상임이사"
      },
      {
        nameKr: "이민현",
        nameEn: "Minhyeon Lee",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: ""
      },
      {
        nameKr: "김영관",
        nameEn: "Yeongkwan Kim",
        roleKr: "박사과정",
        roleEn: "Ph.D. Student",
        type: "part-time",
        affiliation: "경호엔지니어링"
      }
    ],
    masters: [
      {
        nameKr: "이은지",
        nameEn: "Eunji Lee",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        type: "full-time"
      },
      {
        nameKr: "이채은",
        nameEn: "Chaeeun Lee",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        type: "full-time"
      },
      {
        nameKr: "정윤재",
        nameEn: "Yoonjae Jung",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        type: "full-time"
      },
      {
        nameKr: "황해운",
        nameEn: "Haewoon Hwang",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        type: "full-time"
      },
      {
        nameKr: "박서현",
        nameEn: "Seohyun Park",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        type: "full-time"
      },
      {
        nameKr: "신혜형",
        nameEn: "Hyehyung Shin",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        type: "full-time"
      },
      {
        nameKr: "윤호철",
        nameEn: "Hocheol Yun",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        type: "full-time"
      },
      {
        nameKr: "김지우",
        nameEn: "Jiwoo Kim",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        type: "full-time"
      },
      {
        nameKr: "이진영",
        nameEn: "Jinyoung Lee",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        type: "part-time"
      },
      {
        nameKr: "오봉석",
        nameEn: "Bongseok Oh",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        type: "part-time"
      },
      {
        nameKr: "진수미",
        nameEn: "Soomi Jin",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        type: "part-time"
      },
      {
        nameKr: "이정훈",
        nameEn: "Jeonghoon Lee",
        roleKr: "석사과정",
        roleEn: "M.S. Student",
        type: "part-time",
        affiliation: ""
      }
    ]
    /*
    비전일제 연구원(Part-time Researchers) 추가 방법:
    masters 또는 phd 배열 내에 아래의 형식으로 연구원 데이터 객체를 추가하시면
    자동으로 Members 페이지의 "비전일제 연구원" 섹션에 분리 렌더링됩니다.
    소속(affiliation) 정보가 기재된 경우에만 소속 열이 화면에 표시됩니다.

    예시:
    {
      nameKr: "홍길동",
      nameEn: "Gildong Hong",
      roleKr: "석사과정",
      roleEn: "M.S. Student",
      type: "part-time", // 반드시 소문자 "part-time"으로 기입
      affiliation: "서울도시공사" // 선택 입력 (소속 기관명)
    }
    */
  },

  // Alumni Section
  alumni: [
    {
      nameKr: "한지혜",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2019"
        },
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2024"
        }
      ]
    },
    {
      nameKr: "정재훈",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2019"
        },
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2026"
        }
      ]
    },
    {
      nameKr: "이정현",
      nameEn: "",
      currentMember: true,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2020"
        },
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2026"
        }
      ]
    },
    {
      nameKr: "권영필",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2017"
        },
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2024"
        }
      ]
    },
    {
      nameKr: "류용상",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2009"
        },
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2021"
        }
      ]
    },
    {
      nameKr: "이지현",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        },
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2021"
        }
      ]
    },
    {
      nameKr: "송선영",
      nameEn: "",
      currentMember: true,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2026"
        }
      ]
    },
    {
      nameKr: "이지현",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2011"
        }
      ]
    },
    {
      nameKr: "송정미",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2026"
        }
      ]
    },
    {
      nameKr: "김창규",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2026"
        }
      ]
    },
    {
      nameKr: "천사라",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2011"
        }
      ]
    },
    {
      nameKr: "이광석",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2025"
        }
      ]
    },
    {
      nameKr: "노영언",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2025"
        }
      ]
    },
    {
      nameKr: "이해인",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2025"
        }
      ]
    },
    {
      nameKr: "김경화",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2025"
        }
      ]
    },
    {
      nameKr: "노윤아",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2025"
        }
      ]
    },
    {
      nameKr: "신수경",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2008"
        }
      ]
    },
    {
      nameKr: "신수임",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2008"
        }
      ]
    },
    {
      nameKr: "박초롱",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2025"
        }
      ]
    },
    {
      nameKr: "장단위(張團偉)",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2024"
        }
      ]
    },
    {
      nameKr: "최영운",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2024"
        }
      ]
    },
    {
      nameKr: "나기범",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2024"
        }
      ]
    },
    {
      nameKr: "장진하",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2024"
        }
      ]
    },
    {
      nameKr: "이재일",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2024"
        }
      ]
    },
    {
      nameKr: "유수민",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2024"
        }
      ]
    },
    {
      nameKr: "안애랑",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2024"
        }
      ]
    },
    {
      nameKr: "조성훈",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2024"
        }
      ]
    },
    {
      nameKr: "김은재",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2024"
        }
      ]
    },
    {
      nameKr: "조민주",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2024"
        }
      ]
    },
    {
      nameKr: "정홍",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2023"
        }
      ]
    },
    {
      nameKr: "한영민",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2023"
        }
      ]
    },
    {
      nameKr: "김민영",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2023"
        }
      ]
    },
    {
      nameKr: "김민지",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2023"
        }
      ]
    },
    {
      nameKr: "김은광",
      nameEn: "",
      currentMember: true,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2023"
        }
      ]
    },
    {
      nameKr: "안종현",
      nameEn: "",
      currentMember: true,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2010"
        }
      ]
    },
    {
      nameKr: "김상우",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2023"
        }
      ]
    },
    {
      nameKr: "김성휘",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2023"
        }
      ]
    },
    {
      nameKr: "정대혁",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2023"
        }
      ]
    },
    {
      nameKr: "주수빈",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2023"
        }
      ]
    },
    {
      nameKr: "오윤정",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2023"
        }
      ]
    },
    {
      nameKr: "오문현",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "정지우",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2023"
        }
      ]
    },
    {
      nameKr: "김도윤",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2023"
        }
      ]
    },
    {
      nameKr: "박민정",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "홍선기",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "성수연",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "손수민",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "권재연",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "이이주",
      nameEn: "",
      currentMember: true,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "이종원",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2011"
        }
      ]
    },
    {
      nameKr: "이태영",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "안성재",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "조웅전",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "Bo DENG",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "김선정",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "이재국",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "Reach RIM",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "문규리",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "김나래",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2022"
        }
      ]
    },
    {
      nameKr: "김요한",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2021"
        }
      ]
    },
    {
      nameKr: "이수빈",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2021"
        }
      ]
    },
    {
      nameKr: "이수호",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2010"
        }
      ]
    },
    {
      nameKr: "김지연",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2021"
        }
      ]
    },
    {
      nameKr: "박인숙",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2021"
        }
      ]
    },
    {
      nameKr: "장제환",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2021"
        }
      ]
    },
    {
      nameKr: "김주영",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2020"
        }
      ]
    },
    {
      nameKr: "이다원",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2020"
        }
      ]
    },
    {
      nameKr: "허정문",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2020"
        }
      ]
    },
    {
      nameKr: "정황호",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2010"
        }
      ]
    },
    {
      nameKr: "박미현",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2019"
        }
      ]
    },
    {
      nameKr: "강대만",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2018"
        }
      ]
    },
    {
      nameKr: "정필립",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2019"
        }
      ]
    },
    {
      nameKr: "남우림",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2019"
        }
      ]
    },
    {
      nameKr: "성진욱",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2019"
        }
      ]
    },
    {
      nameKr: "장하림",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2019"
        }
      ]
    },
    {
      nameKr: "이하연",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2018"
        }
      ]
    },
    {
      nameKr: "양만식",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2018"
        }
      ]
    },
    {
      nameKr: "장태현",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2018"
        }
      ]
    },
    {
      nameKr: "김사인",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2018"
        }
      ]
    },
    {
      nameKr: "전근철",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2018"
        }
      ]
    },
    {
      nameKr: "이유진",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2017"
        }
      ]
    },
    {
      nameKr: "이윤상",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2014"
        }
      ]
    },
    {
      nameKr: "심보영",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2017"
        }
      ]
    },
    {
      nameKr: "박지현",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2017"
        }
      ]
    },
    {
      nameKr: "정희종",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2017"
        }
      ]
    },
    {
      nameKr: "김상훈",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2016"
        }
      ]
    },
    {
      nameKr: "이선영",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2016"
        }
      ]
    },
    {
      nameKr: "박교관",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2015"
        }
      ]
    },
    {
      nameKr: "홍영주",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2014"
        }
      ]
    },
    {
      nameKr: "윤혜림",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2014"
        }
      ]
    },
    {
      nameKr: "김수연",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "류준영",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "노혜진",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "강분선",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "손종효",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "김희진",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "윤보현",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "김정기",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "서용준",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "이병룡",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "김건영",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "임인구",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "배병우",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "도종원",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2013"
        }
      ]
    },
    {
      nameKr: "정성국",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2020"
        }
      ]
    },
    {
      nameKr: "이용훈",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2012"
        }
      ]
    },
    {
      nameKr: "심진범",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2012"
        }
      ]
    },
    {
      nameKr: "김현태",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2012"
        }
      ]
    },
    {
      nameKr: "정주석",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2012"
        }
      ]
    },
    {
      nameKr: "복선영",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2012"
        }
      ]
    },
    {
      nameKr: "김판섭",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2012"
        }
      ]
    },
    {
      nameKr: "박정훈",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2012"
        }
      ]
    },
    {
      nameKr: "김영배",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2012"
        }
      ]
    },
    {
      nameKr: "신은진",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2012"
        }
      ]
    },
    {
      nameKr: "최은선",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2012"
        }
      ]
    },
    {
      nameKr: "신철호",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2011"
        }
      ]
    },
    {
      nameKr: "이진영",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2011"
        }
      ]
    },
    {
      nameKr: "원종석",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2015"
        }
      ]
    },
    {
      nameKr: "김용배",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2011"
        }
      ]
    },
    {
      nameKr: "김만호",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2011"
        }
      ]
    },
    {
      nameKr: "배명은",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2011"
        }
      ]
    },
    {
      nameKr: "조영국",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2011"
        }
      ]
    },
    {
      nameKr: "윤병훈",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2011"
        },
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2017"
        }
      ]
    },
    {
      nameKr: "서귀동",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2009"
        }
      ]
    },
    {
      nameKr: "김현정",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2009"
        }
      ]
    },
    {
      nameKr: "노정대",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2009"
        }
      ]
    },
    {
      nameKr: "조민중",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2009"
        }
      ]
    },
    {
      nameKr: "신미경",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2009"
        }
      ]
    },
    {
      nameKr: "신미림",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2011"
        }
      ]
    },
    {
      nameKr: "유명소",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2009"
        },
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2017"
        }
      ]
    },
    {
      nameKr: "어유라",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2009"
        }
      ]
    },
    {
      nameKr: "이정환",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2008"
        }
      ]
    },
    {
      nameKr: "김진호",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2009"
        }
      ]
    },
    {
      nameKr: "박재언",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2009"
        }
      ]
    },
    {
      nameKr: "이상용",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2008"
        }
      ]
    },
    {
      nameKr: "이남석",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2018"
        }
      ]
    },
    {
      nameKr: "정순구",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2008"
        }
      ]
    },
    {
      nameKr: "고경곤",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2008"
        }
      ]
    },
    {
      nameKr: "김재진",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2008"
        }
      ]
    },
    {
      nameKr: "강원준",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2008"
        }
      ]
    },
    {
      nameKr: "문희정",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2005"
        }
      ]
    },
    {
      nameKr: "강세진",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2007"
        }
      ]
    },
    {
      nameKr: "한종훈",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2016"
        }
      ]
    },
    {
      nameKr: "송윤선",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2007"
        }
      ]
    },
    {
      nameKr: "박수빈",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2016"
        }
      ]
    },
    {
      nameKr: "오형인",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2015"
        }
      ]
    },
    {
      nameKr: "전혜진",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2015"
        }
      ]
    },
    {
      nameKr: "박관우",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2016"
        }
      ]
    },
    {
      nameKr: "최수연",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2021"
        }
      ]
    },
    {
      nameKr: "석채원",
      nameEn: "",
      currentMember: false,
      degrees: [
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2026"
        }
      ]
    },
    {
      nameKr: "김진하",
      nameEn: "",
      currentMember: true,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2013"
        },
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2008"
        }
      ]
    },
    {
      nameKr: "김성호",
      nameEn: "",
      currentMember: true,
      degrees: [
        {
          degreeKr: "공학박사",
          degreeEn: "Ph.D.",
          gradYear: "2026"
        },
        {
          degreeKr: "공학석사",
          degreeEn: "M.S.",
          gradYear: "2006"
        }
      ]
    }
  ],

  // News Section, award/paper/event
  news: [
    {
      date: "2026.08.21",
      category: "Event",
      titleKr: "2026 후기 학위수여식 개최 ",
      titleEn: "Graduation Ceremony for the Second Half of 2026",
      descKr: "김성호(박사), 송선영(박사), 석채원(석사), 김지우(학사) 학생이 학위를 수여받았습니다.",
      descEn: "Students Kim Seong-ho (Ph.D.), Song Sun-young (Ph.D.), Seok Chae-won (M.S.), and Kim Ji-woo (B.S.) received their degrees."
    },
    {
      date: "2026.08.18",
      category: "Event",
      titleKr: "이이주 박사수료 외 4명, ICAPPS에서 논문 발표 및 우수논문상 수상",
      titleEn: "ICAPPS 2026 Participation and Paper Presentation by Dr. Lee and 4 others",
      descKr: "인도네시아 자카르타에서 개최된 ICAPPS 2026에서 이이주 박사수료(우수논문상), 이채은, 이은지, 정윤재, 황해운 학생이 논문을 발표했습니다.",
      descEn: "Dr. Lee and 4 others presented papers at ICAPPS 2026 held in Jakarta, Indonesia."
    },
    {
      date: "2026.05.16",
      category: "Award",
      titleKr: "이채은 석사과정, 한국도시부동산학회 춘계학술대회 우수논문상 수상",
      titleEn: "Master's Student Chaeun Lee Receives Best Paper Award at KUREA Spring Conference",
      descKr: "2026년 한국도시부동산학회 춘계학술대회에서 이채은 석사과정 학생이 우수논문상을 수상했습니다.",
      descEn: "Master's student Chaeun Lee received the Best Paper Award at the KUREA Spring Conference held at Sungkyunkwan University Natural Science Campus."
    },
    {
      date: "2026.03.02",
      category: "Event",
      titleKr: "2026학년도 1학기 개강 및 신입생 환영회",
      titleEn: "Spring 2026 Semester Kickoff & Welcome dinner",
      descKr: "새로 입학한 석사과정 연구원들을 환영하고 이번 학기 진행 프로젝트 마일스톤을 점검하는 랩 세미나 및 친목 모임을 진행하였습니다.",
      descEn: "Held our kickoff seminar and welcome dinner to greet incoming master's students and review milestones for research projects this semester."
    }
  ],

  // Interviews and Columns Section, column/interview
  interviews: [
     {
       date: "2024.12.9",
       type: "column", // or "column"
       titleKr: "서울역, 새로운 미래를 위한 대전환의 시작",
       titleEn: "Seoul Station, the Beginning Point of Conversion for New Future",
       description: "서울역을 해외 교통 허브와 비교하고, 서울역 일대 대개조 사업이 나아가야 할 방향을 제시합니다.",
       source: "머니투데이",
       url: "https://www.mt.co.kr/opinion/2024/12/09/2024120811275032026"
     },
     {
       date: "2024.7.11",
       type: "column", // or "column"
       titleKr: "주민-행정-전문가 협력 신통기획, 정비사업 새 열길",
       titleEn: "",
       description: "신통기획(신속통합기획)의 취지에 공감하고, 공공과 민간의 상호 협력적 파트너쉽의 중요성을 강조합니다.",
       source: "동아일보",
       url: "https://www.donga.com/news/Opinion/article/all/20240711/125894044/2"
     },
     {
       date: "2016.9.23",
       type: "interview", // or "column"
       titleKr: "도시재생으로 보는 도시의 미래",
       titleEn: "Foreseeing Futere of Cities with Urban Regeneration",
       description: "성수동 일대 총괄계획을 맡은 남진 교수님의 도시재생 관련 법률과 사례에 관한 인터뷰입니다.",
       source: "건축신문",
       url: "https://architecture-newspaper.com/vol19-chpt09/"
     }
    // {
    //   date: "YYYY.MM.DD",
    //   type: "interview", // or "column"
    //   titleKr: "",
    //   titleEn: "",
    //   description: "",
    //   source: "",
    //   url: ""
    // }
  ],

  // Contact Section
  contact: {
    email: "jnam@uos.ac.kr",
    tel: "02-6490-5519",
    officeKr: "서울특별시 동대문구 서울시립대로 163, 서울시립대학교 배봉관 315호",
    officeEn: "Baebong Hall, Room 315, University of Seoul, 163 Seoulsiripdae-ro, Dongdaemun-gu, Seoul, Republic of Korea",
    directionsKr: "지하철 1호선 청량리역 3번 출구 또는 경의중앙선 회기역 2번 출구에서 서울시립대학교 방면으로 오시면 편리합니다. 버스를 이용하시는 경우 서울시립대 정문 정류장(ID: 06-188)에서 하차하신 후 배봉관 315호로 오시면 편리합니다.",
    directionsEn: "A short walk from Cheongnyangni Station (Line 1, Exit 3) or Hoegi Station (Gyeongui-Jungang Line, Exit 2) towards the University of Seoul. If traveling by bus, please get off at the University of Seoul Main Gate stop (ID: 06-188) and proceed to Baebong Hall, Room 315."
  }
};
