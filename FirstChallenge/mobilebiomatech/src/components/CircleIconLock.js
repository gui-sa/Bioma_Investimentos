import styles from './CircleIconLock.module.css'
import React from 'react';
import { LockSimple } from "phosphor-react";

const CircleIconLock = ()=> {
    return (
    <div className= {styles.CircleIconLock}>
        <LockSimple size={"2.5vh"} color="#fff" weight="fill"/>
    </div>
  );
};

export default CircleIconLock;