import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export default function Family() {
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

  {
    // Данные проекта (в реальном приложении можно брать из API)
    const projectData = {
      title: "Страница стартовой сцены",
      description:
        "Необычное начало открытия стартовой страницы путем разрушения стены",
      imgUrl: "/cubes.jpg",
      githubUrl: "https://github.com/PeterSkwortsov/ball",
      overview:
        "Меня вдохновила работа Marco Ludovico Perego. Я попытался сделать немного посвоему, изменить, но его работа мне нравится гораздо больше)",
      goals: [
        "Создать многостраничный сайт который точно объяснит предоставляемые услуги",
        "Самостоятельно создать UI компоненты + работа с художником",
        "Подключить админ-панель для управления контентом",
        "Провести SEO оптимизацию",
      ],
      technologies: ["React", "R3F", "Drei"],
      results: [
        "First Contentful Paint - 0,5 сек",
        "Cumulative Layout Shift - 0,006",
        "Speed Index - 0,9 сек",
      ],
      liveDemoUrl: "https://peterskwortsov.github.io/family/",
      liveDemoOriginal: "https://tympanus.net/Tutorials/Mirrors/#/pedro",
    };

    const {
      title,
      description,
      imgUrl,
      githubUrl,
      overview,
      goals,
      technologies,
      results,
      liveDemoUrl,
      liveDemoOriginal,
      status,
      duration,
    } = projectData;

    return (
      <>
        {/* Основной контент */}
        <div className="min-h-screen bg-gradient-to-br from-slate-50 bg-red-800">
          <div className="container mx-auto px-4 py-8 max-w-6xl">
            {/* Хедер проекта */}
            <NavLink href="/home-page/#3">
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
            </NavLink>
            <header className="text-center mb-12">
              <h1
                className={`mt-6 mb-4 transition-all duration-1000 delay-0 mx-auto ${
                  isVisible
                    ? "opacity-100 scale-100 flex justify-center items-center"
                    : "opacity-0 scale-90"
                }`}
              >
                <span className="text-5xl md:text-5xl lg:text-7xl font-black text-balance">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300% ">
                    {title}
                  </span>
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            </header>

            {/* Карточка проекта */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 overflow-hidden">
              {/* Hero изображение */}
              <div className="relative w-full">
                <img
                  src={imgUrl}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Контент */}
              <div className="p-8 md:p-12">
                {/* Кнопки действий */}
                <div className="flex flex-wrap gap-4 mb-12">
                

                  <div className="card-actions  justify-end items-center z-20">
                    <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700">
                      <Link to="/discoveryStart">Демо</Link>
                    </button>
                  </div>
                  <div className="card-actions  justify-end items-center z-20">
                    <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700">
                      <a
                        href={liveDemoOriginal}
                        target="_parent"
                        rel="noopener noreferrer"
                      >
                        Оригинал
                      </a>
                    </button>
                  </div>
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
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {overview}
                      </p>
                    </section>

                    {/* Цели проекта */}
                    {/* <section>
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
                    </section> */}
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
                    {/* <section>
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
                            <p className="text-gray-800 font-medium">
                              {result}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
