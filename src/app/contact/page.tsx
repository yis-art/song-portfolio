import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

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

            {/* LinkedIn Profile Card */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg">LinkedIn 프로필</CardTitle>
                </div>
                <CardDescription>
                  전문 경력과 활동을 확인해 보세요
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 p-6">
                  <div className="flex items-start gap-4">
                    {/* 프로필 아바타 */}
                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg ring-2 ring-white/20">
                      <Image
                        src="/스크린샷 2025-10-08 11.29.51.png"
                        alt="송영일 프로필 사진"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    
                    {/* 프로필 정보 */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-1">
                        송영일
                      </h3>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        일러스트레이터·삽화가·그림작가
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        한양대 사회혁신융합전공 겸임교수 / MYSC 디자인센터장
                      </p>
                      
                      {/* 전문 분야 태그 */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 text-primary text-xs font-medium rounded-full border border-primary/20">
                          디자인씽킹
                        </span>
                        <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 text-primary text-xs font-medium rounded-full border border-primary/20">
                          비주얼씽킹
                        </span>
                        <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 text-primary text-xs font-medium rounded-full border border-primary/20">
                          시스템씽킹
                        </span>
                        <span className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 text-primary text-xs font-medium rounded-full border border-primary/20">
                          로컬 혁신
                        </span>
                      </div>
                      
                      {/* 연결 정보 */}
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <span className="inline-flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          LinkedIn에서 연결 가능
                        </span>
                      </div>
                      
                      {/* LinkedIn 버튼 */}
                      <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <a 
                          href="https://www.linkedin.com/in/goodwill010" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn에서 프로필 보기
                        </a>
                      </Button>
                    </div>
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
