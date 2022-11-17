import React from 'react'
import style from './TextIcon.module.css'

function TextIcon({ cor }) {
    if (cor === "yellow") {
        return(
            <div className={style.TextIcon}>
                <p className={style.redbutton}>Testando</p>
            </div>
        );
    }
    if (cor === "blue") {
        return(
            <div className={style.TextIcon}>
                <p className={style.bluebutton}>Testando</p>
            </div>
        );
    };
    return(
        <div className={style.TextIcon}>
            <p>Testando</p>
        </div>
    );
    

};

export default TextIcon;