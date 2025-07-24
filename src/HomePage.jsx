import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-center p-6">
      <header className="mb-12">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">한방플랜</h1>
        <p className="text-lg text-gray-700">
          실손보험 청구, 이제 전문가가 도와드립니다.<br />
          3년간 1억 원 이상의 환급 노하우로 <strong>정확한 실손조회</strong>와 <strong>청구대행</strong> 제공
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 text-lg rounded-2xl shadow-lg bg-blue-600 text-white hover:bg-blue-700">
            실손조회 상담 신청하기
          </button>
        </div>
      </header>

      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">01. 실손조회</h2>
          <p className="text-gray-600">
            전문가가 직접 확인하여 <br /> 세대별 약관 및 한방 면책까지 철저하게 분석합니다.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">02. 청구대행</h2>
          <p className="text-gray-600">
            필요한 서류 수집부터 보험사 접수까지 <br /> 모든 과정을 대행해드립니다.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">03. 고객지원</h2>
          <p className="text-gray-600">
            전담 매니저가 끝까지 책임지고 안내하여 <br /> 만족도 높은 결과를 제공합니다.
          </p>
        </div>
      </section>

      <footer className="mt-20 text-sm text-gray-500">
        © 2025 한방플랜. All rights reserved.
      </footer>
    </main>
  );
}
