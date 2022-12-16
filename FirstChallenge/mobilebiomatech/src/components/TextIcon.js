import React from 'react'
import style from './TextIcon.module.css'

const TextIcon = ({ cor }) => {

    if (cor === "dark") {
        return(
            <div className={style.TextIcon}>
                <p className={style.redbutton}>Testando</p>
            </div>
        );
    }
    if (cor === "pink") {
        return(
            <div className={style.TextIcon}>
                <p className={style.bluebutton}>Testando</p>
            </div>
        );
    };
    if (cor === "green") {
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