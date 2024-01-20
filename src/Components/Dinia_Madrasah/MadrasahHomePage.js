import React from "react";

import DmNavbar from "./Navbar_Sidebar/DmNavbar";
import ContentDisplay from "./Content/ContentDisplay";


const MadrasahHomePage = () => {
 

  let currentYear = new Date().getFullYear();
  var yearArray = [];

  for (let i = 2022; i <= currentYear; i++) {
    yearArray.push(i);
  }

  return (
    <main>
      <section>
        <DmNavbar />
      </section>
      <section>
        <h1 className="text-primary mt-2">
          {" "}
          কদমতলী খানকায়ে ছালেহিয়া মোহেব্বিয়া দ্বীনিয়া কমপ্লেক্স এ আপনাকে স্বাগতম
          ।
        </h1>
      </section>
      <section>
        <h1 className="text-secondary">ইসলামকে জানতে আমাদের এই প্রবন্ধ গুলো পড়ুন </h1>
        <ContentDisplay/>
      </section>

      
    </main>
  );
};

export default MadrasahHomePage;
