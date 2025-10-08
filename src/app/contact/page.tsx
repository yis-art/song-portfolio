import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Linkedin, Palette } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "연락",
  description: "프로젝트 문의나 협업 제안이 있으시면 언제든 연락해 주세요. 로컬 혁신, 디자인씽킹, 일러스트레이션 등 다양한 분야의 협업을 환영합니다.",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          연락
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          프로젝트 문의나 협업 제안이 있으시면 언제든 연락해 주세요.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  이메일
                </CardTitle>
                <CardDescription>
                  프로젝트 문의나 협업 제안
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시면 언제든 이메일로 연락해 주세요.
                </p>
                <Button asChild>
                  <a href="mailto:contact@example.com">
                    contact@example.com
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>소셜 미디어</CardTitle>
                <CardDescription>
                  작업 과정과 최신 소식을 확인해 보세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 text-muted-foreground" />
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      @song_illustration
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      송영일 LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palette className="h-5 w-5 text-muted-foreground" />
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      송영일 포트폴리오
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>문의하기</CardTitle>
              <CardDescription>
                아래 폼을 작성하시면 빠른 시일 내에 답변드리겠습니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      이름
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="이름을 입력해 주세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="이메일을 입력해 주세요"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    제목
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="문의 제목을 입력해 주세요"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                    placeholder="문의 내용을 입력해 주세요"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  메시지 보내기
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">협업 가능한 분야</h2>
          <p className="text-muted-foreground mb-8">
            다음과 같은 프로젝트에 관심이 있습니다:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "로컬 혁신 프로젝트",
              "디자인씽킹 워크숍",
              "비주얼씽킹 교육",
              "시스템씽킹 컨설팅",
              "일러스트레이션 작업",
              "사회적 가치 창출",
              "지역 커뮤니티 활성화",
              "교육 프로그램 개발"
            ].map((field) => (
              <div key={field} className="p-4 border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">{field}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
