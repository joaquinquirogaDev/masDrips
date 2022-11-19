import React from 'react'
import style from './Footer.module.css'
import LogoDrips from '../Imagenes/logo.png'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, width: '15%', display: { xs: 'none', sm: 'block' } }}
                >
                    <Avatar
                        alt="Cindy Baker"
                        src={LogoDrips}
                        variant="square"
                        sx={{ width: '120px' }}
                    />
                </Typography>
                <p>Logramos tu mejor version</p>
            </div>
            <div className={style.datos}>

                <div className={style.nosotros}>
                    <h3>Sobre +drips</h3>
                    <p>Equipo medico</p>
                    <p>Terminos y condiciones</p>
                    <p>FAQs</p>
                </div>
                <div className={style.servicios}>
                    <h3>Servicios</h3>
                    <p>Tratamientos</p>
                    <p>Membresias</p>
                    <p className={style.transparente}>Transparente</p>
                </div>
                <div className={style.contacto}>
                    <h3>Contacto</h3>
                    <p>11 2598 2200</p>
                    <p>contacto@masdrips.com</p>
                    <p className={style.transparente}>Transparente</p>
                </div>
            </div>

        </div>
    )
}