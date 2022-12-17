import styles from './CircleIconMoon.module.css'
import React from 'react';
import { Moon } from "phosphor-react";

const CircleIconMoon = ()=> {
    return (
    <div className= {styles.CircleIconMoon}>
        <Moon size={"2.5vh"} color="#fff" weight="fill"/>
    </div>
  );
};

export default CircleIconMoon;