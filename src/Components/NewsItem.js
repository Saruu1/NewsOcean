import React from "react";

 const NewsItem = (props) => {

    let { title, desc, imageUrl, newsUrl, author, time, source } = props;
    return (
      <div className="my-4">
        <div className="card">
          <div style={{
                    display: 'flex',
                    justifyContent: 'end',
                    position: 'absolute',
                    right: '0'}}>
                              <span className=" badge rounded-pill bg-danger">
                {source}
              </span>

          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{desc}...</p>
            <p className="card-text">
              <small className="text-muted ">
                By {author} on {new Date(time).toUTCString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read Further
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
