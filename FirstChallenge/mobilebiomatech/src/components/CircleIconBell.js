import styles from './CircleIconBell.module.css'
import React from 'react';
import { BellSimple } from "phosphor-react";

const CircleIconBell = ()=> {
    return (
    <div className= {styles.CircleIconBell}>
        <BellSimple size={"2.5vh"} color="#fff" weight="fill" rotate={180}/>
    </div>
  );
};

export default CircleIconBell;