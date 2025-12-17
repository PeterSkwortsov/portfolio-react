
import React from "react";



const Footer = () => {


  return (
    <footer className="bg-black text-white py-4 mt-24">
      <div className="container mx-auto">
        <div className="flex gap-2 justify-center mt-2">
          <div className="avatar">
            <div className="w-10 bg-blue-300 rounded-lg">
              <a href="https://vk.com/vika.borsch">
                <img
                  src="/vk2.svg"
                  width={200}
                  height={100}
                  alt="Picture of the author"
                  style={{ width: "100%" }}
                />
              </a>
            </div>
          </div>
          <div className="avatar avatar-online">
            <div className="w-10">
              <a href="https://t.me/vika_borsch99">
                <img
                  src="/tg2.svg"
                  width={200}
                  height={100}
                  alt="Picture of the author"
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
