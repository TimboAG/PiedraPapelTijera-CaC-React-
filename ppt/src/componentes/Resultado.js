import React from 'react';
const Resultado = (props) => {
    let resultadoFinal;
    if (props.jugador.derrota === props.maquina.eleccion && props.jugador.eleccion) {
        resultadoFinal = <h1>Ganador: Jugador</h1>
    } else if (props.jugador.eleccion === props.maquina.eleccion) {
        if(props.jugador.eleccion != null ){
            resultadoFinal = <h1>Ganador: Empate</h1>
        }else{
            resultadoFinal = <h1>Empiece el juego</h1>
        }
    }
    else {
        resultadoFinal = <h1>Ganador: Maquina</h1>
    }
    return (
        <h1>{resultadoFinal}</h1>
    )
}
export default Resultado;