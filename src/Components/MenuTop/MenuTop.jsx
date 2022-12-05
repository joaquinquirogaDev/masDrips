import React from 'react'
import Box from '@mui/material/Box';
import style from './MenuTop.module.css'
import IconButton from '@mui/material/IconButton';

export default function MenuTop({ toggleDrawer, toggleDrawerClose}) {
    return (
        <Box
            className={style.box}
            role="presentation"
            onClick={() => toggleDrawer()}
        >
            <div className={style.datos}>
                
                <div className={style.adelgazar}>
                    <h3>PARA ADELGAZAR</h3>
                    <p>Equipo medico</p>
                    <p>Terminos y condiciones</p>
                    <p>FAQs</p>
                    <p>contacto@masdrips.com</p>
                </div>
                <div className={style.reven}>
                    <h3>REJUVENECEDORES</h3>
                    <p>Tratamientos</p>
                    <p>Membresias</p>
                    <p>contacto@masdrips.com</p>
                </div>
                <div className={style.ener}>
                    <h3>ENERGIZANTES</h3>
                    <p>11 2598 2200</p>
                    <p>contacto@masdrips.com</p>
                    <p>contacto@masdrips.com</p>
                </div>
                <div className={style.otros}>
                    <h3>OTROS</h3>
                    <p>11 2598 2200</p>
                    <p>contacto@masdrips.com</p>
                    <p>contacto@masdrips.com</p>
                </div>
            </div>
        </Box>
    )
}