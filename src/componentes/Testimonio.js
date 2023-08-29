import React from 'react';
import '../Hojas-de-estilo/Testimonio.css';


function Testimonio(props){
  return (
    <div className="contenedor-testimonio">
    <img className="imagen-testimonio"
    src={require(`../imagenes/testimonio-${props.imagen}.jpg` )}
    alt="pájaro" />
  <div className="contenedor">
    <p className="nombre-testimonio">{props.nombre} (Pájaro) {props.pais}</p>
    <p className="cargo-testimonio">{props.clase} (Cuervo Negro Valhalla) {props.color}</p>
    <p className="texto-testimonio">"{props.testimonio}"</p>
  </div>
  </div>
  );
}

export default Testimonio
