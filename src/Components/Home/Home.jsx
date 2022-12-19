import React, { useState, useMemo } from 'react'
import style from './Home.module.css'
import Info from '../Info/Info.jsx'
import Cards from '../Cards/Cards'
import Slider from '../Slider/SliderPrueba.jsx'
import Prevencion from '../Prevencion/Prevencion.jsx'
import Testimonios from '../Testimonios/Testimonios'


export default function Home() {

    return (
        <div className={style.container}>
            <div className={style.seccion1}>
                <Info />
            </div>

            <div className={style.seccion2}>
                    <h1>¿Cómo lo hacemos?</h1>
                <Cards />
            </div>

            <div className={style.seccion3}>
                <h1>Tratamientos</h1>
                <Slider/>
            </div> 

            <div className={style.seccion4}>
                <Prevencion />
            </div>

            <div className={style.seccion5}>
                <h1 className={style.test}>Testimonios</h1>
                <div className={style.cuadro}>
                    <h1>Testimonios</h1>
                    <p>Pacientes que confían en nosotros</p>
                </div>
                <Testimonios />
            </div>
        </div>
    )
}