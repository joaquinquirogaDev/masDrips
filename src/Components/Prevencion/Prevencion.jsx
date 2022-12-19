import React from 'react'
import style from './Prevencion.module.css'
import doctorVideo2 from '../Imagenes/doctorVideo2.png'
import video2 from '../Imagenes/video2.mp4'
import Rectangle117 from '../Imagenes/Rectangle 117.png'
export default function Prevencion() {
    return (
        <div className={style.container}>
            <div className={style.subContainer}>

                <div className={style.caja2}>
                    <div className={style.video}>
                        <video height={"100%"} width={"100%"} poster={doctorVideo2} controls onClick={() => console.log("video")}>
                            <source src={video2} type="video/mp4" />

                            Tu navegador no admite el elemento.
                        </video>
                    </div>
                </div>
                <div className={style.caja1}>
                    <div className={style.subCaja}>

                        <div className={style.cajaDatos}>
                            <h3>DRIPTIPS</h3>
                            <h1>
                                Cómo prevenir
                                el envejecimiento
                            </h1>
                            <p>
                                Video Informativo
                            </p>
                            <p>
                            Dr. Richard Colucci
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}