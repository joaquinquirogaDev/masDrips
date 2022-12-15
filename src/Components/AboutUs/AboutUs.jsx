import React from 'react'
import './AboutUs.css'
import activo from '../Imagenes/activo.png'
import PrimerIzquierda from '../Imagenes/PrimerIzquierda.png'
import PrimeraDerecha from '../Imagenes/PrimeraDerecha.png'
import DerechaActivo from '../Imagenes/DerechaActivo.png'
import IzquierdaActivo from '../Imagenes/IzquierdaActivo.png'

export default function AboutUs() {
    return (
        <div class="container">
            <h1>Conoce a nuestro equipo</h1>
            <p>Somos una empresa creada por jóvenes profesionales médicos quienes, tras más de 10 años de experiencia intra y extrahospitalaria
                , comprendemos las necesidades del mundo actual y queremos brindarte la posibilidad de seguir cuidando tu salud,
                desde la comodidad de tu hogar.
            </p>
            <div class="avatar-group">
                <div class="avatar">
                    <span class="avatar-name">Someone 1</span>
                    <img src={PrimerIzquierda} alt="Image" />
                </div>
                <div class="avatar-izq">
                    <span class="avatar-name">Someone 2</span>
                    <img src={IzquierdaActivo} alt="Image" />
                </div>
                <div class="avatar-active">
                    <span class="avatar-active-name">Someone 3</span>
                    <img src={activo} alt="Image" />
                </div>
                <div class="avatar-dr">
                    <span class="avatar-name">Someone 4</span>
                    <img src={DerechaActivo} alt="Image" />
                </div>
                <div class="avatar">
                    <span class="avatar-name">Someone 5</span>
                    <img src={PrimeraDerecha} alt="Image" />
                </div>
            </div>
            <div class="names">
                <p>Dr. Richard Colucci</p>
                <p>Dr. Octavio Soto Berzzotti</p>
                <p>Dr. Macarena Arteaga</p>
            </div>
        </div>

    )
}