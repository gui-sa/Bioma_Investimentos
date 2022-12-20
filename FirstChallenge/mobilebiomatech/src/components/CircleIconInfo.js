import styles from './CircleIconInfo.module.css'
import React from 'react';
import { Info } from "phosphor-react";

const CircleIconInfo = ()=> {
    return (
    <div className= {styles.CircleIcon_Container}>
        <div className={styles.CircleIcon_Icon}><Info size={"5vh"} color="#3cca9e" weight="fill"/></div>
        <div className={styles.CircleIcon_Background}></div>
    </div>
  );
};

export default CircleIconInfo;