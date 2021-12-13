import React from "react";
import {} from "react-router-dom";
import { ChatSelected } from "../components/ChatSelected";
import { InboxPeople } from "../components/InboxPeople";
import { Messages } from "../components/Messages";
import "../css/chat.css";

export const ChatPage = () => {
  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />
        <ChatSelected />
        <Messages />
      </div>
    </div>
  );
};
