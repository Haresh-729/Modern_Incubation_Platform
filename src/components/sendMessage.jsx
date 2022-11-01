import React, { useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection,serverTimestamp } from 'firebase/firestore';

function SendMessage({ scroll, username, userId,ppUrl }) {
    const [msg, setMsg] = useState('')
    async function sendMessage(e) {
        e.preventDefault();
        await addDoc(collection(db, "messages"), {
            text: msg,
            ppUrl,
            userId,
            username,
            createdAt: serverTimestamp()
        });
        
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input className="border-b-2 border-grey shadow-sm bg-white/0 w-full py-2 focus:outline-none focus:shadow-md focus:border-b-blue focus:border-b-2 transition-colors" autoComplete="off" placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage