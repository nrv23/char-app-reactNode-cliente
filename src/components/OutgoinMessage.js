import React from "react";
import { formatFecha } from "../helpers/formatearFecha";

export const OutgoinMessage = ({msg:{mensaje,createdAt}}) => {
  //Mensajes enviados
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{mensaje}</p>
        <span className="time_date"> {formatFecha(createdAt)}</span>
      </div>
    </div>
  );
};
