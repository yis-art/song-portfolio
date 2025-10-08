import { Metadata } from "next";
import { Story } from "@/types/story";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const defaultMetadata: Metadata = {
  title: {
    default: "송영일 포트폴리오",
    template: "%s | 송영일 포트폴리오",
  },
  description: "일러스트레이터·삽화가·그림작가 / 한양대 사회혁신융합전공 겸임교수 / MYSC 디자인센터장. 로컬의 이야기를 그림과 디자인씽킹으로 엮습니다.",
  keywords: [
    "송영일",
    "일러스트레이터",
    "삽화가",
    "그림작가",
    "디자인씽킹",
    "비주얼씽킹",
    "시스템씽킹",
    "로컬 혁신",
    "한양대",
    "MYSC",
    "사회혁신"
  ],
  authors: [{ name: "송영일" }],
  creator: "송영일",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: baseUrl,
    title: "송영일 포트폴리오",
    description: "일러스트레이터·삽화가·그림작가 / 한양대 사회혁신융합전공 겸임교수 / MYSC 디자인센터장",
    siteName: "송영일 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "송영일 포트폴리오",
    description: "일러스트레이터·삽화가·그림작가 / 한양대 사회혁신융합전공 겸임교수 / MYSC 디자인센터장",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function generateStoryMetadata(story: Story): Metadata {
  return {
    title: story.seo?.title || story.title,
    description: story.seo?.description || story.summary,
    keywords: story.seo?.keywords || [
      ...story.focusAreas,
      story.location,
      "송영일",
      "디자인씽킹",
      "로컬 혁신"
    ],
    openGraph: {
      title: story.title,
      description: story.summary,
      url: `${baseUrl}/story/${story.slug}`,
      type: "article",
      publishedTime: story.timeframe,
      authors: ["송영일"],
      tags: story.focusAreas,
    },
    twitter: {
      card: "summary_large_image",
      title: story.title,
      description: story.summary,
    },
  };
}
