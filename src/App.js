import logo from './logo.svg';
import './App.css';
import * as React from 'react';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//npm sb init

// ui library npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

// accessability addon npm i @storybook/addon-a11y --dev

export default App;
