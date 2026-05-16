export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* 로고 및 설명 */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-blue-600 mb-2">seo</h2>
            <p className="text-sm text-gray-500">교육용 웹앱 개발을 위한 최적의 시작점</p>
          </div>

          {/* 카피라이트 공간 */}
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} seo Education. All rights reserved.
          </div>

          {/* SNS 또는 추가 링크 (나중에 추가하세요) */}
          <div className="flex space-x-6 text-gray-400">
             {/*여기에 SNS 아이콘이나 링크를 추가하세요 */}
          </div>
        </div>
      </div>
    </footer>
  );
}
