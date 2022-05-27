import React from 'react';
import style from "./Settings.module.css"

const Settings = ({focus}) => {
    return (
        <div className={style.settings}>
            <div>More settings will be available later. If you have questions please write to us.</div>
            <button className={style.btn} onClick={focus}>Focus on form</button>
        </div>
    );
};

export default Settings;