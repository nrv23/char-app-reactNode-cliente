import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoinMessage } from "./OutgoinMessage";
import { SendMessage } from "./SendMessage";

export const Messages = () => {

  const { 
    chatState: {
      mensajes
    }  
} = useContext(ChatContext);
  const { 
    auth: {
      uid
    } 
  } = useContext(AuthContext);


  return (
    <div className="mesgs">
      <div className="msg_history" id="historiaMensajes">
        {
          mensajes.map(msg => (
            (msg.para === uid) // si el parametro para es el mismo id que el de la persona que esta logueada
            // eso quiere decir que son mensajes recibidos por la persona que esta logueada
            ? <IncomingMessage key={msg._id}  msg={msg} />
            : <OutgoinMessage key={msg._id}  msg={msg} /> // en este caso son los mensaje que envia la persona logueada
          ))
        }
      </div>
      <SendMessage />
    </div>
  );
};
