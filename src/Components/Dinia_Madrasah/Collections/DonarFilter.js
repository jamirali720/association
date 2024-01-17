import React, { useState } from "react";
import useDmProvider from "../../DmProvider/useProvider";
import Donars from "./DonarsList";

const DonarFilter = () => {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState();
  const { donar } = useDmProvider();

  let currentYear = new Date().getFullYear();
  var yearArray = [];

  for (let i = 2022; i <= currentYear; i++) {
    yearArray.push(i);
  }

  return (
    <main>
      <section>
        <div className=" form-container">
          <span className="display-6 text-primary"> Search Information </span>
          <form>
            <div className="w-75 d-flex justify-content-center align-items-center mx-auto search-input">
              <div className="form-group me-2 mt-3">
                <select
                  value={year}
                  type="text"
                  className="form-control"
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value=""> Search By Year</option>
                  {yearArray.map((year, i) => (
                    <option key={i} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group w-75 me-2 mt-3">
                <input
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                  placeholder="Search by Name / Phone / Address / Year / Month"
                  className="form-control"
                ></input>
              </div>
              <div className="form-group me-2 mt-3">
                <span> Total Donar : {donar.length} persons </span>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="mt-4">
        <Donars keyword={search} year={year} />
      </section>
    </main>
  );
};

export default DonarFilter;
