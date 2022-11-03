import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebase";
import sendMessage from "./SendMessage";
import { collection, onSnapshot, limit } from "firebase/firestore";

function OurChat({ username, userId, ppUrl }) {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  // console.log(ppUrl)

  useEffect(() => {
    onSnapshot(collection(db, "messages"), limit(50), (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => { };
  }, []);

  return (
    <div>
      <div className="msgs">
        {messages.map(({ id, data }) => (
          <div>
            <div
              key={id}
              className={`msg ${data.userId === auth.currentUser.uid ? "sent" : "received"
                }`}
            >
              <img
                className="flex justify-between rounded-full h-9 -mt-5 border-2 border-solid border-black"
                src={data.ppUrl}
                alt=""
              />
              <p className="flex">{data.text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage
        scroll={scroll}
        username={username}
        userId={userId}
        ppUrl={ppUrl}
      />
      <div ref={scroll}></div>
    </div>
  );
}

export default OurChat;
