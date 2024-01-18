import React from "react";
import { useForm } from "react-hook-form";
import "../../Global/Global.css";
import { toast } from "react-toastify";

const AddDmExpense = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("amount", data.amount);
    formData.append("date", data.date);
    formData.append("voucher", data.voucher);

    fetch("https://association-948a6.web.app/dmExpended", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === true) {
          toast.success(" Expense Amount has been added successfully", {
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

  return (
    <div
      className="main bg-info rounded-3 expense-amount"
      style={{ width: 700, height: 400, margin: "auto", marginTop: 120 }}
    >
      <div className="header">
        <h2 className="py-2 text-white"> এখানে খরচের টাকা যোগ করুন </h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group w-50 mx-auto mt-4">
            <input
              type="text"
              {...register("name", { required: true })}
              className="form-control"
              placeholder="কিসের জন্য খরচ হলো এখানে  লিখুন"
            />
            {errors.name && (
              <span className="text-danger">
                {" "}
                কিসের জন্য খরচ হলো এখানে লিখতে হবে{" "}
              </span>
            )}
          </div>

          <div className="form-group w-50 mx-auto mt-4">
            <input
              type="text"
              {...register("amount", { required: true })}
              className="form-control"
              placeholder="খরচের পরিমান লিখুন"
            />
            {errors.amount && (
              <span className="text-danger"> খরচের পরিমান লিখা প্রয়োজন </span>
            )}
          </div>

          <div className="form-group w-50 mx-auto mt-4">
            <input
              type="text"
              {...register("voucher", { required: true })}
              className="form-control"
              placeholder="খরচের ভাউচার নামবার লিখুন"
            />
            {errors.voucher && (
              <span className="text-danger"> ভাউচার নাম্বার লিখতে হবে </span>
            )}
          </div>
          <div className="form-group w-50 mx-auto mt-4">
            <input
              type="date"
              {...register("date", { required: true })}
              className="form-control"
            ></input>
            {errors.date && <span className="text-danger">date </span>}
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

export default AddDmExpense;
