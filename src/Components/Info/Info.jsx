import React from 'react'
import style from './Info.module.css'
import doctorVideo from '../Imagenes/doctorVideo.png'
import video2 from '../Imagenes/video2.mp4'
import muneco from '../Imagenes/muneco.png'
export default function Info() {
    return (
        <div className={style.container}>
            <div className={style.subContainer}>

                <div className={style.caja1}>
                    <div className={style.subCaja}>

                        <div className={style.cajaDatos}>
                            <h1>
                                ¿Sabes qué es
                                un <strong>DRIP IV?</strong>
                            </h1>
                            <p>
                                Son infusiones endovenosas para impulsar energía, quemar grasa,
                                sentirse revitalizado y acelerar tu metabolismo.
                                Tratamientos personalizados bajo la dirección de un médico a cargo.
                            </p>
                        </div>
                        <div className={style.cajaImg}>
                            <img src={muneco} alt="Drips" />
                        </div>
                    </div>

                    <div className={style.seccion3}>
                        <button className={style.button}>
                            RESERVA TU CITA
                        </button>
                        <h3>
                            ¡Gratis!
                        </h3>
                    </div>
                    <p className={style.segundop}>
                        Agendá una videollamada con un Médico
                    </p>
                </div>
                <div className={style.caja2}>
                    <div className={style.video}>
                        <video height={"100%"} width={"100%"} poster={doctorVideo} controls>
                            <source src={video2} type="video/mp4" />

                            Tu navegador no admite el elemento.
                        </video>

                    </div>
                </div>
            </div>

        </div>
    )
}