import React from "react";
import '../hojas-de-estilo/Boton.css'

export function Boton({ texto, esBotonDeClick, manejarClick }) {
  return (
    <div>
      <button
        className={esBotonDeClick ? "boton-clic" : "boton-reiniciar"}
        onClick = {manejarClick}
      >
        {texto}
      </button>
    </div>
  );
}
