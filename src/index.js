/* eslint-disable react/react-in-jsx-scope */
import { useCallback, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Blogs from './pages/Blogs';
// import Contact from './pages/Contact';
// import Home from './pages/Home';
// import Layout from './pages/Layout';
// import NoPage from './pages/NoPage';
// import './App.css';
import Todos from './Message';
// import './index.css';
// import './my-sass.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
/* useCallback */
function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);
  const addCount = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodo((e) => [...e, 'New ToDo']);
  }, [todo]);
  return (
    <>
      <Todos todo={todo} addTodo={addTodo} />
      <div>
        Count:
        {' '}
        {count}
        <button type="button" onClick={addCount}>Add Count</button>
      </div>
    </>
  );
}
root.render(<App />);
/* useReducer */
/* example 2
const initialTodos = [{
  id: 1,
  title: 'Todo 1',
  complete: true,
},
{
  id: 2,
  title: 'Todo 2',
  complete: false,
}];
const Reducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETE':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    default:
      return state;
  }
};
function Todos() {
  const [todos, dispatch] = useReducer(Reducer, initialTodos);
  const handleComplete = (todo) => {
    dispatch({ type: 'COMPLETE', id: todo.id });
  };
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label htmlFor={todo.id}>
            <input
              id={todo.id}
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
root.render(<Todos />); */
/* example -1
const Reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error();
  }
};
function Counter() {
  const [count, dispatch] = useReducer(Reducer, 0);
  return (
    <>
      <h1>{`Count: ${count}`}</h1>
      <button type="button" onClick={() => { dispatch({ type: 'increment' }); }}>+</button>
      <button type="button" onClick={() => { dispatch({ type: 'decrement' }); }}>-</button>
    </>
  );
}
root.render(<Counter />); */
/* useRef
function App() {
  const [inputValue, setInputValue] = useState('');
  const previousValue = useRef('');
  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);
  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <h1>{`current input: ${inputValue}`}</h1>
      <h1>{`previous input: ${previousValue.current}`}</h1>
    </>
  );
}
root.render(<App />); */
/* useContext
const UserContext = createContext();
function Component1() {
  const [user] = useState('Mmh Shohagh');
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}
function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}
function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}
function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}
function Component5() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 5</h1>
      <h1>{`Hello ${user} again!`}</h1>
    </>
  );
}
root.render(<Component1 />); */
/* useEffect
function Timer() {
  const [count, setCount] = useState(0);
  // const [double, setDouble] = useState(0);
  useEffect(() => {
    // setDouble(() => count * 2);
    const timer = setTimeout(() => {
      setCount(() => count + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <h1>
        Count:
        {' '}
        {count}
      </h1>
      { <button type="button" onClick={() => { setCount((c) => c + 1); }}>Doubling</button> }
      { <h1>
        Count Double:
        {' '}
        {double}
      </h1>}

    </>
  );
}
root.render(<Timer />); */
/* useState
function Car() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: 1964,
    color: 'red',
  });
  const updateColor = () => {
    setCar((allStates) => ({ ...allStates, color: 'blue' }));
  };
  return (
    <>
      <h1>
        My
        {' '}
        {car.brand}
      </h1>
      <p>
        It is a
        {' '}
        {car.color}
        {' '}
        {car.model}
        {' '}
        from
        {' '}
        {car.year}
        .
      </p>
      <button type="button" onClick={updateColor}>Update Color</button>

    </>
  );
}
root.render(<Car />); */
/* React Hook
function FavouriteColor() {
  const [color, setColor] = useState('red');
  return (
    <>
      <h1>
        Selected Favourite Color is
        {' '}
        {color}
      </h1>
      <button type="button" onClick={() => setColor('Red')}>Red</button>
      <button type="button" onClick={() => setColor('Blue')}>Blue</button>
      <button type="button" onClick={() => setColor('Green')}>Green</button>
    </>
  );
}
root.render(<FavouriteColor />); */
/* React Memo
function App() {
  const [count, setCount] = useState(0);
  const [todos] = useState(['todo 1', 'todo 2']);
  const increment = () => {
    setCount((c) => c + 1);
  };

  const mySytle = {
    color: 'white',
    backgroundColor: '#000000',
    margin: '15px 15px',
    padding: '5px 10px',
    borderRadius: '5px',
    border: '0px',
    cursor: 'pointer',
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count:
        {' '}
        {count}
        <button
          style={mySytle}
          type="button"
          onClick={increment}
        >
          +
        </button>
        <h1>Warning</h1>
      </div>
    </>
  );
}

root.render(<App />); */
/* Router
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
root.render(<App />); */
/* React Forms */
/* select
function MyForm() {
  const [myCar, setMyCar] = useState('Tesla');
  const handleChange = (event) => {
    setMyCar(event.target.value);
  };
  return (
    <select value={myCar} onChange={handleChange}>
      <option value="Volvo">Volvo</option>
      <option value="Tesla">Tesla</option>
      <option value="BMW">BMW</option>
    </select>
  );
}
root.render(<MyForm />); */
/* text area
function MyForm() {
  const [textarea, setTextarea] = useState(
    'This is a textarea.',
  );
  const handleChange = (event) => {
    setTextarea(event.target.value);
  };
  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  );
}
root.render(<MyForm />); */
/* multiple Inputs
function MyForm() {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert(inputs);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="a">
        Enter Your Name:
        <br />
        <input
          id="a"
          type="text"
          name="username"
          value={inputs.username || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label htmlFor="b">
        Enter Your Age:
        <br />
        <input
          id="b"
          type="number"
          name="age"
          value={inputs.age || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <input type="submit" />
    </form>
  );
}  */
/* for single input
function MyForm() {
  const [name, setName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert(`The name you entered was: ${name}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="a">
        Enter Your Name:
        <input
          id="a"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
const element = <MyForm />;
root.render(element); */
/* React Lists
function Car({ brand: { key, brand } }) {
  return (
    <li>
      I have
      {' '}
      {key}
      {' '}
      {brand}
      {' '}
      car
    </li>
  );
}
function Garage() {
  const cars = [
    { key: 1, brand: 'BMW' },
    { key: 2, brand: 'Ford' },
    { key: 3, brand: 'Volvo' },
    { key: 4, brand: 'Tesla' },
  ];
  return (
    <ul>
      {cars.map((car) => <Car brand={car} />)}
    </ul>
  );
}
root.render(<Garage />); */
/* React Conditionals */
/* Ternary Operator
// function MissedGoal() {
//   return ;
// }

// function MadeGoal() {
//   return ;
// }
function Goal({ isGoal }) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { isGoal ? <h1>GOAL!</h1> : <h1>MISSED!</h1> }
    </>
  );
}
root.render(<Goal isGoal={false} />); */
/* && condition
function Garage(props) {
  const { cars } = props;
  return (
    <>
      <h1>In My garage</h1>
      {cars.length > 0
    && (
    <h1>
      I have
      {' '}
      {cars.length}
      {' '}
      cars.
    </h1>
    )}
    </>
  );
}
const cars = ['BMW', 'Volvo', 'Tesla'];
root.render(<Garage cars={cars} />); */
/* React Events
function Football() {
  function shoot(a, b) {
    // eslint-disable-next-line no-alert
    alert(b.type);
  }
  return (
    <button type="button" onClick={(event) => { shoot('Goal!', event); }}>Take the Shoot</button>
  );
}
root.render(<Football />); */
/* React Props
function Car({ brand: { name } }) {
  return (
    <h2>
      I have a
      {' '}
      {name}
      {' '}
      car.
    </h2>
  );
}
function Garage() {
  const carName = {
    name: 'Ford',
    model: 'Mustang',
  };
  return (
    <>
      <h1>This garage capacity is big.</h1>
      <Car brand={carName} />
    </>
  );
}
const element = <Garage />;
root.render(element); */
/* Class Component */
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: 'Ford',
//       model: 'Mustang',
//       color: 'red',
//       year: 1964,
//     };
//   }

//   changeColor = () => {
//     this.setState({ color: 'blue' });
//   };

//   render() {
//     const x = this.state;
//     return (
//       <div>
//         <h1>
//           This car brand:
//           {' '}
//           {x.brand}
//           {' '}
//           model:
//           {' '}
//           {x.model}
//           {' '}
//           color:
//           {' '}
//           {x.color}
//           {' '}
//           year:
//           {' '}
//           {x.year}
//         </h1>
//         <button
//           type="button"
//           onClick={this.changeColor}
//         >
//           Change Color

//         </button>
//       </div>

//     );
//   }
// }
// const element = <Car />;
// root.render(element);
// const x = 0;
// if (x < 10) {
//   txt = 'Hello';
// }
// const myElement = (
//   <h1>{(x) > 10 ? 'Hello' : 'Good Bye'}</h1>
// );
// root.render(myElement);
/* const shohagh = () => 'I am shohagh';
const sumaiya = () => 'I am Sumaiya';
const name = false;
const yourName = name ? shohagh() : sumaiya();
root.render(yourName); */
/*
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
root.render(message()); */
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
