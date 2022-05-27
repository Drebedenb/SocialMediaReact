import React from 'react';
import s from "./Head.module.css";
import Notifications from "./Notifications/Notifications";

const Head = ({notes}) => {
    return (
        <div className={s.head}>
            <img src="https://green-life.ru/wp-content/uploads/2021/02/logo.png" alt=""/>
            <Notifications notes={notes}/>
        </div>
    );
};

export default Head;