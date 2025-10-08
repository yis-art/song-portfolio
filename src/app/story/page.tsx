import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { stories } from "@/data/stories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "스토리",
  description: "지역과 함께 만든 프로젝트들의 이야기를 담았습니다. 태백, 청도, 제주 등 다양한 지역에서의 디자인씽킹과 로컬 혁신 프로젝트를 확인해보세요.",
};

export default function Story() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          스토리
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          지역과 함께 만든 프로젝트들의 이야기를 담았습니다.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {["전체", "진행중", "완료", "계획"].map((status) => (
            <Button
              key={status}
              variant={status === "전체" ? "default" : "outline"}
              size="sm"
            >
              {status}
            </Button>
          ))}
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
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
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {story.timeframe}
                  </span>
                  <Button asChild size="sm">
                    <Link href={`/story/${story.slug}`}>자세히 보기</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
