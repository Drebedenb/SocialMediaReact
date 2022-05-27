import React from 'react';
import s from "./MiniPage.module.css"

const MiniPage = ({inputRef}) => {
    return (
        <div className={s.page}>
            <h1>Write your email if you have a problem</h1>
            From that's exactly moment we can to send your messages.
            <input ref={inputRef} type="text"/>
        </div>
    );
};

export default MiniPage;