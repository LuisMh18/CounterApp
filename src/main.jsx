import React from 'react';
import ReactDOM from 'react-dom/client';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FormWidthCustomHook } from './02-useEffect/FormWidthCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterWidthCustomHook } from './01-useState/CounterWidthCustomHook';
// import { CounterApp } from './01-useState/CounterApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>,
)
