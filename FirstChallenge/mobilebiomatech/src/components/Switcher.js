import React from 'react'
import styles from './Switcher.module.css'

function Switcher({onChange}) {
    return (
        <>
            <input type="checkbox" className={styles.toggle_input} name="mode" onChange={onChange}/>
            <div className={styles.slider}>
                <div className={styles.roller}></div>
            </div>
        </>
    );
};

export default Switcher