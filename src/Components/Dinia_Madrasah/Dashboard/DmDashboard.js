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
import AddContent from "../Content/AddContent";
import UpdateContent from "../Content/UpdateContent";
import ManagementContent from "../Content/ManagementContent";

const DmDashboard = () => {
  const { setDonar, setLoading, setExpense, setContents } = useDmProvider();

  useEffect(() => {
    const fetchContents = () => {
      setLoading(true);
      const link = "https://association-server.onrender.com/all-contents";
      fetch(link)
        .then((res) => res.json())
        .then((data) => {
          setContents([...data]);
          setLoading(false);
        });
    };
    fetchContents();
  }, [setDonar, setContents, setLoading]);

  useEffect(() => {
    const fetchDonar = () => {
      setLoading(true);
      const link = "https://association-server.onrender.com/all-donars";
      fetch(link)
        .then((res) => res.json())
        .then((donar) => {
          setDonar([...donar]);
          setLoading(false);
        });
    };
    fetchDonar();
  }, [setDonar, setLoading]);

  useEffect(() => {
    const fetchExpenseMoney = () => {
      setLoading(true);
      const link = "https://association-server.onrender.com/dmExpenseMoney";
      fetch(link)
        .then((res) => res.json())
        .then((expenseMoney) => {
          setExpense(expenseMoney);
          setLoading(false);
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
                  <AddCollection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-expense"
              element={
                <ProtectedRoute>
                  <AddDmExpense />
                </ProtectedRoute>
              }
            />
            <Route path="/expense-list" element={<ExpenseList />} />
            <Route path="/donar-list" element={<DisplayDonars />} />
            <Route
              path="/expense-management"
              element={
                <ProtectedRoute>
                  <ExpenseManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/expense-update/:id"
              element={
                <ProtectedRoute>
                  <UpdateExpenseMoney />
                </ProtectedRoute>
              }
            />
            <Route path="/filter" element={<DonarFilter />} />
            <Route
              path="/donar-management"
              element={
                <ProtectedRoute>
                  <DonarManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/update/:id"
              element={
                <ProtectedRoute>
                  <DonarUpdate />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-cashier"
              element={
                <ProtectedRoute>
                  <MakeCashier />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-content"
              element={
                <ProtectedRoute>
                  <AddContent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/update-content/:contentId"
              element={
                <ProtectedRoute>
                  <UpdateContent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/content-management"
              element={
                <ProtectedRoute>
                  <ManagementContent />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DmDashboard;
