// 1) Import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './form';

// 2) Get a reference to the div with the ID root
const el = document.getElementById('root');

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a react component
function App() {
  return (
    <div>
      <Form />
    </div>
  );
};


// 5) Take the react component and show it on the screen
root.render(<App />);