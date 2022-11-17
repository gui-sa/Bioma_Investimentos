import styles from './BigButton.module.css'
import React from 'react';

function BigButton({text}) {
    return (
    <div className= {styles.BigButton}>
        <button type='button'>{text}</button>
    </div>
  );
};

export default BigButton;