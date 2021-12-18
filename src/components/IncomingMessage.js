import React from "react";
import { formatFecha } from "../helpers/formatearFecha";

export const IncomingMessage = ({msg:{mensaje,createdAt}}) => {
  //mensajes recibidos
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{mensaje}</p>
          <span className="time_date"> {formatFecha(createdAt)}</span>
        </div>
      </div>
    </div>
  );
};
