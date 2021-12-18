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
    case types.agregarMensaje:
      if(state.chatActivo === action.payload.de 
        || state.chatActivo === action.payload.para ) { // si el chat activo es pertenece a quien recibe o a quien envia, entonces los mensajes
          // se van a cargar en ambos lados
        return {
          ...state,
          mensajes: [...state.mensajes, action.payload]
        } 
      } else {
        return state;
      }
    case types.cargarChat:
      return {
        ...state,
        mensajes: [...action.payload]
      }
    case types.limpiarState:
      return {
        uid: "",
        chatActivo: null, //uid del usuario a quien le envio mensajes
        usuarios: [], // usuario sd el abd
        mensajes: [],
      }
    default:
      return state;
  }
};
