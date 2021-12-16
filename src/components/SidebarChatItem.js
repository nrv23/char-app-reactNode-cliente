import React, { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";
import { types } from "../types";

export const SidebarChatItem = ({ usuario: { nombre, Online, uid } }) => {
  //active_chat clase para saber cuanto un chat está activo

  const {
    dispatch,
    chatState: { chatActivo },
  } = useContext(ChatContext);
  const activarChat = () => {
    dispatch({
      type: types.activarChat,
      payload: uid,
    });
  };

  return (
    <div
      className={`chat_list ${uid === chatActivo && "active_chat"}`}
      onClick={activarChat}
    >
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{nombre}</h5>
          {Online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};
