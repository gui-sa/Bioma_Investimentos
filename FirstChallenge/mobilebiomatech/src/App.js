import { CaretLeft, MapPin, Question, Info } from "phosphor-react";
import './App.css';
import BigButton from './components/BigButton';
import CircleIconMoon from "./components/CircleIconMoon";
import CircleIconBell from "./components/CircleIconBell";
import CircleIconLock from "./components/CircleIconLock";
import CircleIconShell from "./components/CircleIconShell";
import CircleIconUser from "./components/CircleIconUser";
import React from 'react';
import Switcher from "./components/Switcher";

function App() {
  return (
    <div className="App">
      <nav>
        <CaretLeft size={"5vh"} color="#222423" />
      </nav>
      <header className='profileHeader'>
        <div id="profileImg">
          <img src="assets/Perfil.jpeg" alt="Profile" />
        </div>
        <main>
          <h1>Guilherme Salomao Agostini</h1>
          <span className="text_icon">
            <MapPin size={"2vh"} color="#9f9f9f" />
            <address>Uberlandia, Minas Gerais</address>
          </span>
          <p>Full Stack Developer</p>
        </main>
        <footer>
          <BigButton text="Upgrade Now - Go Pro" />
        </footer>
      </header>
      <aside className='settings'>
        <h2>Settings</h2>
        <div id="darkmode">
          <label className="switch">
              <CircleIconMoon/>
              <span>Dark Mode</span>
              <div className="switcher"><Switcher /></div>
              
          </label>
        </div>
        
        <CircleIconBell/>
        <CircleIconLock/>
        <CircleIconShell/>
        <CircleIconUser/>
        <Question size={"6.15vh"} color="#3cca9e" weight="fill" />
        <Info size={"6.15vh"} color="#3cca9e" weight="fill" />

      </aside>
    </div>
  );
}

export default App;
