import React, {useEffect, useState} from 'react';
import styles from "./DialogMessages.module.css"

const MessageItem = (props) => {
    return (
        <div className={styles.dialogItem} style={props.name === "Danila" ? {marginLeft: "auto"} : {margin: "0px"}}>
            <div><strong>{props.name}</strong></div>
            {props.text}
        </div>
    );
}

const DialogMessages = ({dialog, addMessage}) => {
    let [value, setValue] = useState('');


    const submitHandler = (event) => {
        event.preventDefault();
        if (value.trim()) {
            addMessage(value);
        }
        setValue('');
    }

    const scrollToBottom = (id) => {
        const element = document.getElementById(id);
        element.scrollTop = element.scrollHeight;
    }
    useEffect(() => {
        scrollToBottom("scrollDialog");
    }, [dialog])

    return (
        <div className={styles.dialogBlock}>
            <div className={styles.titleOfDialog}>
                <strong>Messages</strong>
            </div>
            <div className={styles.dialogMessages} id="scrollDialog">
                {dialog.map(message => <MessageItem name={message.name} text={message.text} key={message.id}/>)}
            </div>
            <form className={styles.formSend} onSubmit={submitHandler}>
                <input placeholder={"Write message"} className={styles.formInput} value={value}
                       onChange={(event) => setValue(event.target.value)}/>
                <button className={styles.buttonSend} type="submit">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/White_Arrow_Down.svg/560px-White_Arrow_Down.svg.png"
                        alt=""/>
                </button>
            </form>
        </div>
    );
};

export default DialogMessages;