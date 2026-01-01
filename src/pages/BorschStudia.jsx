import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Ships() {
  const [isVisible, setIsVisible] = useState(false);

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


  useEffect(() => {
    setIsVisible(true);
  }, []);

   const projectData = {
     title: "Творческая студия Вики Борщ",
     description: "Мастерская живописи и гончарного мастерства",
     imageUrl: "/bor2.jpg",
     githubUrl: "https://github.com/PeterSkwortsov/borsh",
     overview:
       "Главной целью было обеспечить быструю загрузку изображений, так как ожидалось множество фотографий. Нужно было отразить атмосферу творческой мастерской, используя оранжевый и красный цвета. Также требовалось включить всю необходимую информацию для SEO-продвижения. Необходимо было создать удобный и интуитивно понятный слайдер и таблицы с ценами, чтобы все было понятно и наглядно.",

     technologies: ["Next.js", "Tailwind", "Daisy UI"],
     results: [
       "Соответствие страницы основным рекомендациям поисковой оптимизации - 98/100 баллов",
       "Largest Contentful Paint - 1,1 сек.",
       "Total Blocking Time - 60 мс",
       "Cumulative Layout Shift - 0",
       "First Contentful Paint - 0.5 мс",
     ],
     liveDemoUrl: "https://borsch-art.ru/",
     status: "Завершен",
     duration: "1.5 месяца",
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 bg-orange-600">
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
              className={`mt-6 mb-4 transition-all duration-1000 delay-0 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <span className="text-5xl md:text-4xl  font-black">
                <span className="text-orange-600">
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
            className="bg-white/80  rounded-3xl shadow-xl border
           border-white/60 overflow-hidden"
          >
            {/* Hero изображение */}
            <div className="relative  w-full">
              <img src={imageUrl} alt={title} fill className="object-cover" />
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
                  <section></section>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
