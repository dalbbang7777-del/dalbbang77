import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* 서비스 로고 */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          seo
        </Link>

        {/* 네비게이션 바 */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">홈</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">서비스 소개</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">학습하기</Link>
          {/* 여기에 새로운 메뉴 항목을 추가하세요 */}
        </nav>

        {/* 모바일 메뉴 버튼 (나중에 기능을 추가하세요) */}
        <div className="md:hidden">
          <button className="p-2 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
