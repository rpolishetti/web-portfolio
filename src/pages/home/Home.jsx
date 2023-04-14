import React from "react";
import bannerImg from "../../images/banner.png";
import { Download } from "../../icons";
import styles from "./Home.module.css";

export default () => {
  return (
    <section className="sm:container sm:max-w-7xl sm:mx-auto">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="w-4/12 flex flex-col justify-center items-center order-1 sm:order-0">
          <h2 className="sm:text-3xl xl:text-5xl block mb-3">Hi, It's me, Ramesh</h2>
          <h3 className="sm:text-2xl xl:text-3xl text-gray-500 block">
            A Front-end engineer &{" "}
          </h3>
          <h3 className="sm:text-2xl xl:text-3xl text-gray-500 block">
            Leading small sized teams{" "}
          </h3>
          <button className="rounded sm:text-base xl:text-xl bg-gray-500 hover:bg-gray-600 py-3 px-5 m-7 text-white flex items-center">
            <div className="pr-2">
              <Download />
            </div>{" "}
            Download CV
          </button>
        </div>
        <img src={bannerImg} width="800" height="auto" className={`${styles.bannerImg}`} />
      </div>

      <h2 className="flex justify-center text-4xl my-20 text-gray-700">
        Projects
      </h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <img src="https://via.placeholder.com/400x400"/>
          <div className="flex flex-col items-center py-8">
            <div className="text-ternary-dark">Chrome extension</div>500
          </div>
        </div>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <img className="rounded-t-xl border-none" src="https://via.placeholder.com/500x500"/>
        </div>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <img className="rounded-t-xl border-none" src="https://via.placeholder.com/500x500"/>
        </div>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <img className="rounded-t-xl border-none" src="https://via.placeholder.com/500x500"/>
        </div>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <img className="rounded-t-xl border-none" src="https://via.placeholder.com/500x500"/>
        </div>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <img className="rounded-t-xl border-none" src="https://via.placeholder.com/500x500"/>
        </div>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <img className="rounded-t-xl border-none" src="https://via.placeholder.com/500x500"/>
        </div>
      </section>
    </section>
  );
};
