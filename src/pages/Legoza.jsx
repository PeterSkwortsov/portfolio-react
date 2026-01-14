import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Ships() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


 const navigate = useNavigate();
 const location = useLocation();

 // Получаем данные откуда пришли
 const fromPage = location.state?.fromPage;
 const scrollToBlock = location.state?.scrollToBlock;

 const handleGoBack = () => {
   if (fromPage && scrollToBlock) {
     // Возвращаемся на предыдущую страницу
     navigate(fromPage, {
       state: {
         shouldScrollToBlock: scrollToBlock,
         scrollBehavior: "smooth",
       },
     });
   } else {
     // Если нет данных, просто назад
     navigate(-1);
   }
 };


  // Данные проекта (в реальном приложении можно брать из API)
  const projectData = {
    title: "Сеть детских развлечений",
    description: "Лендинг сети детских аттракционов в Нижнем Новгороде",
    imageUrl: "/london.png",
    githubUrl: "https://github.com/PeterSkwortsov/s",
    overview:
      "Мой первый сайт, который я создал сам через три месяца после того, как стал заниматься веб-разработкой. Полностью адаптирован под мобильные устройства.",
    goals: [
      "C полного нуля, без дизайна, без контента, без концепции. Мне сказали: сделай мне простой лендинг, чтобы было понятно, что он про детей.",
    ],

    technologies: ["Bootstrap", "AOS", "FancyBox", "jQuery"],
    results: [
      "Соответствие страницы основным рекомендациям поисковой оптимизации - 90/100 баллов",
      "Total Blocking Time - 0 мс",
      "Cumulative Layout Shift - 0,067",
      "First Contentful Paint - 1.3 мс",
    ],
    liveDemoUrl: "http://legozann.ru/",
    status: "Завершен",
    duration: "3 месяца",
  };

  const {
    title,
    description,
    imageUrl,
    githubUrl,
    overview,
    goals,
    technologies,
    results,
    liveDemoUrl,
    status,
    duration,
  } = projectData;

  return (
    <>
      {/* Основной контент */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 bg-red-400">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Хедер проекта */}
          <button
            onClick={handleGoBack}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 mb-5"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="relative">
              Назад
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
          </button>
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {status} за {duration}
            </div>

            <h1
              className={`mt-6 mb-4 transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <span className="text-5xl md:text-5xl lg:text-7xl font-black">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300%">
                  {title}
                </span>
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </header>

          {/* Карточка проекта */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border
           border-white/60 overflow-hidden"
          >
            {/* Hero изображение */}
            <div className="relative  w-full">
              <img
                src={imageUrl}
                alt={title}
                fill="true"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Контент */}
            <div className="p-8 md:p-12">
              {/* Кнопки действий */}
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href={githubUrl}
                  target="_parent"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
                >
                  Исходный код
                </a>
                {liveDemoUrl && (
                  <a
                    href={liveDemoUrl}
                    target="_parent"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
                  >
                    Посмотреть демо
                  </a>
                )}
              </div>

              {/* Сетка с информацией */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Левая колонка */}
                <div className="space-y-12">
                  {/* Обзор проекта */}
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Обзор проекта
                      </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-md">
                      {overview}
                    </p>
                  </section>

                  {/* Цели проекта */}
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-8 bg-green-600 rounded-full"></div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Цели проекта
                      </h2>
                    </div>
                    <ul className="space-y-4">
                      {goals.map((goal, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg
                              className="w-3 h-3 text-green-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                {/* Правая колонка */}
                <div className="space-y-12">
                  {/* Технологии */}
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-8 bg-purple-600 rounded-full"></div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Технологии
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-4 py-2 rounded-xl font-medium border border-purple-200/50 hover:scale-105 transition-transform cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Результаты */}
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-8 bg-orange-600 rounded-full"></div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Результаты
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {results.map((result, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-orange-50 to-amber-50/50 border border-orange-200/50 rounded-2xl p-4 hover:shadow-md transition-shadow"
                        >
                          <p className="text-gray-800 font-medium">{result}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              {/* Дополнительная информация */}
              {/* <div className="mt-12 pt-8 border-t border-gray-200/60">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="bg-blue-50/50 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      95+
                    </div>
                    <div className="text-gray-600">PageSpeed Score</div>
                  </div>
                  <div className="bg-green-50/50 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      35%
                    </div>
                    <div className="text-gray-600">Рост конверсии</div>
                  </div>
                  <div className="bg-purple-50/50 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      10K+
                    </div>
                    <div className="text-gray-600">Пользователей</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Футер */}
        </div>
      </div>
    </>
  );
}
