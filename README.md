# 송영일 포트폴리오 웹사이트

일러스트레이터·삽화가·그림작가 송영일의 포트폴리오 웹사이트입니다.

## 🎨 소개

- **역할**: 일러스트레이터·삽화가·그림작가
- **직책**: 한양대 사회혁신융합전공 겸임교수 / MYSC 디자인센터장
- **핵심 분야**: 디자인씽킹, 비주얼씽킹, 시스템씽킹, 로컬 혁신

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Theming**: next-themes (다크 모드 지원)
- **Language**: TypeScript
- **Deployment**: Vercel (권장)

## ✨ 주요 기능

### 🌙 다크 모드
- 시스템 설정 자동 감지
- 수동 테마 전환 가능
- 부드러운 전환 애니메이션

### 📱 반응형 디자인
- 모바일, 태블릿, 데스크톱 최적화
- 터치 친화적 인터페이스

### 🔍 SEO 최적화
- 각 페이지별 메타데이터 설정
- Open Graph 지원
- 구조화된 데이터

### 📖 스토리 페이지
- 프로젝트별 상세 정보
- 진행 상태 표시
- 필터링 기능

## 🛠️ 개발 환경 설정

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### 환경 변수 설정

`.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── about/             # 소개 페이지
│   ├── contact/           # 연락 페이지
│   ├── story/             # 스토리 페이지
│   │   └── [slug]/        # 개별 스토리 페이지
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 홈페이지
├── components/            # 재사용 가능한 컴포넌트
│   ├── ui/               # shadcn/ui 컴포넌트
│   ├── header.tsx        # 헤더 컴포넌트
│   ├── footer.tsx        # 푸터 컴포넌트
│   ├── theme-provider.tsx # 테마 프로바이더
│   └── theme-toggle.tsx  # 테마 토글 버튼
├── data/                 # 정적 데이터
│   └── stories.ts        # 스토리 데이터
├── lib/                  # 유틸리티 함수
│   ├── metadata.ts       # 메타데이터 생성
│   └── utils.ts          # 공통 유틸리티
└── types/                # TypeScript 타입 정의
    └── story.ts          # 스토리 타입
```

## 🎨 디자인 시스템

### 색상 팔레트
- **라이트 모드**: 따뜻한 크림 배경 (#FFF8F0)
- **다크 모드**: 깊은 갈색 배경 (#0F0E0C)
- **포인트 컬러**: 따뜻한 오렌지 (#E7A977)
- **서브 컬러**: 파스텔 그린 (#CDE0C2)

### 타이포그래피
- **제목**: Geist Sans (Bold)
- **본문**: Geist Sans (Regular)
- **코드**: Geist Mono

## 📝 콘텐츠 관리

### 스토리 추가
`src/data/stories.ts` 파일에서 새로운 스토리를 추가할 수 있습니다.

```typescript
{
  slug: "new-story",
  title: "새로운 스토리",
  location: "지역",
  // ... 기타 필드
}
```

### 메타데이터 수정
`src/lib/metadata.ts` 파일에서 사이트 전체의 메타데이터를 수정할 수 있습니다.

## 🚀 배포

### Vercel 배포 (권장)
1. GitHub 저장소에 코드 푸시
2. Vercel에서 프로젝트 연결
3. 자동 배포 설정

### 기타 플랫폼
- Netlify
- AWS Amplify
- Railway

## 📄 라이선스

이 프로젝트는 개인 포트폴리오용으로 제작되었습니다.

## 🤝 기여

버그 리포트나 기능 제안은 이슈로 등록해 주세요.

---

**연락처**: contact@example.com