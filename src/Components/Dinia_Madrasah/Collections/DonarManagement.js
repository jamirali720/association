import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useDmProvider from "../../DmProvider/useProvider";

const DonarManagement = () => {
  const { donar, setDonar } = useDmProvider();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/madrasah/dashboard/update/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are You sure you want to delete ?")) {
      fetch(`http://localhost:5500/delete/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            toast.success(data.message, {
              position: toast.POSITION.TOP_CENTER,
              toastId: 1
            });
            // navigate("/madrasah/dashboard");
          } else {
            toast.error("Something went wrong !", {
              position: toast.POSITION.TOP_CENTER,
              toastId: 1
            });
          }
        })
        .catch((error) => {
          if (error) {
            console.log(error);
          }
        });
    }
    setDonar((donar) => donar.filter((info) => info._id !== id));
  };

    
  return (
    <main>
      <section className="overflow-scroll">
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="text-primary">
              <th>Name </th>
              <th>Amount </th>
              <th> Address</th>
              <th> Phone</th>
              <th>Year </th>
              <th>Month </th>
              <th>Date </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {donar &&
              donar.map((item, index) => (
                <tr key={index} className="text-success">
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.address} </td>
                  <td>{item.phone} </td>
                  <td>{item.year} </td>
                  <td>{item.month} </td>
                  <td>{item.date} </td>

                  <td>
                    <button
                      onClick={() => handleEdit(item._id)}
                      className="btn btn-primary mx-2"
                    >
                      {" "}
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-danger mx-1"
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

export default DonarManagement;
