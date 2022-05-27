import Navbar from "./components/Navbar/Navbar";
import s from "./App.module.css"
import Head from "./components/Head/Head";
import Profile from "./components/Content/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialog from "./components/Content/Dialog/Dialog";
import MiniPage from "./components/MiniPage/MiniPage";
import Context from "./context";
import {useRef, useState} from "react";
import Settings from "./components/Content/Settings/Settings";

function App({data}) {
    let [notes, setNotes] = useState(data.notes);
    let [dialog, setMessages] = useState([]);
    let [dialogs, setDialogs] = useState(data.dialogs);

    let copyDialogs = data.dialogs;

    function removeNote(id) {
        setNotes(notes.filter(note => note.id !== id));
    }

    function getMessages(id) {
        setMessages(data.dialogs.filter(item => item.id === id)[0].messages);
    }

    function addMessage(message) {
        setMessages([...dialog,
            {text: message, name: "Danila", id: Date.now()}])
    }

    function findDialogByName(name) {
        dialogs = copyDialogs;
        setDialogs(dialogs.filter(item => item.name.toLowerCase().includes(name.toLowerCase())))
    }

    const inputRef = useRef(null);
    const focus = () => inputRef.current.focus();

    return (
        <Context.Provider value={{removeNote}}>
            <BrowserRouter>
                <Head notes={notes}><title>GreenLife</title></Head>
                <div className={s.wrapper}>
                    <Navbar/>
                    <div>
                        <Routes>
                            <Route path="/profile" element={<Profile userName={data.userName}/>}/>
                            <Route path="/" element={<Profile userName={data.userName} />}/>
                            <Route path="/dialog"
                                   element={<Dialog dialogs={dialogs} dialog={dialog} getMessages={getMessages}
                                                    addMessage={addMessage} findDialogByName={findDialogByName}/>}/>
                            <Route path="/settings" element={<Settings focus={focus}/>}/>
                        </Routes>
                    </div>
                    <MiniPage inputRef={inputRef}/>
                </div>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
