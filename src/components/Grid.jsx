import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Grid = () => {
  const navigate = useNavigate();



  return (
    <>
      <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:px-20 mb-20 ">
        <div className="card img-full w-auto  bg-slate-900">
          <img
            src="/gal2.jpg"
            width={100}
            height={100}
            alt="Сайт картинной галереи"
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <div className="card-actions flex-col justify-center items-center z-20 ">
              <h2 className="card-title text-white mt-2" id="1">
                Каталог картин художников
              </h2>
              <p className="text-white">
                На React. Адаптивная верстка. Свой дизайн.
              </p>
              <div className="card-actions justify-end items-center z-20">
                <button
                  className="btn btn-primary bg-white text-black rounded-xl mt-4"
                  onClick={() => navigate("/gallery")}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card img-full w-auto bg-slate-900" id="special-block">
          <img
            src="/leg2.jpg"
            width={200}
            height={200}
            alt="Сайт детских аттракционов Легоза в Нижнем Новгороде"
            style={{ width: "100%" }}
          />

          <div className="card-body">
            <div className="card-actions flex-col justify-center items-center z-20 ">
              <h2 className="card-title mt-2 text-white">
                Сеть детских аттракционов в Нижнем Новгороде
              </h2>
              <p className="text-white">
                Мой самый первый коммерческий проект, 2022 год. Адаптив,
                анимация.
              </p>
              <div className="card-actions justify-end items-center z-20">
                <button
                  className="btn btn-primary bg-white text-black rounded-xl mt-4"
                  onClick={() => navigate("/legoza")}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* game-attractions */}
        <div className="card bg-slate-900 img-full w-auto ">
          <img
            src="/family.png"
            width={200}
            height={200}
            alt="Сайт проекта «История семьи»"
            style={{ width: "100%" }}
          />

          <div className="card-body">
            <div className="card-actions flex-col justify-center items-center z-20 ">
              <h2 className="card-title mt-2 text-white" id="3">
                Сайт проекта «История семьи»
              </h2>
              <p className="text-white">
                Адаптивная верстка. Анимационный прелоадер. Мой дизайн,
                илюстрации.
              </p>
              <div className="card-actions justify-end items-center z-20">
                <button
                  className="btn btn-primary bg-white text-black rounded-xl mt-4"
                  onClick={() => navigate("/familyPages")}
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-slate-900 img-full w-auto">
          <img
            src="/bor2.jpg"
            width={200}
            height={200}
            alt="Сайт творческой студии Вики Борщ"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="card-body">
            <div className="card-actions flex-col justify-center items-center z-20 ">
              <h2 className="card-title mt-2 text-white" id="section-3">
                Творческая студия «Вики Борщ»
              </h2>
              <p className="text-white">
                Next.js, многостраничник, свой дизайн. Рабочий проект который
                приносит прибыль
              </p>
              <div className="card-actions justify-end items-center z-20">
                <Link to="/borschstudia">
                  <button className="btn btn-primary bg-white text-black rounded-xl mt-4">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-slate-900 img-full w-auto">
          <img
            src="/fire.jpg"
            width={200}
            height={200}
            alt="Сайт песни «Огненная девочка»"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="card-body">
            <div className="card-actions flex-col justify-center items-center z-20 ">
              <h2 className="card-title mt-2 text-white" id="section-3">
                Промо-сайт песни «Огненная девочка»
              </h2>
              <p className="text-white">HTML, CSS, JS, анимация огня</p>
              <div className="card-actions  justify-end items-center z-20">
                <Link to="/fireyGirl">
                  <button className="btn btn-primary bg-white text-black rounded-xl mt-4">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-slate-900 img-full w-auto">
          <img
            src="/watch.jpg"
            width={200}
            height={200}
            alt="Онлайн демонстарция часов"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="card-body">
            <div className="card-actions flex-col justify-center items-center z-20 ">
              <h2 className="card-title mt-2 text-white" id="section-3">
                Демонстарция часов
              </h2>
              <p className="text-white">React, GSAP, R3F</p>
              <div className="card-actions  justify-end items-center z-20">
                <Link to="/time-watch">
                  <button className="btn btn-primary bg-white text-black rounded-xl mt-4">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="card bg-slate-900 img-full w-auto">
          <img
            src="/game.png"
            width={200}
            height={200}
            alt="Игра в мяч"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="card-body">
            <div className="card-actions flex-col justify-center items-center z-20 ">
              <h2 className="card-title mt-2 text-white" id="section-3">
                Игра в мяч
              </h2>
              <p className="text-white">R3F, Drei</p>
              <div className="card-actions  justify-end items-center z-20">
                <Link to="/game">
                  <button className="btn btn-primary bg-white text-black rounded-xl mt-4">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        <div className="card bg-slate-900 img-full w-auto">
          <img
            src="/stadium.png"
            width={100}
            height={100}
            alt="Бронирование билетов на стадионе"
            style={{ width: "100%", height: "80%", backgroundSize: "contain" }}
          />
          <div className="card-body">
            <div className="card-actions flex-col justify-center items-center z-20 ">
              <h2 className="card-title mt-2 text-white" id="section-3">
                Наглядное бронирование билетов
              </h2>
              <p className="text-white">
                SVG, Inkscape, JavaScript, leader - line
              </p>
              <div className="card-actions  justify-end items-center z-20">
                <Link to="/stadium">
                  <button className="btn btn-primary bg-white text-black rounded-xl mt-4">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-slate-900 img-full w-auto">
          <img
            src="/ball2.png"
            width={200}
            height={200}
            alt="Анимация падения мяча"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="card-body">
            <div className="card-actions flex-col justify-center items-center z-20 ">
              <h2 className="card-title mt-2 text-white" id="section-3">
                Анимация через изображения
              </h2>
              <p className="text-white">Blender, техника раскадровки + GSAP</p>
              <div className="card-actions  justify-end items-center z-20">
                <Link to="/ball">
                  <button className="btn btn-primary bg-white text-black rounded-xl mt-4">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-slate-900 img-full w-auto">
          <img
            src="/cubes.jpg"
            width={200}
            height={200}
            alt="Переход между страницами"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="card-body">
            <div className="card-actions flex-col justify-center items-center z-20 ">
              <h2 className="card-title mt-2 text-white" id="section-3">
                Интерактивный переход между страницами
              </h2>
              <p className="text-white">React, R3F</p>
              <div className="card-actions  justify-end items-center z-20">
                <Link to="/discovery">
                  <button className="btn btn-primary bg-white text-black rounded-xl mt-4">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
