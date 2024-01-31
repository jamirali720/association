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
      <header>
        <h1 className="text-primary mt-2">
          কদমতলী খানকায়ে ছালেহিয়া মোহেব্বিয়া দ্বীনিয়া কমপ্লেক্স এ আপনাকে স্বাগতম
          ।
        </h1>
        <hr className="text-secondary" />
      </header>
      <section>
        <div className="row w-100 p-1 m-0">
          <div className="col-12 col-md-4 px-0">
            <div className="left mx-3 card">pore updated hobe</div>
          </div>
          <div className="col-12 col-md-8 px-0 card">
            <div
              id="dinia-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#dinia-carousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#dinia-carousel" data-slide-to="1"></li>
                <li data-target="#dinia-carousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" style={{ height: "45vh" }}>
                <div className="carousel-item  active h-100">
                  <img
                    className="d-block w-100 h-100 img-thumbnail"
                    src="data:image/jpeg;base64,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"
                    alt="First slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>.caption..</h5>
                    <p>.Name..</p>
                  </div>
                </div>
                <div className="carousel-item  h-100">
                  <img
                    className="d-block w-100  h-100"
                    src="data:image/jpeg;base64,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"
                    alt="Second slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>.caption..</h5>
                    <p>.Name..</p>
                  </div>
                </div>
                <div className="carousel-item  h-100">
                  <img
                    className="d-block w-100  h-100"
                    src="data:image/jpeg;base64,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"
                    alt="Third slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>.caption..</h5>
                    <p>.Name..</p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#dinia-carousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#dinia-carousel"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <header>
          <hr className="text-secondary mx-2" />
          <h1 className="text-secondary">
            ইসলামকে জানতে আমাদের এই প্রবন্ধ গুলো পড়ুন{" "}
          </h1>
          <hr className="text-secondary mx-2" />
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3 card">              
                dolores alias ipsa delectus ad qui voluptatum praesentium
                nesciunt illo quo molestiae voluptatem? Sunt minus in quo quis
                et vel ipsum architecto minima odio, quisquam nostrum sequi
                impedit at earum dolorem alias autem fugiat eos laudantium eius
                mque repudiandae vel quam!
            </div>
            <div className="col-12 col-md-9">
              <div className="mx-2">
                <ContentDisplay />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MadrasahHomePage;
