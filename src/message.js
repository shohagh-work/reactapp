import React, { memo } from 'react';

function Todos({ todos }) {
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo) => <p key={todo.id}>{todo}</p>)}
    </>
  );
}
export default memo(Todos);
// function Car() {
//   return (
//     <h2>
//       This is acar.
//     </h2>
//   );
// }
// function Garage() {
//   return (
//     <>
//       <h1>It is a garage</h1>
//       <Car />
//     </>
//   );
// }
// export default Garage;

// const message = () => {
//   const name = 'Shohagh';
//   const age = 40;
//   return `name is ${name} and age is ${age}`;
// };

// export default message;
