import React from 'react';
import logo from './logo.svg';
import Button from './components/MyButton'
import Input from './components/MyInput'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>مرحبًا بك في React!</p>
        <Button/>
        <Input/>
        
      </header>
    </div>
  );
}

export default App;