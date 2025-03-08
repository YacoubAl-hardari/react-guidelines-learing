import React from 'react';
import logo from './logo.svg';
import SayHelloFromMyFirstComponent from './components/SayHelloFromMyFirstComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>مرحبًا بك في React!</p>

        <SayHelloFromMyFirstComponent/>
        {/* <SayHelloFromMyFirstComponent/>
        <SayHelloFromMyFirstComponent/> */}

      </header>
    </div>
  );
}

export default App;