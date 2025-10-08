"use client"

import { useEffect, useRef } from "react";

interface LinkedInEmbedProps {
  profileUrl: string;
  height?: number;
}

export function LinkedInEmbed({ profileUrl, height = 400 }: LinkedInEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // LinkedIn은 iframe을 차단하므로 대안 방법 시도
    if (iframeRef.current) {
      iframeRef.current.src = profileUrl;
    }
  }, [profileUrl]);

  return (
    <div className="w-full">
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="bg-muted p-3 border-b">
          <p className="text-sm text-muted-foreground">
            LinkedIn 프로필 미리보기 (새 탭에서 열기 권장)
          </p>
        </div>
        <iframe
          ref={iframeRef}
          className="w-full"
          style={{ height: `${height}px` }}
          title="LinkedIn Profile"
          sandbox="allow-scripts allow-same-origin"
          onError={() => {
            // iframe이 차단된 경우 대체 콘텐츠 표시
            if (iframeRef.current) {
              iframeRef.current.style.display = 'none';
              const parent = iframeRef.current.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="p-8 text-center">
                    <p class="text-muted-foreground mb-4">
                      LinkedIn 프로필을 직접 보려면 아래 버튼을 클릭하세요.
                    </p>
                    <a 
                      href="${profileUrl}" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      LinkedIn에서 보기
                    </a>
                  </div>
                `;
              }
            }
          }}
        />
      </div>
    </div>
  );
}
