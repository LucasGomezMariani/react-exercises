import React from 'react';
import './style.css';
import ItemCount from './ItemCount';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <ItemCount stock={10} inicio={3} titulo="somo bueno" />
      <br />
      <ItemCount stock={5} inicio={2} titulo="vo deci?" />
    </div>
  );
}
