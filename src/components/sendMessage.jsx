import React, { useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection,serverTimestamp, orderBy} from 'firebase/firestore';

function SendMessage({ scroll,ideaUname, username, userId,photoUrl }) {
    const [msg, setMsg] = useState('')
    async function sendMessage(e) {
        e.preventDefault();
        await addDoc(collection(db, "messages"), {
            text: msg,
            photoUrl,
            userId,
            username,
            ideaUname,
            createdAt: serverTimestamp()
        });
        
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input className="flex border-b-2 border-grey shadow-sm bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors" autoComplete="off" placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <button className='flex text-sm font-medium p-3 bg-grey' type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage