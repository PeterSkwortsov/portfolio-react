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
                Адаптив. Кастомный прелоадер. Дизайн, анимация и графика.
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
                Next.js, адаптив, многостраничный, дизайн.
              </p>
              <div className="card-actions justify-end items-center z-20">
                <button className="btn btn-primary bg-white text-black rounded-xl mt-4">
                  <Link to="/borschstudia">Подробнее</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-slate-900 img-full w-auto">
          <img
            src="/fire.jpg"
            width={200}
            height={200}
            alt="Сайт творческой студии Вики Борщ"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="card-body">
            <div className="card-actions flex-col justify-center items-center z-20 ">
              <h2 className="card-title mt-2 text-white" id="section-3">
                Промо-сайт песни «Огненная девочка»
              </h2>
              <p className="text-white">HTML, CSS, JS, анимация огня</p>
              <div className="card-actions  justify-end items-center z-20">
                <button className="btn btn-primary bg-white text-black rounded-xl mt-4">
                  <Link to="/fireyGirl">Подробнее</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-slate-900 img-full w-auto">
          <img
            src="/watch.jpg"
            width={200}
            height={200}
            alt="Сайт творческой студии Вики Борщ"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="card-body">
            <div className="card-actions flex-col justify-center items-center z-20 ">
              <h2 className="card-title mt-2 text-white" id="section-3">
                Демонстарция часов
              </h2>
              <p className="text-white">React, GSAP, R3F</p>
              <div className="card-actions  justify-end items-center z-20">
                <button className="btn btn-primary bg-white text-black rounded-xl mt-4">
                  <Link to="/time-watch">Подробнее</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card img-full w-auto bg-slate-900">
          <img
            src="/game.png"
            width={200}
            height={200}
            alt="Picture of the author"
            style={{ width: "200%" }}
          />
          <div className="card-body">
            <h2 className="card-title" id="5">
              Игра в мяч
            </h2>
            <p className="text-white">R3F, Drei</p>
            <div className="card-actions justify-between items-start z-20 ">
              <div className="card-actions justify-end items-center z-20">
                <button className="btn btn-primary bg-white text-black rounded-xl">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card img-full w-auto bg-slate-900">
          <img
            src="/ball.png"
            width={200}
            height={200}
            alt="Picture of the author"
            style={{ width: "200%" }}
          />
          <div className="card-body">
            <h2 className="card-title" id="6">
              Техника раскадровки кадров
            </h2>
            <p className="text-white">Blender, GSAP </p>
            <div className="card-actions justify-between items-start z-20 ">
              <div className="card-actions justify-end items-center z-20">
                <button className="btn btn-primary bg-white text-black rounded-xl">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-slate-900 img-full w-auto">
          <img
            src="/stadium.png"
            width={200}
            height={200}
            alt="Picture of the author"
            style={{ width: "200%" }}
          />
          <div className="card-body">
            <h2 className="card-title" id="7">
              Интерактивное бронирование билетов
            </h2>
            <p className="text-white">GSAP</p>
            <div className="card-actions justify-between items-start z-20 ">
              <div className="card-actions justify-end items-center z-20">
                <Link href={"./stadium"}>
                  <button className="btn btn-primary bg-white text-black rounded-xl">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card img-full w-auto bg-slate-900">
          <img
            src="/cubes.jpg"
            width={200}
            height={200}
            alt="Picture of the author"
            style={{ width: "200%" }}
          />
          <div className="card-body">
            <h2 className="card-title" id="7">
              Интерактивный переход между страницами
            </h2>
            <p className="text-white">GSAP</p>
            <div className="card-actions justify-between items-start z-20 ">
              <div className="card-actions justify-end items-center z-20">
                <Link href={"./discovery"}>
                  <button className="btn btn-primary bg-white text-black rounded-xl">
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
