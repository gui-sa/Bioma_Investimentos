import styles from './CircleIconLock.module.css'
import React from 'react';
import { LockSimple } from "phosphor-react";

const CircleIconLock = ()=> {
    return (
    <div className= {styles.CircleIconLock}>
        <LockSimple size={"3vh"} color="#fff" weight="fill" rotate={180}/>
    </div>
  );
};

export default CircleIconLock;