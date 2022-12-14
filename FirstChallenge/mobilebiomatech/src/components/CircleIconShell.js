import styles from './CircleIconShell.module.css'
import React from 'react';
import { Shield } from "phosphor-react";

const CircleIconShell = ()=> {
    return (
    <div className= {styles.CircleIconShell}>
        <Shield size={"2.5vh"} color="#fff" weight="fill"/>
    </div>
  );
};

export default CircleIconShell;