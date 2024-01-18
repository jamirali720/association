import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios/Axios";
import Loader from "../../utils/Loader";
import useDmProvider from "../../DmProvider/useProvider";
import { useNavigate } from "react-router-dom";

const DonarsList = ({ keyword, year }) => {
  const [loading, setLoading] = useState(false);
  const { filtered, setFiltered } = useDmProvider();

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const link = `https://association-server.onrender.com/search?keyword=${keyword}&year=${year}`;
      const { data } = await axiosInstance.get(link);
      setFiltered([...data]);
      setFiltered([...data]);
      setLoading(false);
    };
    fetchData();
  }, [keyword, year, setFiltered, setLoading]);

  if (loading) return <Loader />;

  const handleUpdate = (id) => {
    navigate(`/madrasah/dashboard/${id}`);
  };

  return (
    <main>
      <section className="overflow-scroll">
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="text-primary">
              <th>Name </th>
              <th>Amount </th>
              <th>Year </th>
              <th>Month </th>
              <th>Date </th>
              <th> address</th>
              <th> phone</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered &&
              filtered.map((item, index) => (
                <tr key={index} className="text-success">
                  <td>{item.name}</td>
                  <td>{item.amount} </td>
                  <td>{item.year} </td>
                  <td>{item.month} </td>
                  <td>{item.date} </td>
                  <td>{item.address} </td>
                  <td>{item.phone} </td>
                  <td>
                    <button
                      className="mx-2 btn btn-primary"
                      onClick={() => handleUpdate(item._id)}
                    >
                      Edit
                    </button>
                    <button className="mx-1 btn btn-danger">Delete</button>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default DonarsList;
