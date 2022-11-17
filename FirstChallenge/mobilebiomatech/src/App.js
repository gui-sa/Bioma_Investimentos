import {CaretLeft} from "phosphor-react";
import './App.css';
import BigButton from './components/BigButton';
import React from 'react';

function App() {
  return (
    <div className="App">
      <nav>
        <CaretLeft size={32} color="#222423" />
      </nav>
      <header className='profileHeader'>
        <div id="profileImg">
          <img src="assets/Perfil.jpeg" alt="Profile" />
        </div>
        <main>
          <h1>Guilherme Salomao Agostini</h1>
          <address>Uberlandia - MG</address>
          <p>Full Stack Developer</p>
        </main>
        <footer>
          <BigButton text="Upgrade Now - Go Pro" />
        </footer>
      </header>
      <aside className='settings'>
        <h2>Settings</h2>
      </aside>
    </div>
  );
}

export default App;
