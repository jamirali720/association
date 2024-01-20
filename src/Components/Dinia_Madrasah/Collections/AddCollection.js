import React from "react";
import { useForm } from "react-hook-form";
import "../../Global/Global.css";
import { toast } from "react-toastify";

const AddCollection = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("year", data.year);
    formData.append("month", data.month);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("date", data.date);
    formData.append("amount", data.amount);

    fetch("https://association-server.onrender.com/collection", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          toast.success("Your information has been saved successfully", {
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

  const date = new Date()
  let currentYear = date.getFullYear();
  var yearArray = [];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const donationField = [
    "চাল",
    "মাটি ভরাট",
    "খাবার",
    "মান্নত",
    "এতিমখানা",
    "গরুর চামড়া",
    "লিল্লাহ বোর্ডিং",
    "অনুদান",
    "ফিতরা",
    "যাকাত",
    "গাছ রোপণ",
    "উন্নয়ন বাবদ",
    "রেজিষ্ট্রেশন ",
  ];

  for (let i = 2022; i <= currentYear; i++) {
    yearArray.push(i);
  }

  return (
    <div
      className="main bg-info rounded-3 container-fluid add-collection"
      style={{ width: 700, height: "auto", margin: "auto", marginTop: 20 }}
    >
      <div className="w-75  mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 className="py-3 text-primary">কালেকশনের তথ্য যোগ করুন </h4>
          <div className="form-group w-75 mx-auto mt-4">
            <input
              type="text"
              {...register("name", { required: true })}
              className="form-control"
              placeholder="দাতার নাম লিখুন"
            />
            {errors.name && (
              <span className="text-danger"> দাতার নাম লিখুন </span>
            )}
          </div>

          <div className="form-group w-75 mx-auto mt-3">
            <select
              {...register("field", { required: true })}
              className="form-control"
            >
              <option value="">কিসের বাবদ </option>
              {donationField.map((name, i) => (
                <option key={i} value={name}>
                  {name}
                </option>
              ))}
            </select>
            {errors.field && (
              <span className="text-danger">কি জন্য দেওয়া হলো লিখুন </span>
            )}
          </div>

          <div className="form-group w-75 mx-auto mt-3">
            <input
              type="text"
              {...register("amount", { required: true })}
              className="form-control"
              placeholder="টাকার পরিমান"
            />
            {errors.name && (
              <span className="text-danger"> টাকার পরিমান লিখুন </span>
            )}
          </div>

          <div className="form-group w-75 mx-auto mt-4">
            <select
              type="text"
              defaultValue={currentYear}
              {...register("year", { required: true })}
              className="form-control"
            >
              <option value="">বছর সিলেক্ট করুন</option>
              {yearArray.map((year, i) => (
                <option key={i} value={year}>
                  {year}
                </option>
              ))}
            </select>
            {errors.year && (
              <span className="text-danger"> বছর সিলেক্ট করুন </span>
            )}
          </div>
          <div className="form-group w-75 mx-auto mt-4">
            <select
              defaultValue={months[date.getMonth()]}
              {...register("month", { required: true })}
              className="form-control"
            >
              <option value="">মাস সিলেক্ট করুন</option>
              {months.map((month, i) => (
                <option key={i} value={month}>
                  {month}
                </option>
              ))}
            </select>
            {errors.month && (
              <span className="text-danger">মাস সিলেক্ট করুন </span>
            )}
          </div>
          <div className="form-group w-75 mx-auto mt-4">
            <input
              type="text"
              {...register("phone", { required: true })}
              className="form-control"
              placeholder="আপনার ফোন নামবার লিখুন"
            />
            {errors.phone && (
              <span className="text-danger">ফোন নামবার লিখুন </span>
            )}
          </div>
          <div className="form-group w-75 mx-auto mt-4">
            <input
              type="text"
              {...register("address", { required: true })}
              className="form-control"
              placeholder="ঠিকানা লিখুন"
            />
            {errors.address && (
              <span className="text-danger"> ঠিকানা লিখুন </span>
            )}
          </div>
          <div className="form-group w-75 mx-auto mt-4">
            <input
              type="date"
              {...register("date", { required: true })}
              className="form-control"
              placeholder="ঠিকানা লিখুন"
            />
            {errors.date && <span className="text-danger"> ঠিকানা লিখুন </span>}
          </div>
          <div className="form-group w-75 mx-auto mt-4"></div>

          <div className="form-group w-75 mx-auto mt-4">
            <button type="submit" className="form-control btn btn-success mb-4">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCollection;
