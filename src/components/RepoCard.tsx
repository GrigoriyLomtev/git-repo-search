import { faEye, faPencil, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RedirectLink from "./RedirectLink";

interface RepoCardProps {
  name: string;
  imgUrl: string;
  author: string;
  stars: number;
  watchers: number;
  html_url: string;
  owner_url: string;
}

function RepoCard({
  name,
  imgUrl,
  author,
  stars,
  watchers,
  html_url,
  owner_url,
}: RepoCardProps) {
  return (
    <div className="card" style={{ maxWidth: "440px", maxHeight: "218px" }}>
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            display: "inline",
            height: "24px",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <div style={{ height: "24px", overflow: "hidden" }}>
            <RedirectLink to={html_url} text={name}></RedirectLink>
          </div>
        </h5>
        <div
          style={{
            display: "flex",
            width: "140px",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "8px 0",
          }}
        >
          <img
            src={imgUrl}
            className="card-img-top"
            alt="avatar"
            style={{ width: "50px", height: "50px", marginRight: "8px" }}
          />
          <p
            className="card-text"
            style={{
              margin: "0 auto",
              height: "50px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <RedirectLink to={owner_url} text={author}></RedirectLink>
          </p>
        </div>
        <div
          style={{
            width: "192px",
            height: "26px",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "68px",
              marginRight: "10px",
            }}
          >
            <span style={{ minWidth: "25px", minHeight: "25px" }}>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span style={{ margin: "0 auto" }}>{stars}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "68px",
            }}
          >
            <span style={{ minWidth: "25px", minHeight: "25px" }}>
              <FontAwesomeIcon icon={faEye} />
            </span>
            <span style={{ margin: "0 auto" }}>{watchers}</span>
          </div>
        </div>
        <div className="input-group input-group-sm mt-1">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            name={name}
          />
          <button className="btn btn-primary" id="inputGroup-sizing-sm">
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
