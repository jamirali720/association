import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "../../Global/Global.css";
import Loader from "../../utils/Loader";

const UpdateExpenseMoney = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    const fetchedData = () => {
      setLoading(true);
      fetch(`https://association-server.onrender.com/single-expense/${id}`)
        .then((response) => response.json())
        .then((data) => setExpenseData(data.result));
      setLoading(false);
    };
    fetchedData();
  }, [id]);

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

    fetch(`https://association-server.onrender.com/update-expense/${id}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          toast.success(data.message, {
            position: toast.POSITION.TOP_CENTER,
            toastId: 1,
          });
          reset();
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
  };

  let currentYear = new Date().getFullYear();
  var yearArray = [];

  for (let i = 2022; i <= currentYear; i++) {
    yearArray.push(i);
  }

  if (loading) return <Loader />;

  return (
    <div
      className="main bg-info rounded-3 container-fluid dm-update"
      style={{ width: 900, height: "auto", margin: "auto", marginTop: 20 }}
    >
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 className="my-2 text-primary"> Update Information</h4>

          <div className="form-group row w-75 mx-auto mt-4">
            <div className="col-md-3 col-sm-12">
              <label className="me-3" htmlFor="name">
                {" "}
                Name{" "}
              </label>
            </div>
            <div className="col-md-9 col-sm-12">
              <input
                defaultValue={expenseData.name}
                {...register("name", { required: true })}
                className="form-control"
              ></input>
              {errors.name && (
                <span className="text-danger"> নাম নির্বাচবন করুন </span>
              )}
            </div>
          </div>
          <div className="form-group row w-75 mx-auto mt-4">
            <div className="col-md-3 col-sm-12">
              <label className="me-3" htmlFor="amount">
                Amount{" "}
              </label>
            </div>
            <div className="col-md-9 col-sm-12">
              <input
                defaultValue={expenseData.amount}
                {...register("amount", { required: true })}
                className="form-control"
              ></input>
              {errors.amount && <span className="text-danger"> Amount </span>}
            </div>
          </div>
          <div className="form-group row w-75 mx-auto mt-4">
            <div className="col-md-3 col-sm-12">
              <label className="me-3" htmlFor="date">
                {" "}
                Date
              </label>
            </div>
            <div className="col-md-9 col-sm-12">
              <input
                type="date"
                defaultValue={expenseData.date}
                {...register("date", { required: true })}
                className="form-control"
              ></input>
              {errors.date && <span className="text-danger">date </span>}
            </div>
          </div>
          <div className="form-group row w-75 mx-auto mt-4">
            <div className="col-md-3 col-sm-12">
              <label className="me-3" htmlFor="name">
                {" "}
                Voucher
              </label>
            </div>
            <div className="col-md-9 col-sm-12">
              <input
                defaultValue={expenseData.voucher}
                {...register("voucher", { required: true })}
                className="form-control"
              ></input>
              {errors.voucher && <span className="text-danger"> Voucher </span>}
            </div>
          </div>

          <div className="form-group w-100  mt-4">
            <button
              type="submit"
              className="form-control btn btn-success w-75 mx-auto mb-4"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateExpenseMoney;
