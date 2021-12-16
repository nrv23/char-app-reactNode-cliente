import { createContext, useReducer } from "react";
import { chatReducer } from "./ChatReducer";

export const ChatContext = createContext();

const initialState = {
  uid: "",
  chatActivo: null, //uid del usuario a quien le envio mensajes
  usuarios: [], // usuario sd el abd
  mensajes: [], // todos los mensajes del chat seleccionado
};
export const ChatProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider
      value={{
        chatState,
        dispatch,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
