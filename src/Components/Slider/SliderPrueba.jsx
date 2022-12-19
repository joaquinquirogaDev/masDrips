import React, { useState } from 'react'
import Slider from 'react-slick'
import './SliderPrueba.css'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import Tratamientos from '../../Tratamientos'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';

export default function SliderPrueba() {
    const [slideIndex, setSlideIndex] = useState(0)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [

            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
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
                            <h2 class={index === slideIndex ? "text-price text-price-active" : "text-price"}>{item.precio}</h2>
                            <p class={index === slideIndex ? "text-body text-body-active" : "text-body"}>{item.descripcion}</p>
                        </div>
                        <div class="buttons">

                            <button class={index === slideIndex ? "button button-active" : "button"}>
                                Reservar
                            </button>
                            <Button  endIcon={<ArrowRightAltIcon />} className={index === slideIndex ? "buttonMas buttonMas-active" : "buttonMas"} >
                                ver mas
                            </Button>
                        </div>
                        <div class="container-textos">
                            <p class={index === slideIndex ? "container-textos p-active" : "container-textos"}>
                                <CheckCircleOutlineIcon style={{ color: '#57BAB3' }} /> {item.text}
                            </p>

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

