import { Story } from "@/types/story";

export const stories: Story[] = [
  {
    slug: "taebaek-mumu-ranch-research",
    title: "태백 무무목장에서 시작된 배움의 씨앗",
    location: "강원 태백",
    timeframe: "2024–2025 (현장 탐색)",
    roles: ["일러스트레이터", "디자인씽킹 퍼실리테이터(스코핑)"],
    focusAreas: ["디자인씽킹", "비주얼씽킹", "로컬 혁신"],
    partners: ["무무목장"],
    summary: "태백의 무무목장에서 현장 리서치를 진행하며, 지역의 실제 맥락과 배움의 가능성을 스케치로 기록했습니다. 커다란 말과 소, 그리고 사람들의 생활을 가까이서 관찰하며, '지역에서 배우는 학교'에 대한 스코핑을 시작했습니다.",
    methods: ["현장 관찰", "비주얼 노트", "경험 리플렉션"],
    process: [
      {
        phase: "현장 관찰",
        activities: [
          "목장 운영 환경과 생활 동선 관찰",
          "동물과 사람의 상호작용 기록(스케치/메모)"
        ]
      },
      {
        phase: "문제/기회 스코핑",
        activities: [
          "로컬 학습(축산/돌봄/생활기술) 가능성 메모",
          "참여형 학습 모델 아이디어 브레인스토밍"
        ]
      }
    ],
    outcomes: [
      "현장 기반 스케치/노트 아카이브 축적",
      "로컬 학습 모델 초기 가설 도출(내부 문서)"
    ],
    insights: [
      "로컬의 배움은 '일상'과 '일'에서 나온다.",
      "참여형 디자인 과정이 학습 모델 설계의 핵심 실마리."
    ],
    media: [
      { src: "/images/stories/taebaek/memo-01.jpg", alt: "무무목장 현장 스케치", caption: "현장 스케치: 동선과 리듬" }
    ],
    seo: {
      title: "태백 무무목장 리서치 | 송영일 포트폴리오",
      description: "태백 무무목장에서의 현장 관찰과 비주얼씽킹을 바탕으로 로컬 학습 모델을 스코핑한 기록.",
      keywords: ["태백", "무무목장", "디자인씽킹", "현장리서치", "로컬학습"]
    },
    status: "ongoing"
  },
  {
    slug: "cheongdo-local-commons-mushroom-architecture",
    title: "청도 로컬 커먼즈: 버섯처럼 번지는 연결",
    location: "경북 청도",
    timeframe: "2024–2025 (컨셉·JV 진행)",
    roles: ["MYSC 디자인센터장", "프로젝트 디자이너"],
    focusAreas: ["디자인씽킹", "시스템씽킹", "로컬 혁신"],
    partners: ["경북시민재단", "Mushroom Architecture JV"],
    summary: "청도에서 로컬 커먼즈를 주제로 커뮤니티 기반 프로젝트를 진행하고 있습니다. 경북시민재단과 'Mushroom Architecture' JV를 중심으로, 지역의 작은 공간과 사람을 연결하는 디자인 실험을 이어가고 있습니다.",
    methods: ["이해관계자 맵핑", "시스템 맵", "로컬 인터뷰", "프로토타이핑(공간/프로그램)"],
    process: [
      {
        phase: "맥락 파악",
        activities: [
          "이해관계자 및 자원 흐름 시스템 맵 작성",
          "지역 인터뷰 및 커뮤니티 라운드테이블"
        ]
      },
      {
        phase: "아이디어·프로토타이핑",
        activities: [
          "공간/프로그램 소규모 실험",
          "참여형 피드백 루프 설계"
        ]
      }
    ],
    outcomes: [
      "로컬 커먼즈 컨셉 보드(내부 공유)",
      "JV 협업 구조 정립(진행형)"
    ],
    insights: [
      "로컬의 지속성은 '공유 자원'과 '참여 규칙'에서 나온다.",
      "작은 실험이 네트워크를 키우는 가장 안전한 방법."
    ],
    seo: {
      title: "청도 Local Commons | 송영일",
      description: "경북시민재단과 함께하는 청도 로컬 커먼즈 프로젝트. 시스템 관점에서 공간과 사람을 잇는 디자인.",
      keywords: ["청도", "로컬 커먼즈", "시스템씽킹", "경북시민재단"]
    },
    status: "ongoing"
  },
  {
    slug: "sagunsalgoti-living-lab",
    title: "사군살곶이길 Living Lab: 골목에서 배우는 디자인",
    location: "서울",
    timeframe: "2024 (파일럿)",
    roles: ["교육자", "퍼실리테이터", "비주얼 노트테이커"],
    focusAreas: ["디자인씽킹", "비주얼씽킹", "로컬 혁신"],
    partners: ["(대학 연계)", "(골목 상점 네트워크)"],
    summary: "대학생 팀과 골목 상점이 함께 문제를 탐색하고, 팝업 실험으로 작게 연결을 만들었습니다. 관찰–정의–아이디어–프로토타입–테스트의 사이클을 실제 거리에서 수행했습니다.",
    methods: ["현장 관찰", "페르소나/저니맵", "소규모 팝업 실험"],
    process: [
      {
        phase: "관찰·정의",
        activities: ["상점/보행자 관찰", "니즈·페인포인트 도출"]
      },
      {
        phase: "아이디어·실험",
        activities: ["팝업 기획·운영", "피드백 기반 개선"]
      }
    ],
    outcomes: [
      "상점-학생 팀 매칭 실험",
      "로컬 경험 디자인 체크리스트(초안)"
    ],
    insights: [
      "골목에서 배우는 디자인은 '대화의 장'을 만든다.",
      "작은 성공 경험이 참여 동기를 높인다."
    ],
    seo: {
      title: "사군살곶이길 Living Lab | 송영일",
      description: "대학–상점–지역을 잇는 팝업/연계 실험 기록.",
      keywords: ["Living Lab", "사군살곶이길", "디자인씽킹"]
    },
    status: "done"
  },
  {
    slug: "hanyang-community-design-thinking",
    title: "한양대 Community Design Thinking: 지역에서 배우는 수업",
    location: "서울 & 경북",
    timeframe: "2025 (진행)",
    roles: ["겸임교수", "교육 설계자", "퍼실리테이터"],
    focusAreas: ["디자인씽킹", "비주얼씽킹", "로컬 혁신"],
    partners: ["한양대학교 사회혁신융합전공", "경북시민재단(우장한 대표)"],
    summary: "수업 안팎에서 지역과 연결되는 디자인씽킹을 설계합니다. 학생들이 직접 필드와 만나며 문제를 재정의하고, 작게 실험하며, 회고하는 과정을 중시합니다.",
    methods: ["문제정의 워크숍", "현장 리서치", "프로토타입 테스트", "리플렉션"],
    process: [
      {
        phase: "오리엔테이션",
        activities: ["디자인씽킹 프레임 소개", "팀 빌딩"]
      },
      {
        phase: "필드 리서치",
        activities: ["현장 관찰/인터뷰", "인사이트 도출"]
      },
      {
        phase: "실험·리뷰",
        activities: ["소규모 실험", "피드백·회고"]
      }
    ],
    outcomes: [
      "학생 팀별 프로젝트 결과물(내부)",
      "수업용 체크리스트/가이드 정리"
    ],
    insights: [
      "수업의 품질은 '회고 루프 설계'에서 결정된다.",
      "지역 파트너와의 신뢰가 학습 경험을 확장한다."
    ],
    seo: {
      title: "한양대 Community Design Thinking 수업",
      description: "현장 연결형 디자인씽킹 수업 설계와 퍼실리테이션.",
      keywords: ["한양대", "디자인씽킹", "사회혁신"]
    },
    status: "ongoing"
  },
  {
    slug: "cau-c-design-thinking-glocal-innovator",
    title: "중앙대 C-Design Thinking: Glocal Innovator",
    location: "서울",
    timeframe: "TBD",
    roles: ["퍼실리테이터", "교육 설계 지원"],
    focusAreas: ["디자인씽킹"],
    partners: ["중앙대학교"],
    summary: "글로컬 이노베이터 프로그램에서 디자인씽킹 기반의 문제탐색과 아이디어 도출을 지원했습니다.",
    methods: ["문제정의", "아이디어 워크숍"],
    process: [
      {
        phase: "문제탐색",
        activities: ["관찰·인터뷰", "페인포인트 도출"]
      },
      {
        phase: "아이디어",
        activities: ["아이디에이션", "개념 스케치"]
      }
    ],
    outcomes: ["워크숍 산출물(내부)"],
    insights: [
      "현장의 목소리가 아이디어의 깊이를 만든다."
    ],
    seo: {
      title: "중앙대 C-Design Thinking",
      description: "글로컬 이노베이터 프로그램의 디자인씽킹 워크숍 지원.",
      keywords: ["중앙대", "디자인씽킹", "Glocal Innovator"]
    },
    status: "done"
  }
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find(story => story.slug === slug);
}

export function getAllStorySlugs(): string[] {
  return stories.map(story => story.slug);
}

