export interface Story {
  slug: string;                // URL path
  title: string;               // 공개 타이틀
  location: string;            // 지역(도시/군 단위)
  timeframe?: string;          // 기간(연도 또는 연월 범위, 미확실 시 'TBD')
  roles: string[];             // 본인 역할
  focusAreas: string[];        // 디자인씽킹/비주얼씽킹/시스템씽킹/LSP 등
  partners?: string[];         // 파트너/기관 (공개된 명칭만)
  summary: string;             // 요약(150~200자)
  methods: string[];           // 사용한 방법론
  process: { phase: string; activities: string[] }[];  // 프로세스 단계별 활동
  outcomes?: string[];         // 결과(사실만)
  insights?: string[];         // 인사이트(주관적이되 사실에 기반)
  media?: { src: string; alt: string; caption?: string }[];
  seo?: { title?: string; description?: string; keywords?: string[] };
  status: "done" | "ongoing" | "planned";
}

