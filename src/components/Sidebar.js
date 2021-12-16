import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { SidebarChatItem } from "./SidebarChatItem";

export const Sidebar = () => {
  const {
    auth: { uid },
  } = useContext(AuthContext);
  const {
    chatState: { usuarios },
  } = useContext(ChatContext);
  return usuarios
    .filter((usuario) => usuario.uid !== uid)
    .map((usuario) => <SidebarChatItem usuario={usuario} key={usuario.uid} />);
};
