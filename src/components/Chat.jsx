import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase';
import SendMessage from './sendMessage';
import { collection, onSnapshot, limit, orderBy, doc } from "firebase/firestore";

function Chat({ ideaUname, username, userId, photoUrl }) {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    // console.log(photoUrl)

    useEffect(() => {
        onSnapshot(collection(db, "messages"), limit(50), (snapshot) => {
            setMessages(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, []);


    return (
        <div>
            {
                <>

                    <div className="msgs">
                        {messages.map(({ id, data }) => (
                            auth.currentUser.displayName === username && ideaUname === data.ideaUname ? (
                                <div>
                                    <div key={id} className={`msg ${data.userId === auth.currentUser.uid ? 'sent' : 'received'}`}>
                                        <div>
                                            <img className='rounded-full h-9 border-2 border-solid border-black' src={data.photoUrl} alt="" />
                                        </div>

                                        <div>
                                            <p className='px-1 py-1 gap-1'>{data.username}</p>
                                            <div className='w-[10rem]'>
                                                <p className='px-1 py-1'>{data.text}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ) : null
                        ))}
                    </div>
                </>
            }
            <SendMessage scroll={scroll} ideaUname={ideaUname} username={username} userId={userId} photoUrl={photoUrl} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat