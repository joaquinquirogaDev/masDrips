import React from 'react'
import Box from '@mui/material/Box';
import style from './MenuTop.module.css'
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export default function MenuTop({ toggleDrawer, toggleDrawerClose}) {
    const navigate = useNavigate()
    return (
        <Box
            className={style.box}
            role="presentation"
            onClick={() => toggleDrawer()}
            sx={{display: { sm: 'block', xs: 'none'}}}
        >
            <div className={style.datos}>
                
                <div className={style.adelgazar}>
                    <h3>PARA ADELGAZAR</h3>
                    <p>Food Poisonning</p>
                    <p>C-Suite</p>
                    <p>Cleanse</p>
                    <p>Super Cleanse</p>
                    <p>Powerhouse</p>
                </div>
                <div className={style.reven}>
                    <h3>REJUVENECEDORES</h3>
                    <p>Jetlag</p>
                    <p>Hangover</p>
                    <p>Flawless</p>
                    <p>Her</p>
                    <p>Super Drip</p>
                </div>
                <div className={style.ener}>
                    <h3>ENERGIZANTES</h3>
                    <p>Autoimmune</p>
                    <p>Super Immunity</p>
                    <p>Hidration</p>
                    <p>Stress Relief</p>
                    <p>Vit D Immunity</p>
                </div>
                <div className={style.otros}>
                    <h3>OTROS</h3>
                    <p>Migraine</p>
                    <p>Myers Cocktail</p>
                    <p>NAD +</p>
                    <p>Super NAD +</p>
                    <p style={{cursor: 'pointer'}}><a href="/weight" style={{textDecoration: 'none', color: 'black'}}>Weight Loss</a></p>
                </div>
            </div>
        </Box>
    )
}