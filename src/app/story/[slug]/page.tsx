import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getStoryBySlug, getAllStorySlugs } from "@/data/stories";
import { generateStoryMetadata } from "@/lib/metadata";
import { ArrowLeft } from "lucide-react";

interface StoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllStorySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  
  if (!story) {
    return {
      title: "스토리를 찾을 수 없습니다",
    };
  }

  return generateStoryMetadata(story);
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Button asChild variant="ghost" size="sm">
          <Link href="/story" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            스토리 목록으로
          </Link>
        </Button>
      </div>

      {/* Header */}
      <section className="py-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">{story.location}</Badge>
          <Badge variant={story.status === "ongoing" ? "default" : "outline"}>
            {story.status === "ongoing" ? "진행중" : story.status === "done" ? "완료" : "계획"}
          </Badge>
          {story.timeframe && (
            <Badge variant="outline">{story.timeframe}</Badge>
          )}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {story.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl">
          {story.summary}
        </p>
      </section>

      {/* Focus Areas */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">핵심 분야</h2>
        <div className="flex flex-wrap gap-2">
          {story.focusAreas.map((area) => (
            <Badge key={area} variant="secondary">
              {area}
            </Badge>
          ))}
        </div>
      </section>

      {/* Roles & Partners */}
      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>역할</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {story.roles.map((role) => (
                  <li key={role} className="text-muted-foreground">
                    • {role}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {story.partners && story.partners.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>파트너</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {story.partners.map((partner) => (
                    <li key={partner} className="text-muted-foreground">
                      • {partner}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Methods */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">사용한 방법론</h2>
        <div className="flex flex-wrap gap-2">
          {story.methods.map((method) => (
            <Badge key={method} variant="outline">
              {method}
            </Badge>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">프로세스</h2>
        <div className="space-y-6">
          {story.process.map((phase, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{phase.phase}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {phase.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="text-muted-foreground">
                      • {activity}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      {story.outcomes && story.outcomes.length > 0 && (
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">결과</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                {story.outcomes.map((outcome, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {outcome}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Insights */}
      {story.insights && story.insights.length > 0 && (
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">인사이트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {story.insights.map((insight, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic">"{insight}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Media */}
      {story.media && story.media.length > 0 && (
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">미디어</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {story.media.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <span className="text-muted-foreground">이미지: {item.alt}</span>
                  </div>
                  {item.caption && (
                    <p className="text-sm text-muted-foreground">{item.caption}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
