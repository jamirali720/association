import React from "react";
import "../Global/Global.css";

import { useForm } from "react-hook-form";

const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
};
const MakeAdmin = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const fd = new FormData();
    fd.append("email", data.email);
    fetch("https://association-server.onrender.com/addAdmin", {
      method: "POST",
      body: fd,
    })
      .then((res) => {
        if (res.ok) {
          alert("New admin has been added successfully");
          reset();
        }
      })
      .catch((error) => {
        if (error.message) {
          alert("Something is wrong");
        }
      });
  };
  return (
    <div className="mainContainer bg-primary  rounded-2" style={divStyle}>
      <div className="form-container bg-info p-5 rounded-3">
        <div className="header py-3">
          <h2> Make an admin </h2>
        </div>
        <div className="form-group pb-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              className="form-control m-auto"
              {...register("email", { required: true })}
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <span className="text-danger"> Email is Required </span>
            )}
            <button
              type="submit"
              className="btn btn-success form-control d-block  m-auto my-3 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
