import styles from './CircleIconHelp.module.css'
import React from 'react';
import { Question } from "phosphor-react";

const CircleIconHelp = ()=> {
    return (
    <div className= {styles.CircleIcon_Container}>
        <div className={styles.CircleIcon_Icon}><Question size={"5vh"} color="#3cca9e" weight="fill"/></div>
        <div className={styles.CircleIcon_Background}></div>
    </div>
  );
};

export default CircleIconHelp;