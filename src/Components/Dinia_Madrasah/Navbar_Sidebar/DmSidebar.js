import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../useAuth/useAuth";
import "../../Global/Global.css";
import useDmProvider from "../../DmProvider/useProvider";
import { FiLogOut } from "react-icons/fi";

const DmSidebar = () => {
  const { user, logoutUser } = useAuth();
  const { isCashier, setIsCashier } = useDmProvider();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://association-server.onrender.com/isCashier/${user.email}`, {})
      .then((res) => res.json())
      .then((data) => setIsCashier(data));
  }, [user.email, setIsCashier]);

  return (
    <div
      className="main card mt-1 bg-secondary dm-sidebar"
      style={{ minHeight: "100vh" }}
    >
      <div className="image-container">
        <img
          className="rounded-circle m-2"
          src={user.photoURL}
          alt=""
          style={{ width: 110, height: 110 }}
        />
        <p>
          {" "}
          <Link to="me" className="text-warning text-decoration-none">
            {" "}
            My Profile
          </Link>
        </p>
      </div>
      <nav>
        <ul className="nav nav-tabs flex-column justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" to="/madrasah">
              মাদরাসার হোম পেইজ
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/madrasah/dashboard">
              মাদরাসার ডেসবোর্ড
            </Link>
          </li>
          {isCashier && (
            <span>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/madrasah/dashboard/add-expense"
                >
                  খরচের টাকা যোগ করুন
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/madrasah/dashboard/add-collection"
                >
                  কালেকশনের টাকা যোগ করুন
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/madrasah/dashboard/expense-management"
                >
                  খরচের হিসাব মেনেজমেন্ট
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/madrasah/dashboard/donar-management"
                >
                  দাতাদের মেনেজমেন্ট
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/madrasah/dashboard/add-cashier"
                >
                  কেশিয়ার যোগ করুন
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/madrasah/dashboard/filter"
                >
                  দাতাদের খুজে বের করুন
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/madrasah/dashboard/add-content"
                >
                  কনটেন্ট তৈরী করুন
                </Link>
              </li>             
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/madrasah/dashboard/content-management"
                >
                কনটেন্ট মেনেজমেন্ট
                </Link>
              </li>
            </span>
          )}

          <li className="nav-item">
            <Link
              className="nav-link text-white"
              to="/madrasah/dashboard/donar-list"
            >
              দাতাদের তালিকা
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link text-white"
              to="/madrasah/dashboard/expense-list"
            >
              খরচের তালিকা
            </Link>
          </li>

          <li className="nav-item">
            <Link
              onClick={() => logoutUser(navigate)}
              className="nav-link text-white"
              to="#"
            >
              বের হয়ে যান <FiLogOut size={25} color="blue" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DmSidebar;
