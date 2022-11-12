import React from 'react';

function ItemCount(props) {
  let [count, setCount] = React.useState(props.inicio);

  function handgleSuma() {
    if (count < props.stock) setCount(count + 1);
  }
  function handgleResta() {
    if (count > 1) setCount(count - 1);
  }
  function addToCart() {
    if (count <= props.stock) alert(`se agregaron ${count} productos`);
  }

  return (
    <div>
      <button onClick={handgleResta}>-</button>
      <span>{count}</span>
      <button onClick={handgleSuma}>+</button>
      <br />
      <button onClick={addToCart}>{props.titulo}</button>
    </div>
  );
}

export default ItemCount;
