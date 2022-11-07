import React, { useState } from 'react';
import './css/Estilo.css';
import Opcion from './Opcion';
import Resultado from './Resultado';
import opciones from './Opciones';

function Juego() {
  const [eleccionJugador, setEleccionJugador] = useState("");
  const [eleccionMaquina, setEleccionMaquina] = useState("");

  const elegirOpcionJugador = (event) => {
    const jugador = opciones.find(e => e.eleccion === event.target.textContent);
    setEleccionJugador(jugador);
    elegirOpcionMaquina();
  }

  const elegirOpcionMaquina = () => {
    const eleccionM = opciones[Math.floor(Math.random() * opciones.length)];
    setEleccionMaquina(eleccionM);
  }

  return (
    <div className="Juego">
      <Resultado jugador={eleccionJugador} maquina={eleccionMaquina}></Resultado>
      <main className='juegoMain'>
        <section>
          <div className='Jugador'>Jugador</div>
          <div className='eleccionJ'>{eleccionJugador.eleccion}</div>
        </section>
        <section>
          <div className='Maquina'>Maquina</div>
          <div className='eleccionM'>{eleccionMaquina.eleccion}</div>
        </section>
      </main>
      
      <div className='opciones'>
        {
          opciones.map((e, index) =>
            <Opcion elegir={elegirOpcionJugador}
              valor={opciones[index]}
            />
          )
        }
      </div>
    </div>
  );
}

export default Juego;
