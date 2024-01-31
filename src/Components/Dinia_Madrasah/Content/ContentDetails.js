import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../utils/Loader";

const ContentDetails = () => {
  const { contentId } = useParams();
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://association-server.onrender.com/single-content/${contentId}`,
      {}
    )
      .then((response) => response.json())
      .then((data) => setContent(data.result))
      .finally(() => setLoading(false));
  }, [contentId]);

  if (loading) return <Loader />;
  return (
    <Fragment>
      <section
        style={{ width: "50%", height: "auto" }}
        className="mx-auto border border-secondary p-3  mt-5 content-details"
      >
        <article className="">
          <div className="title text-success">
            <h2> {content.title}</h2>
          </div>
          <div className="text">
            <p> {content.text} </p>
          </div>
          <div className="link">
            <Link to="/madrasah" className="text-decoration-none">
              {" "}
              <button className="btn btn-success">
                আগের পাতায় ফিরে যান
              </button>{" "}
            </Link>
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default ContentDetails;
