import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개",
  description: "일러스트레이터·삽화가·그림작가 송영일의 프로필과 작업 철학을 소개합니다.",
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          소개
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          일러스트레이터·삽화가·그림작가로서 지역의 이야기를 시각적으로 담아내고 있습니다.
        </p>
      </section>

      {/* Profile */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">송영일</CardTitle>
              <CardDescription className="text-lg">
                일러스트레이터·삽화가·그림작가
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">현재 직책</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 한양대학교 사회혁신융합전공 겸임교수</li>
                  <li>• MYSC 디자인센터장</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">전문 분야</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "디자인씽킹",
                    "비주얼씽킹", 
                    "시스템씽킹",
                    "레고 시리어스 플레이",
                    "로컬 혁신 프로젝트"
                  ].map((field) => (
                    <Badge key={field} variant="secondary">
                      {field}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">활동 지역</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "태백",
                    "청도", 
                    "제주",
                    "사군살곶이길 Living Lab",
                    "Local Commons"
                  ].map((location) => (
                    <Badge key={location} variant="outline">
                      {location}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">작업 철학</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>로컬 중심의 접근</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  지역의 실제 맥락과 사람들의 이야기를 깊이 이해하고, 
                  이를 시각적으로 표현하여 공감과 소통의 다리를 만듭니다.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>참여형 디자인</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  디자인씽킹과 비주얼씽킹을 통해 다양한 이해관계자들이 
                  함께 문제를 탐색하고 해결책을 만들어가는 과정을 중시합니다.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>시스템적 사고</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  복잡한 사회 문제를 구조적으로 이해하고, 
                  작은 변화가 큰 시스템에 미치는 영향을 고려한 
                  지속가능한 솔루션을 추구합니다.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>실험과 학습</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  작은 실험을 통해 빠르게 학습하고, 
                  실패를 통해 더 나은 방향을 찾아가는 
                  반복적 개선 과정을 중요하게 생각합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">주요 경력</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>교육 활동</CardTitle>
                <CardDescription>한양대학교 사회혁신융합전공</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Community Design Thinking 수업 설계 및 퍼실리테이션</li>
                  <li>• 현장 연결형 디자인씽킹 교육 프로그램 개발</li>
                  <li>• 학생들의 지역 기반 프로젝트 멘토링</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>연구 활동</CardTitle>
                <CardDescription>MYSC 디자인센터</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 로컬 커먼즈 프로젝트 기획 및 실행</li>
                  <li>• 지역 기반 사회혁신 모델 연구</li>
                  <li>• 디자인씽킹 방법론 개발 및 적용</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>프로젝트 활동</CardTitle>
                <CardDescription>다양한 지역과 기관과의 협업</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 태백 무무목장 현장 리서치 및 로컬러닝 스코핑</li>
                  <li>• 청도 로컬 커먼즈 프로젝트 (경북시민재단 협업)</li>
                  <li>• 사군살곶이길 Living Lab 팝업 실험</li>
                  <li>• 중앙대 C-Design Thinking 프로그램 지원</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
