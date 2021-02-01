import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <div className="footer-container">
        <small className="link">
        <a href="https://github.com/annakassai/react_app" target="_blank">
            Open-source code </a>, by
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/annakassai91/"
              target="_blank"
              rel="noreferrer"
            >
              {""} Anna Kassai
            </a>
        </small>
      </div>
    </div>
  );
}
