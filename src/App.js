import React from "react";
import Header from './components/Header.js';
import Form from './components/Form.js';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className='uk-section'>
        <div className='uk-container'>
          <Form />
        </div>
      </div>
    </div>
  );
};
export default App;
