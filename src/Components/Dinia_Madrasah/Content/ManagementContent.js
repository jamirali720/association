import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useDmProvider from "../../DmProvider/useProvider";

const ManagementContent = () => {
  const { contents, setContents } = useDmProvider();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/madrasah/dashboard/update-content/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are You sure you want to delete ?")) {
      fetch(`https://association-server.onrender.com/delete-content/${id}`, {
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
    setContents((content) => content.filter((item) => item._id !== id));
  };

  return (
    <main>
      <section className="overflow-scroll">
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="text-primary">
              <th>Title </th>
              <th>Text </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {contents &&
              contents.map((item, index) => (
                <tr key={index} className="text-success">
                  <td>{item.title}</td>
                  <td>{item.text}</td>

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




export default ManagementContent;