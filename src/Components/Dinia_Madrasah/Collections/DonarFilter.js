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
          <span className="display-6 text-primary">
            {" "}
            দাতাদের খুজে দেখতে পারেন{" "}
          </span>
          <form>
            <div className="w-100 d-flex justify-content-center align-items-center mx-auto search-input">
              <div className="form-group w-25 me-2 mt-3">
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
                  placeholder="এখানে নাম মোবাইল নাম্বার, মাসের নাম,ঠিকানা দিয়ে খুজুন, "
                  className="form-control"
                ></input>
              </div>
              <div className="form-group w-25 me-2 mt-3">
                <span> সর্বমোট দানকারীর সংখ্যা : {donar.length} জন </span>
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
