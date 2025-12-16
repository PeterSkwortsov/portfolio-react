import { useState } from "react";

export default function SuperpowerInteractive() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="min-h-screen  flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Interactive Reveal */}
        {!isRevealed ? (
          <div className="space-y-8">
            <p className="text-white mb-2">У меня есть одна суперсила...</p>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Нажми, чтобы узнать мою{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300%">
                сверхспособность
              </span>
            </h1>
            {/* <span className="text-5xl md:text-5xl lg:text-7xl font-black">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300%">
                ПЕТР
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300%">
                СКВОРЦОВ
              </span>
            </span> */}
            <button
              className="btn btn-primary btn-lg animate-pulse rounded-xl"
              onClick={() => setIsRevealed(true)}
            >
              🎯 Клик
            </button>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            {/* Main Content */}
            <div className="badge badge-primary badge-lg mb-4">
              А вы любознательный человек 😉
            </div>

            <h1 className="text-3xl md:text-3xl font-bold text-white mb-4">
              У меня есть{" "}
              <span className="bg-gradient-to-r from-purple-100 to-purple-800 bg-clip-text text-transparent">
                сверхспособность
              </span>
            </h1>

            <p className="text-xl md:text-1xl text-gray-300 mb-8 p-3 leading-relaxed">
              Проверено на федеральных и региональных форумах, различных акциях
              при работе с большими командами.
            </p>

            {/* Superpower Card with Animation */}
            <div className="hero bg-gradient-to-r from-purple-800 to-blue-500/20 rounded-3xl p-5 border border-green-400/30">
              <div className="hero-content text-center">
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Это - <span className="text-yellow-400">делегирование</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Искусство находить правильных людей для нужных задач
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
