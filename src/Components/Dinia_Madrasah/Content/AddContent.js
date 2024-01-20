import React from "react";
import { useForm } from "react-hook-form";
import "../../Global/Global.css";
import { toast } from "react-toastify";

const AddContent = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("date", data.date);
    formData.append("text", data.textarea);

    fetch("https://association-server.onrender.com/add-content", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("the result", data);
        if (data === true) {
          toast.success("Content has been saved in database successfully", {
            position: toast.POSITION.TOP_CENTER,
            toastId: 1,
          });
          reset();
        } else {
          toast.danger("Something went wrong !", {
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
  };

  // ✅ DD/MM/YYYY
  //   const dateString = new Date().toLocaleDateString("en-GB");

  return (
    <div
      className="main bg-info rounded-3 container-fluid add-amount "
      style={{ width: 700, height: 570, margin: "auto", marginTop: 120 }}
    >
      <div className="header">
        <h2 className="py-2 text-warning"> Add Your Content Here </h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group w-50 mx-auto mt-4">
            <input
              type="text"
              {...register("title", { required: true })}
              className="form-control"
              placeholder="Enter Your Title"
            />
            {errors.title && (
              <span className="text-danger"> Title is Required </span>
            )}
          </div>
          <div className="form-group w-50 mx-auto mt-4">
            <textarea
              type="text"
              {...register("textarea", { required: true })}
              className="form-control"
              placeholder="Enter Your text here"
            />
            {errors.textarea && (
              <span className="text-danger"> Textarea is Required </span>
            )}
          </div>

          <div className="form-group w-50 mx-auto mt-4">
            <input
              type="date"
              {...register("date", { required: true })}
              className="form-control"
            />
            {errors.date && (
              <span className="text-danger"> Date is Required </span>
            )}
          </div>
          <div className="form-group w-50 mx-auto mt-4">
            <button type="submit" className="form-control btn btn-success">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContent;
