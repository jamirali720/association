import React from "react";
import "../../Global/Global.css";
import useDmProvider from "../../DmProvider/useProvider";

const DmDashboardHome = () => {
  const { donar, expense } = useDmProvider();

  const totalCollection = donar.reduce(
    (total, item) => total + parseInt(item.amount),
    0
  );

  const totalExpense = expense.reduce(
    (total, item) => total + parseInt(item.amount),
    0
  );

  const remainingFund = totalCollection - totalExpense;
  return (
    <section className="my-5">
      <section className="row d-home">
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-success p-2  text-white h-100">
            <h2> দাতার সংখ্যা </h2>
            <h3>{donar.length} জন </h3>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-primary p-2 text-white h-100">
            <h2> সর্বমোট কালেকশন পরিমাণ</h2>
            <h3>
              {" "}
              <strong>{totalCollection.toFixed(2)} টাকা</strong>{" "}
            </h3>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-success p-2 text-white h-100">
            <h2>সর্বমোট ব্যয়ের পরিমাণ </h2>
            <h3>{totalExpense.toFixed(2)} টাকা </h3>
          </div>
        </div>

        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-secondary p-2 text-white h-100">
            <h2> বর্তমানে ফান্ডে জমা আছে </h2>
            <h4> {remainingFund.toFixed(2)} টাকা </h4>
          </div>
        </div>
      </section>

      {/* second row */}
      <section className="row d-home">
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-info p-2 text-white h-100">
            <h4> 1</h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-warning p-2 text-white h-100">
            <h4> 2 </h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-info p-2 text-white h-100">
            <h4> 3 </h4>
          </div>
        </div>

        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-warning p-2 text-white h-100">
            <h4>4 </h4>
          </div>
        </div>
      </section>
      {/* third section */}
      <section className="row d-home">
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-success p-2 text-white h-100">
            <h4>5 </h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-primary p-2 text-white h-100">
            <h4>aaaaa </h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-danger p-2 text-white h-100">
            <h4> 6 </h4>
          </div>
        </div>

        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-secondary p-2 text-white h-100">
            <h4> 7</h4>
          </div>
        </div>
      </section>
      {/* four section */}
      <section className="row d-home">
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-info p-2 text-white h-100">
            <h4> 8 </h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-warning p-2 text-white h-100">
            <h4> 9 </h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-info p-2 text-white h-100">
            <h4>10</h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-success p-2 text-white h-100">
            <h4>11 </h4>
          </div>
        </div>
      </section>
      {/* five section */}
      <section className="row d-home">
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-success p-2 text-white h-100">
            <h4>12 </h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-primary p-2 text-white h-100">
            <h4> পরে আপডেট হবে</h4>
            <h5>13 টি</h5>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-success p-2 text-white h-100">
            <h4>পরে আপডেট হবে</h4>
            <h5>14জন</h5>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mb-3">
          <div className="card bg-secondary p-2 text-white h-100">
            <h4>পরে আপডেট হবে</h4>
            <h5>15জন</h5>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DmDashboardHome;
