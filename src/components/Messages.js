import React from "react";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoinMessage } from "./OutgoinMessage";
import { SendMessage } from "./SendMessage";

export const Messages = () => {
  return (
    <div className="mesgs">
      <div className="msg_history">
        <IncomingMessage />
        <OutgoinMessage />
      </div>

      <SendMessage />
    </div>
  );
};
