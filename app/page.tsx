import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* 
          앞으로 추가될 수 있는 기능들 예시:
          1. 커리큘럼 소개 섹션
          2. 강사진 소개
          3. 수강 후기
          4. FAQ
      */}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">주요 기능</h2>
            <p className="text-gray-600">이곳에 교육 서비스의 핵심 가치를 나열해 보세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 기능 카드 1 */}
            <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow bg-gray-50">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold mb-3">맞춤형 학습</h3>
              <p className="text-gray-500">학생들의 수준에 맞는 최적화된 학습 경로를 제공합니다.</p>
            </div>

            {/* 기능 카드 2 */}
            <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow bg-gray-50">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600 font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold mb-3">실시간 피드백</h3>
              <p className="text-gray-500">학습 과정 중에 즉각적인 피드백을 통해 이해도를 높입니다.</p>
            </div>

            {/* 기능 카드 3 */}
            <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow bg-gray-50">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600 font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold mb-3">풍부한 리소스</h3>
              <p className="text-gray-500">다양한 동영상, 퀴즈, 실습 자료를 통해 학습을 보조합니다.</p>
            </div>

            {/* 여기에 새로운 기능 카드를 추가하세요 */}
          </div>
        </div>
      </section>
    </>
  );
}
