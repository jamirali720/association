import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "../../Global/Global.css";
import Loader from "../../utils/Loader";

const UpdateContent = () => {
  const { contentId } = useParams();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchedData = () => {
      setLoading(true);
      fetch(
        `https://association-server.onrender.com/single-content/${contentId}`
      )
        .then((response) => response.json())
        .then((data) => setData(data.result));
      setLoading(false);
    };
    fetchedData();
  }, [contentId]);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("text", data.textarea);
    formData.append("date", data.date);

    fetch(
      `https://association-server.onrender.com/update-content/${contentId}`,
      {
        method: "PUT",
        body: formData,
      }
    )
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

  if (loading) return <Loader />;

  return (
    <div
      className="main bg-info rounded-3 container-fluid dm-update"
      style={{ width: 900, height: "auto", margin: "auto", marginTop: 20 }}
    >
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4 className="my-4 py-3 text-primary"> Update Content </h4>

          <div className="form-group row w-75 mx-auto mt-4">
            <div className="col-md-3 col-sm-12">
              <label className="me-3" htmlFor="name">
                {" "}
                Title{" "}
              </label>
            </div>
            <div className="col-md-9 col-sm-12">
              <input
                defaultValue={data.title}
                {...register("title", { required: true })}
                className="form-control"
              ></input>
              {errors.title && (
                <span className="text-danger"> Title নির্বাচবন করুন </span>
              )}
            </div>
          </div>
          <div className="form-group row w-75 mx-auto mt-4">
            <div className="col-md-3 col-sm-12">
              <label className="me-3" htmlFor="text">
                Textarea{" "}
              </label>
            </div>
            <div className="col-md-9 col-sm-12">
              <textarea
                defaultValue={data.text}
                {...register("textarea", { required: true })}
                className="form-control"
              ></textarea>
              {errors.textarea && (
                <span className="text-danger"> textarea </span>
              )}
            </div>
          </div>

          <div className="form-group w-100  mt-4">
            <button
              type="submit"
              className="form-control btn btn-success w-75 mx-auto mb-4"
            >
              কনটেন্ট আপডেট করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateContent;
