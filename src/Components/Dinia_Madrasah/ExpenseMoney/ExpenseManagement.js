import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useDmProvider from "../../DmProvider/useProvider";

const ExpenseManagement = () => {
  const { expense, setExpense } = useDmProvider();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/madrasah/dashboard/expense-update/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are You sure you want to delete ?")) {
      fetch(`https://association-server.onrender.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            toast.success(data.message, {
              position: toast.POSITION.TOP_CENTER,
              toastId: 1,
            });
            navigate("/madrasah/dashboard");
          } else {
            toast.error("Something went wrong !", {
              position: toast.POSITION.TOP_CENTER,
              toastId: 1,
            });
          }
        })
        .catch((error) => {
          if (error) {
            console.log(error);
          }
        });
    }
    setExpense((donar) => donar.filter((info) => info._id !== id));
  };

  console.log(expense);
  return (
    <main>
      <section className="overflow-scroll">
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="text-primary">
              <th>ব্যয়ের খাত </th>
              <th>ব্যয়ের পরিমান </th>
              <th> ব্যয়ের তারিখ </th>
              <th> ভাউচার নাম্বার</th>
            </tr>
          </thead>
          <tbody>
            {expense &&
              expense.map((item, index) => (
                <tr key={index} className="text-success">
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.date} </td>
                  <td>{item.voucher} </td>

                  <td>
                    <button
                      onClick={() => handleEdit(item._id)}
                      className="btn btn-primary"
                    >
                      {" "}
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default ExpenseManagement;
