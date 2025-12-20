
import React from "react";



const Footer = () => {


  return (
    <footer className="bg-black text-white py-4 mt-24">
      <div className="container mx-auto">
        <div className="flex gap-2 justify-center mt-2">
          <div className="avatar">
            <div className="w-10">
              <a href="https://vk.com/skwortsow.petia">
                <img
                  src="/vk.svg"
                  width={200}
                  height={100}
                  alt="Профиль в вконтакте"
                  style={{ width: "100%" }}
                />
              </a>
            </div>
          </div>
          <div className="">
            <div className="w-10">
              <a href="https://t.me/Petr_Skworcov">
                <img
                  src="/tg2.svg"
                  width={200}
                  height={100}
                  alt="Профиль в телеграмме"
                  style={{ width: "100%" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
