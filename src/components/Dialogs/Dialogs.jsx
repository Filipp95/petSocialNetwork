import React from 'react';
import s from './Dialogs.module.css';
import DialogList from './DialogList/DialogList';
import Chats from './Chats/Chats';

const Dialogs = (props) => {
    let DialogElements = props.DialogBase.map(Dialog => <DialogList id={Dialog.id.toString()} name={Dialog.name} />)
    let MessageElements = props.MessageBase.map(Chat => <Chats message={Chat.message} />)
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let message = newMessageElement.current.value;
        alert(message);
    }

    return (
            <div className={s.dialogs}>
                <div className={s.dialogs_visualization}>
                    {DialogElements}
                </div>
                <div className={s.chats_visualization}>
                    {MessageElements}
                    <textarea ref={newMessageElement} />
                    <button onClick={addMessage}> add Message </button>
                </div>
            </div>
    )
};

export default Dialogs;
