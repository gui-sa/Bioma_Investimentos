import React from 'react'
import styles from './Switcher.module.css'

function Switcher() {
    return (
        <div>
            <input type="checkbox" className={styles.toggle_input} name="mode" />
            <div className={styles.slider}>
                <div className={styles.roller}></div>
            </div>
        </div>
    );
};

export default Switcher