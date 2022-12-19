import React from 'react'
import style from './Testimonios.module.css'
import TestimonioMujer from '../Imagenes/TestimonioMujer.png'
import Rating from '@mui/material/Rating';

export default function Testimonios() {
    return (
        <div className={style.container}>
            <div className={style.subContainer}>
                
                <div className={style.caja2}>
                    <div className={style.video}>
                        <img src={TestimonioMujer} alt="masDrips" />
                    </div>
                </div>
                <div className={style.caja1}>
                    <div className={style.subCaja}>

                        <div className={style.cajaDatos}>
                            <h2>
                                “Me sentí muy contenida a lo largo de todo el tratamiento.
                                Me resultó agradeble, práctico y seguro. Lo recomendaría al 100%”
                            </h2>
                            <div className={style.pInfo}>
                                <p style={{ color: '#090914', fontWeight: 'bold' }}>
                                    Alejandra Ramírez
                                </p>
                                <p>
                                    Tratamiento para adelgazar
                                </p>
                            </div>
                                <div className={style.rating}>
                                    <Rating name="size-large" defaultValue={5} size="large" style={{color: '#34CDC3'}}/>
                                </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}