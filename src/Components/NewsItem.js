import React from "react";

const NewsItem = (props) => {
  let { title, desc, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://www.cnet.com/a/img/resize/199253ba6e9acbacfd71ae02548e462a1b778383/2022/06/07/ef7b8ffd-9c0a-4afa-afef-2cea54ba4ace/apple-security-privacy-blue.jpg?auto=webp&fit=crop&height=630&width=1200"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            <span className="badge text-bg-light">
              {!author ? "UNKNOWN" : author}{" "}
            </span>
            <br />
            <span className="badge text-bg-light">
              {new Date(date).toGMTString()}
            </span>
          </p>

          <a href={newsUrl} target="_blank" rel="noreferrer" className="">
            <span className="badge rounded-pill text-bg-danger">
              {" "}
              Read More...
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
