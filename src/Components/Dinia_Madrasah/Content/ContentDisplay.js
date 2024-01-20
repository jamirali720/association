import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDmProvider from "../../DmProvider/useProvider";
import Loader from "../../utils/Loader";

const styles = {
  width: "25rem",
  height: "33vh",
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
      <section className="d-flex justify-content-center align-items-center">
        {contents &&
          contents.map((item, index) => {
            return (
              <div className="card p-3 m-1" key={index} style={styles}>
                <header className="card-title">
                  <h3 className="title text-success">{item.title} :-</h3>
                </header>
                <article className="card-body">
                  {" "}
                  {item.text.slice(0, 200)}....{" "}
                </article>
                <footer className="card-text">
                  {" "}
                  <Link
                    className="text-decoration-none"
                    to={`/madrasah/content-details/${item._id}`}
                  >
                    <button className="btn btn-success"> আরো পড়ুন</button>
                  </Link>
                </footer>
              </div>
            );
          })}
      </section>
    </Fragment>
  );
};

export default ContentDisplay;
