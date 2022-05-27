import React, {useContext} from 'react';
import styles from "./NotificationItem.module.css"
import Context from "../../../../context";

const NotificationItem = (note) => {
    let {removeNote} = useContext(Context);
    return (
        <div className={styles.NotificationItem}>
            {note.note.text}
            <button className={styles.btn} onClick={() => removeNote(note.note.id)}><strong>&times;</strong></button>
        </div>
    );
};

export default NotificationItem;