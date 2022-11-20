import React, { useState } from 'react'
import Slider from 'react-slick'
import './SliderPrueba.css'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import Tratamientos from '../../Tratamientos'


export default function SliderPrueba() {
    const [slideIndex, setSlideIndex] = useState(0)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        beforeChange: (current, next) => setSlideIndex(next),
        centerMode: true,
        variableWidth: true

    };


    return (
        <div class="slider">
            <Slider {...settings}>
                {Tratamientos?.map((item, index) => (
                    <div class={index === slideIndex ? "card card-active" : "card"}>
                        <div class="card-info">
                            <p class={index === slideIndex ? "text-title text-title-active" : "text-title"}>{item.Titulo} </p>
                            <p class={index === slideIndex ? "text-body text-body-active" : "text-body"}>{item.descripcion}</p>
                        </div>
                        <div class="card-footer">
                            <span class="text-title">{item.precio}</span>

                        </div>
                        <div>

                        <button class={index === slideIndex ? "button button-active" : "button"}>
                            Reservar
                        </button>
                        <button>
                            Ver mas
                        </button>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    )
}