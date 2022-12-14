import React, { useState } from 'react'
import style from './WeightLoss.module.css'

//Material - ui

import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//Imagenes

import sueroFrente from '../Imagenes/sueroFrente.png'
import sueroDorso from '../Imagenes/sueroDorso.png'
import more from '../Imagenes/more.png'
import cruz from '../Imagenes/cruz.png'
import { useNavigate } from 'react-router-dom';


import SliderPrueba from '../Slider/SliderPrueba';

export default function WeightLoss() {
    const [vuelta, setVuelta] = useState(true)
    const navigate = useNavigate()
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: '100px'
            }}
        >

            <div className={style.container}>



                <div className={style.caja1}>
                    <div className={style.verMas}>
                        <img src={sueroFrente}
                            alt="masDrips"
                            style={{ display: vuelta ? 'block' : 'none' }}
                        />
                        <img
                            src={sueroDorso}
                            alt="masDrips"
                            style={{ display: vuelta ? 'none' : 'block' }}
                        />
                        <div className={style.ContainerButtonCaja1}>
                            <button className={style.buttonCaja1}>
                                <img
                                    className={style.img1}
                                    src={more}
                                    alt=""
                                    onClick={() => setVuelta(false)}
                                    style={{ display: vuelta ? 'block' : 'none' }}
                                />
                                <img
                                    className={style.img2}
                                    src={cruz} alt="masDrips"
                                    style={{ display: vuelta ? 'none' : 'block' }}
                                    onClick={() => setVuelta(true)}
                                />
                                <p>VER MAS</p>
                            </button>
                        </div>
                    </div>
                    <p className={style.pCaja2}>
                        <strong>Excelente para la producci??n de energ??a</strong> y
                        para impulsar los objetivos de esfuerzo f??sico y
                        perdida de peso
                    </p>
                </div>



                <div className={style.caja2}>
                    <h1>Weight Loss</h1>
                    <p className={style.pCaja2}>
                        Inicie el mas eficiente <strong>plan de perdida de peso</strong>,
                        con nuestra especial <strong>membresia adaptada</strong> para vos de uno,
                        tres o 6 meses
                    </p>
                    <h2>Beneficios</h2>
                    <div className={style.ContainerBeneficios}>
                        <p>
                            <CheckCircleIcon
                                sx={{ color: '#62CCC5' }}
                                className={style.iconP}
                            />
                            Aumento del metabolismo
                        </p>
                        <p>
                            <CheckCircleIcon
                                sx={{ color: '#62CCC5' }}
                                className={style.iconP}
                            />
                            Promueve la descomosici??n de c??lulas grasas
                        </p>
                        <p>
                            <CheckCircleIcon
                                sx={{ color: '#62CCC5' }}
                                className={style.iconP}
                            />
                            Controla el estado de animo y el apetito
                        </p>
                    </div>
                    <div className={style.cuandoComo}>
                        <div className={style.cuandoInside}>
                            <Accordion className={style.acordion}
                                expanded={vuelta ? true : false}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ color: '#73D8D1' }}>Cu??ndo gotear</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={style.acordionDetails}>
                                    <Typography 
                                    sx={{textAlign: 'left'}}
                                    >
                                        Una vez por semana durante las primeras 6 semanas.
                                        Mantener una o dos sesiones mensuales.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={style.acordion}
                                expanded={vuelta === false ? true : false}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ color: '#73D8D1' }}>C??mo utilizar</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={style.acordionDetails}>
                                    <Typography 
                                    sx={{textAlign: 'left'}}
                                    >
                                        Una vez por semana durante las primeras 6 semanas.
                                        Mantener una o dos sesiones mensuales.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className={style.ContainerButton}>
                        <button
                            className={style.button}

                        >
                            AGENDA TUS SESIONES
                        </button>
                        <button
                            className={style.button}
                            onClick={() => navigate(-1)}
                        >
                            ATRAS
                        </button>
                    </div>
                </div>



            </div>
            <div className={style.slider}>
            <h1>Tratamientos</h1>
            <SliderPrueba/>
            </div>
        </Box >
    )
}