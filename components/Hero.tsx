export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center">
        {/* 메인 환영 문구 */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          seo의  수업
        </h1>
        
        {/* 간단한 설명 */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          가장 쉽고 깔끔한 Next.js 보일러플레이트로 교육용 서비스를 시작해 보세요. 
          반응형 디자인과 확장 가능한 구조가 이미 준비되어 있습니다.
        </p>

        {/* 기능 추가를 위한 가짜(Placeholder) 버튼 */}
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
            시작하기
          </button>
          {/* 여기에 새로운 액션 버튼을 추가하세요 */}
        </div>

        {/* 여기에 추가적인 대시보드나 미리보기 컴포넌트를 추가하세요 */}
      </div>
    </section>
  );
}
