import React from 'react';
import styles from "./Notifications.module.css"
import NotificationItem from "./NotificationItem/NotificationItem";

const Notifications = ({notes}) => {
    return (
        <div>
            <div className={styles.mainItem} tabIndex="1"><img
                src="https://www.citypng.com/public/uploads/small/116389850386mrqus0mmnpsbvydvgxklzayw5ifpmaebcrx0t7mxsssqudhjlnto0q7zyyuxucf9ht28ltwsd1zynloqpwdvujqpn6hz7op2hqk.png"
                alt=""/>
                {notes.length !== 0 ? <div className={styles.notesSign}><strong>{notes.length}</strong></div> :
                    <div/>}
            </div>
            <ul className={styles.subMenu}>
                {notes.map(note => <NotificationItem note={note} key={note.id}/>)}
            </ul>
        </div>
    );
};

export default Notifications;