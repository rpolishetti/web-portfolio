import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import cn from "classnames";
import styles from "./App.module.css";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div className={`bg-white-200 flex flex-col ${styles.appRoot}`}>
      <Header />
      <section className={styles.contentSection}>
        <Outlet/>
      </section>
      <Footer />
    </div>
  );
};

export default App;
