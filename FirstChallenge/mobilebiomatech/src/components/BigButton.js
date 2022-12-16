import styles from './BigButton.module.css'
import React from 'react';

const BigButton = ({text})=> {
    return (
    <div className= {styles.BigButton}>
        <button type='button'>{text}</button>
    </div>
  );
};

export default BigButton;