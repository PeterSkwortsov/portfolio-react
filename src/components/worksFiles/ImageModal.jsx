import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const images = [
  {
    src: "/1200.png",
    src2: "/car.jpg",
    alt: "Выиграл грант",
    title: "Выиграл грант 1.200.000₽",
    description: "На развитие автоволонтерского сообщества в Нижнем Новгороде",
    description1_1:
      "Это была командная работа множества людей из совершенно разных общественных организаций, объединенных целью действовать, чтобы минимизировать последствия вируса для самых незащищенных людей. Мы помогали маломобильным пожилым людям, инвалидам и многодетным семьям, находящимся на попечении службы социальной защиты города.",
    description1_2:
      "В этом проекте я развил свои организаторские способности, научился действовать в условиях хаоса, когда за день происходило больше событий, чем за неделю. Я быстро принимал сложные решения и выстраивал с нуля каналы связи с другими организациями. После этого проекта я обрел уверенность в себе",
  },
  {
    src: "/medal.jpg",
    src2: "/medal2.jpg",
    alt: "Медаль «В память 800-летия Нижнего Новгорода»",
    title: "Медаль «В память 800-летия Нижнего Новгорода»",
    description2_1:
      "За вклад в Общероссийскую акцию #МыВместе по борьбе с COVID-19 ",
    description2_2:
      "Как и любому человеку, мне приятно, что мою работу заметили и оценили. Я горжусь тем, что оказался там в нужное время и с такими замечательными людьми.",
  },
];

/**
 * Модальное окно для фотографий с возможностью закрытия по клику в любом месте
 */
export default function ImageGridModal() {
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);

  const openModal = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  // Закрытие модального окна по клику вне контента
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  // Закрытие по клавише ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      // Блокируем скролл страницы под модалкой
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl md:text-4xl bg-gradient-to-r font-bold from-primary to-secondary bg-clip-text text-transparent mb-8 p-2">
        Достижения
      </h2>

      {/* Адаптивный grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
        {images.map((img, index) => (
          <div key={index} className="group relative">
            <div
              className="card card-compact bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-700 rounded-2xl overflow-hidden"
              onClick={() => openModal(img)}
            >
              <figure className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    👆 Нажмите для просмотра
                  </span>
                </div>
              </figure>
              <div className="card-body p-5">
                <h3 className="card-title text-xl  m-auto font-bold text-white mb-3">
                  {img.title}
                </h3>
                <div className="space-y-2">
                  {img.description && (
                    <p className="text-gray-300 leading-relaxed">
                      {img.description}
                    </p>
                  )}
                  {img.description2_1 && (
                    <p className="text-gray-300 leading-relaxed">
                      {img.description2_1}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            ref={modalRef}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Заголовок с кнопкой закрытия */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 id="modal-title" className="text-2xl font-bold text-white">
                {selectedImage.title}
              </h2>
              <button
                className="btn btn-circle btn-ghost hover:bg-gray-700 transition-colors text-white hover:text-red-400"
                onClick={closeModal}
                aria-label="Закрыть модальное окно"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Контент модального окна */}
            <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
              {/* Первое изображение */}
              <div className="relative h-72 md:h-80 mb-6 rounded-xl overflow-hidden bg-gray-800">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Текстовый контент */}
              <div className="space-y-4 text-gray-200">
                {selectedImage.description1_1 && (
                  <p className="leading-relaxed text-md">
                    {selectedImage.description1_1}
                  </p>
                )}

                {selectedImage.description1_2 && (
                  <p className="leading-relaxed text-md">
                    {selectedImage.description1_2}
                  </p>
                )}

                {selectedImage.description2_2 && (
                  <p className="leading-relaxed text-md">
                    {selectedImage.description2_2}
                  </p>
                )}

                {/* Кнопка ссылки, если есть */}
                {selectedImage.description3_2 && (
                  <div className="pt-4">
                    <NavLink
                      to="https://borsch-art.ru/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <span>Подробнее на сайте</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Второе изображение, если есть */}
              {selectedImage.src2 && (
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <div className="relative h-72 md:h-96 rounded-xl overflow-hidden bg-gray-800">
                    <img
                      src={selectedImage.src2}
                      alt={`${selectedImage.alt} - дополнительное фото`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
