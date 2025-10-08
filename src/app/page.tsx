import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { stories } from "@/data/stories";

export default function Home() {
  const featuredStories = stories.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          송영일
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          일러스트레이터·삽화가·그림작가
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          로컬의 이야기를 그림과 디자인씽킹으로 엮습니다.
          <br />
          한양대 사회혁신융합전공 겸임교수 / MYSC 디자인센터장
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/story">스토리 보기</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">소개 보기</Link>
          </Button>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">핵심 분야</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "디자인씽킹", description: "사용자 중심의 문제 해결 방법론" },
            { title: "비주얼씽킹", description: "시각적 사고와 표현을 통한 소통" },
            { title: "시스템씽킹", description: "복잡한 문제의 구조적 이해" },
            { title: "로컬 혁신", description: "지역 기반의 지속가능한 변화" }
          ].map((area) => (
            <Card key={area.title} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{area.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">주요 프로젝트</h2>
          <Button asChild variant="outline">
            <Link href="/story">모든 스토리 보기</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStories.map((story) => (
            <Card key={story.slug} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{story.location}</Badge>
                  <Badge variant={story.status === "ongoing" ? "default" : "outline"}>
                    {story.status === "ongoing" ? "진행중" : story.status === "done" ? "완료" : "계획"}
                  </Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {story.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {story.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.focusAreas.map((area) => (
                    <Badge key={area} variant="outline" className="text-xs">
                      {area}
                    </Badge>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link href={`/story/${story.slug}`}>자세히 보기</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}