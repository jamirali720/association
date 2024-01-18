import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useDmProvider from "../../DmProvider/useProvider";
import DmSidebar from "../Navbar_Sidebar/DmSidebar";
import DmDashboardHome from "./DmDashboardHome";
import AddCollection from "../Collections/AddCollection";
import AddDmExpense from "../ExpenseMoney/AddDmExpense";
import ExpenseManagement from "../ExpenseMoney/ExpenseManagement";
import DonarManagement from "../Collections/DonarManagement";
import DonarUpdate from "../Collections/DonarUpdate";
import UpdateExpenseMoney from "../ExpenseMoney/UpdateExpenseMoney";
import ExpenseList from "../ExpenseMoney/ExpenseList";
import DisplayDonars from "../Collections/DisplayDonars";
import DonarFilter from "../Collections/DonarFilter";
import MakeCashier from "../Collections/MakeCashier";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


const DmDashboard = () => {
  const { setDonar, setLoading, setExpense } = useDmProvider();



  useEffect(() => {
    const fetchDonar = () => {
      setLoading(true)
      const link = "http://localhost:5500/all-donars";
      fetch(link)
        .then((res) => res.json())
        .then((donar) => {
          setDonar([...donar]);
          setLoading(false)
        });
    };
    fetchDonar();
  }, [setDonar, setLoading]);




  useEffect(() => {
    const fetchExpenseMoney = () => {
      setLoading(true)
      const link = "http://localhost:5500/dmExpenseMoney";
      fetch(link)
        .then((res) => res.json())
        .then((expenseMoney) => {
          setExpense(expenseMoney);
          setLoading(false)
        });
    };
    fetchExpenseMoney();
  }, [setDonar, setLoading, setExpense]);

  

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-2" style={{ height: "auto" }}>
          <DmSidebar />
        </div>
        <div className="col-md-10">
          <Routes>
            <Route path="/" element={<DmDashboardHome />} />
            <Route
              path="/add-collection"
              element={
                <ProtectedRoute>
                  {" "}
                  <AddCollection />
                </ProtectedRoute>
              }
            />
            <Route path="/add-expense" element={<AddDmExpense />} />
            <Route path="/expense-list" element={<ExpenseList />} />
            <Route path="/donar-list" element={<DisplayDonars />} />
            <Route path="/expense-management" element={<ExpenseManagement />} />
            <Route
              path="/expense-update/:id"
              element={<UpdateExpenseMoney />}
            />
            <Route path="/filter" element={<DonarFilter />} />
            <Route path="/donar-management" element={<DonarManagement />} />
            <Route path="/update/:id" element={<DonarUpdate />} />
            <Route path="/add-cashier" element={<MakeCashier />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DmDashboard;
