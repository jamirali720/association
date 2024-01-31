import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDmProvider from "../../DmProvider/useProvider";
import Loader from "../../utils/Loader";

const styles = {
  width: "28rem",
  height: "25vh",  
};
const ContentDisplay = () => {
  const [contents, setContents] = useState([]);
  const { loading, setLoading } = useDmProvider();

  useEffect(() => {
    setLoading(true);
    fetch("https://association-server.onrender.com/all-contents", {})
      .then((response) => response.json())
      .then((data) => setContents(data))
      .finally(() => setLoading(false));
  }, [setLoading]);

  if (loading) return <Loader />;
  return (
    <Fragment>
      <section className="d-flex justify-content-center align-items-center flex-wrap content-container">
        {contents &&
          contents.map((item, index) => {
            return (
              <div className="card m-1" key={index} style={styles}>
                <div className="card-body">
                  <h5 className="card-title text-success">{item.title} </h5>
                  <p className="card-text">{item.text.slice(0, 120)}.... </p>
                  <Link
                    className="text-decoration-none"
                    to={`/madrasah/content-details/${item._id}`}
                  >
                    <button className="btn btn-success"> আরো পড়ুন</button>
                  </Link>
                </div>
              </div>
            );
          })}
      </section>
    </Fragment>
  );
};

export default ContentDisplay;
