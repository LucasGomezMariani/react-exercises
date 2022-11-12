import React from 'react';

function ItemCount(props) {
  let [count, setCount] = React.useState(props.inicio);

  function handgleSuma() {
    if (count < props.stock) setCount(count + 1);
  }
  function handgleResta() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div>
      <button onClick={handgleResta}>-</button>
      <span>{count}</span>
      <button onClick={handgleSuma}>+</button>
      <br />
      <button>{props.titulo}</button>
    </div>
  );
}

export default ItemCount;
