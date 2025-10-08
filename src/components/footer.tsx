import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 송영일. 일러스트레이터·삽화가·그림작가 / 한양대 사회혁신융합전공 겸임교수 / MYSC 디자인센터장
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="mailto:contact@example.com"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            연락하기
          </Link>
        </div>
      </div>
    </footer>
  )
}

