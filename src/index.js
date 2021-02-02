import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="footer-container">
      <small className="link">
        <a className="github-link"
           href="https://github.com/annakassai/react_app"
           target="_blank"
           rel="noreferrer"
           >
           Open-source code</a>, by <a
            className="linkedin-link"
            href="https://www.linkedin.com/in/annakassai91/"
            target="_blank"
            rel="noreferrer"
           >
           Anna Kassai
          </a>
      </small>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
