import React from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";


const MainHome = () => {
  return (
    <main>
      <MainHeader/>
      <section >
        <h1 className="text-primary my-2 mt-5"> This website is for Olama Kollan Porishod</h1>
        <Link className="text-success my-2" to="/madrasah"> Go to Dinia Madrasah</Link>
        <h2 className="text-info my-3"> So, you may go where you want to go </h2>
      </section>
    </main>
  );
};

export default MainHome;
