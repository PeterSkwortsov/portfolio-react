import React from 'react'
import { Link } from 'react-router-dom';

const Grid = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:px-20 mb-20">
        <div className="card bg-base-200 img-full w-auto shadow-sm">
          <figure>
            <img
              src="/letan.png"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title" id="1">
              Каталог картин художников
            </h2>
            <p>На React. Адаптивная верстка. Свой дизайн.</p>
            <div className="card-actions justify-start items-end z-20 ">
              <div className="card-actions justify-end items-center z-20">
                <button className="btn btn-neutral bg-white text-black rounded-xl">
                  <Link href="./gallery">Подробнее</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 img-full w-auto shadow-sm">
          <figure>
            <img
              src="/london.png"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title" id="2">
              Сеть детских аттракционов в Нижнем Новгороде
            </h2>
            <p>
              Мой самый первый коммерческий проект, 2022 год. Адаптив, анимация.
            </p>
            <div className="card-actions justify-between items-start z-20 ">
              <div className="card-actions justify-end items-center z-20">
                <Link href={"./game-attractions"}>
                  <button className="btn btn-neutral bg-white text-black rounded-xl">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* game-attractions */}
        <div className="card bg-base-200 img-full w-auto shadow-sm">
          <figure>
            <img
              src="/family.png"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title" id="3">
              Сайт проекта «История семьи»
            </h2>
            <p>Адаптив. Кастомный прелоадер. Дизайн, анимация и графика.</p>
            <div className="card-actions justify-between items-start z-20 ">
              <div className="card-actions justify-end items-center z-20">
                <Link href={"./family-project"}>
                  <button className="btn btn-neutral bg-white text-black rounded-xl">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 img-full w-auto shadow-sm">
          <figure>
            <img
              src="/studia.png"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "100%", height: "100%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title" id="4">
              Творческая студия «Вики Борщ»
            </h2>
            <p>Next.js, адаптив, многостраничный, дизайн.</p>
            <div className="card-actions justify-between items-start z-20 ">
              <div className="card-actions justify-end items-center z-20">
                <Link href={"./borschArt"}>
                  <button className="btn btn-neutral bg-white text-black rounded-xl">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 img-full w-auto shadow-sm">
          <figure>
            <img
              src="/time.png"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "100%", height: "100%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title" id="4">
              Лендинг часов
            </h2>
            <p>Three.js, GSAP</p>
            <div className="card-actions justify-between items-start z-20 ">
              <div className="card-actions justify-end items-center z-20">
                <button className="btn btn-neutral bg-white text-black rounded-xl">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 img-full w-auto shadow-sm">
          <figure>
            <img
              src="/game.png"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title" id="5">
              Игра в мяч
            </h2>
            <p>R3F, Drei</p>
            <div className="card-actions justify-between items-start z-20 ">
              <div className="card-actions justify-end items-center z-20">
                <button className="btn btn-neutral bg-white text-black rounded-xl">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 img-full w-auto shadow-sm">
          <figure>
            <img
              src="/ball.png"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title" id="6">
              Техника раскадровки кадров
            </h2>
            <p>Blender, GSAP </p>
            <div className="card-actions justify-between items-start z-20 ">
              <div className="card-actions justify-end items-center z-20">
                <button className="btn btn-neutral bg-white text-black rounded-xl">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 img-full w-auto shadow-sm">
          <figure>
            <img
              src="/stadium.png"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title" id="7">
              Интерактивное бронирование билетов
            </h2>
            <p>GSAP</p>
            <div className="card-actions justify-between items-start z-20 ">
              <div className="card-actions justify-end items-center z-20">
                <Link href={"./stadium"}>
                  <button className="btn btn-neutral bg-white text-black rounded-xl">
                    Подробнее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 img-full w-auto shadow-sm">
          <figure>
            <img
              src="/cubes.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
              style={{ width: "200%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title" id="7">
              Интерактивный переход между страницами
            </h2>
            <p>GSAP</p>
            <div className="card-actions justify-between items-start z-20 ">
              <div className="card-actions justify-end items-center z-20">
                <Link href={"./discovery"}>
                  <button className="btn btn-neutral bg-white text-black rounded-xl">
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
}

export default Grid