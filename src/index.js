import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>
        It is
        {' '}
        {new Date().toLocaleTimeString()}
        .
      </h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);

// const index = 0;
// setInterval(() => {
//   const element = (
//     <h1 className="heading" tabIndex={index}>
//       <span className="text">
//         Time
//         {' '}
//         {new Date().toLocaleTimeString()}
//       </span>
//     </h1>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }, 1000);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
