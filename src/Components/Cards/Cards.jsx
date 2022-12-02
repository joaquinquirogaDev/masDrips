import React from 'react'
import style from './Cards.module.css'
import Card from '../../Cards.js'
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Cards() {
    return (

        <div className={style.containerPadre}>
            {Card.length > 0 && Card.map(item => (

                <div className={item.button ? style.cardActive : style.card}>
                    <div className={style.altoImg}>
                        <img src={item.img} alt="alto" />
                    </div>
                    <div className={style.text}>
                        <p>{item.descripcion}</p>
                    </div>
                    <div >
                        <Button endIcon={<ArrowRightAltIcon />} size="small" className={item.button ? style.ButtonActive : style.Button} >
                            ver mas
                        </Button>
                    </div>
                </div>
            ))}
        </div>

    )
}