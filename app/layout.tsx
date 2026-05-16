import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "seo 교육용 웹앱",
  description: "Next.js와 Tailwind CSS를 활용한 교육용 웹 서비스 뼈대",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
          {/* 여기에 페이지별 레이아웃 확장을 위한 컴포넌트를 추가할 수 있습니다 */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
