import React, {useEffect, useState} from 'react';
import s from "./Dialog.module.css"
import DialogMessages from "./Message/DialogMessages";
import ChooseDialogMessage from "./Message/ChooseDialogMessage";


const Dialog = (props) => {
    let [value, setValue] = useState('');

    let inputHandler = () => {
        props.findDialogByName(value);
    }

    useEffect(() => {
        inputHandler();
    }, [value])

    return (
        <div className={s.dialog}>
            <div className={s.dialogItems}>

                <input className={s.inputSearch} placeholder={"Search dialog..."} value={value} onChange={(event) => {
                    setValue(event.target.value)
                }}/>

                {props.dialogs.length === 0 ? <div>No such dialogs</div> :
                    props.dialogs.map(dialog => {
                        return (
                            <button className={s.dialogItem} onClick={() => props.getMessages(dialog.id)}
                                    key={dialog.id}>
                                {dialog.name}
                            </button>)
                    })}

            </div>
            {props.dialog.length === 0 ? <ChooseDialogMessage/> :
                <DialogMessages name={props.dialog.name} dialog={props.dialog} addMessage={props.addMessage}/>}
        </div>
    );
};

export default Dialog;