import { CaretRight, CaretLeft, MapPin, Question, Info } from "phosphor-react";
import './App.css';
import BigButton from './components/BigButton';
import CircleIconMoon from "./components/CircleIconMoon";
import CircleIconBell from "./components/CircleIconBell";
import CircleIconLock from "./components/CircleIconLock";
import CircleIconShell from "./components/CircleIconShell";
import CircleIconUser from "./components/CircleIconUser";
import React, { useState } from 'react';
import Switcher from "./components/Switcher";

function App() {

  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className="App">
      <div className={darkMode ? "container_dark" : "container_light"}>
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
        <div className={darkMode ? "container_settings_dark" : "container_settings_light"}>
          <fieldset className='settings'>
            <h2>Settings</h2>

            <label className="switch">
              <CircleIconMoon />
              <span>Dark Mode</span>
              <div className="switcher"><Switcher onChange={(e) => setDarkMode(e.target.checked)} /></div>

            </label>

            <label className="notifications">
              <CircleIconBell />
              <span>Notifications</span>
              <div className="caret">
                <span>On</span>
                <CaretRight size={"3vh"} color="#d8d8d8" weight="bold"/>
              </div>
            </label>

            <label className="privacy">
              <CircleIconLock />
              <span>Privacy</span>
              <div className="caret"><CaretRight size={"3vh"} color="#d8d8d8" weight="bold"/></div>
            </label>

            <label className="security">
              <CircleIconShell />
              <span>Security</span>
              <div className="caret"><CaretRight size={"3vh"} color="#d8d8d8" weight="bold"/></div>
            </label>

            <label className="account">
              <CircleIconUser />
              <span>Account</span>
              <div className="caret"><CaretRight size={"3vh"} color="#d8d8d8" weight="bold"/></div>
            </label>

            <label className="help">
              <Question size={"5.15vh"} color="#3cca9e" weight="fill" />
              <span>Help</span>
              <div className="caret"><CaretRight size={"3vh"} color="#d8d8d8" weight="bold"/></div>
            </label>

            <label className="about">
              <Info size={"5.15vh"} color="#3cca9e" weight="fill" />
              <span>About</span>
              <div className="caret"><CaretRight size={"3vh"} color="#d8d8d8" weight="bold"/></div>
            </label>


          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default App;
