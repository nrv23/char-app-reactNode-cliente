import { types } from "../../types";

export const chatReducer = (state, action) => {
  switch (action.type) {
    case types.usuariosCargados:
      return {
        ...state,
        usuarios: [...action.payload], // operador spread para sacar copia del array
      };
    case types.activarChat:
      if (state.chatActivo === action.payload) return state; // si por ejemplo se selecciona la misma persona que ya tenia activo su chat
      return {
        // de lo contrario se limpian todos los mensajes
        ...state,
        chatActivo: action.payload,
        mensajes: [],
      };
    default:
      return state;
  }
};
