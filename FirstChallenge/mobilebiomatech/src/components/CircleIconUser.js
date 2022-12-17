import styles from './CircleIconUser.module.css'
import React from 'react';
import { User } from "phosphor-react";

const CircleIconUser = ()=> {
    return (
    <div className= {styles.CircleIconUser}>
        <User size={"3vh"} color="#fff" weight="fill" rotate={180}/>
    </div>
  );
};

export default CircleIconUser;