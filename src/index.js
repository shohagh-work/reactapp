/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom/client';
import { age, name } from './person';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
const display = (
  <p>
    Hi, I am
    {' '}
    {name}
    .
    {' '}
    My age is
    {' '}
    {age}
    .
  </p>
);
root.render(display);
/* ES6 Destructing Objects */
/* const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'Car',
  year: 2021,
  color: 'red',
  registration: {
    city: 'Dhaka',
    country: 'Bangladesh',
  },
};

function myVehicle({
  type, color, brand, model, registration: { country },
}) {
  const message = `My ${type} is a ${color} ${brand} ${model} which is registered in ${country}.`;
  // const display = ();
  root.render(<p>{message}</p>);
}
myVehicle(vehicleOne);
*/
/* ES6 Destructuring array */

// function calculator(a, b) {
//   const add = a + b;
//   const subtract = a - b;
//   const multiply = a * b;
//   const divide = a / b;
//   return [add, subtract, multiply, divide];
// }
// const [add, subtract, multiply, divide] = calculator(9, 9);
// const value = (
//   <p>
//     add:
//     {' '}
//     {add}
//     {' '}
//     subtract:
//     {' '}
//     {subtract}
//     {' '}
//     multiply:
//     {' '}
//     {multiply}
//     {' '}
//     divide:
//     {' '}
//     {divide}
//   </p>
// );
// root.render(value);

/* ES6 array methods */
// const myArray = ['Shohagh', 'Shakil', 'Tariqul'];
// const myList = myArray.map((item) => <p>{item}</p>);
// root.render(myList);

// ReactDOM.render(myList, document.getElementById('root'));

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h1>
//         It is
//         {' '}
//         {new Date().toLocaleTimeString()}
//         .
//       </h1>
//     </div>
//   );
//   root.render(element);
// }

// setInterval(tick, 1000);

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
