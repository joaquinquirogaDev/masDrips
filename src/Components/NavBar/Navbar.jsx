import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Navbar.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoDrips from '../Imagenes/logo.png'
import Avatar from '@mui/material/Avatar';
import MenuTop from '../MenuTop/MenuTop';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import WeightLoss from '../WeightLoss/WeightLoss';
import { useNavigate } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
const drawerWidth = 240;
const navItems = ['Tratamientos', 'Sobre Nosotros', 'FAQs', 'Área de cobertura'];

const Navbar = (props) => {
    const navigate = useNavigate()
    const [state, setState] = useState(false);
    const theme = useTheme();
    const [openDrips, setopenDrips] = useState(false);
    const [reven, setReven] = useState(false);
    const [ener, setEner] = useState(false);
    const [otros, setOtros] = useState(false);

    const toggleDrawer = () => {
        setState(true);
    };
    const toggleDrawerClose = () => {
        setState(false);
    };
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = (enlace) => {
        setOpen(false);
        navigate(`/${enlace}`)
    };

    const handleClickTutoresResponsables = () => {
        setopenDrips(!openDrips);
    }
    const handleClickReven = () => {
        setReven(!reven);
    }

    const handleClickEner = () => {
        setEner(!ener);
    }
    const handleClickOtros = () => {
        setOtros(!otros);
    }


    const [openDeudas, setOpenDeudas] = React.useState(false);

    const handleClickDeudas = () => {
        setOpenDeudas(!openDeudas);
    };

    const [opene, setOpene] = React.useState(false);

    const handleClickes = () => {
        setOpene(!opene);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <div className={style.logoMedia}>
                <Avatar
                    alt="Cindy Baker"
                    src={LogoDrips}
                    variant="square"
                    sx={{ width: '50%', height: '100%' }}
                />
                <DrawerHeader >
                    <IconButton onClick={handleDrawerClose} >
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
            </div>
            <Divider />
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                sx={{ display: 'flex', flexDirection: 'column' }}
            >
                <ListItemButton sx={{ textAlign: 'center', color: 'black' }} onClick={handleClickTutoresResponsables}>
                    <ListItemText primary="Tratamientos" sx={{ color: '#57BAB3', fontWeight: '700' }} />
                    {openDrips ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openDrips}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 17 }} onClick={handleClickDeudas}>
                            <ListItemText primary="Para adelgazar" />
                            {openDeudas ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openDeudas} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Food Poisonning" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openDeudas} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="C-Suite" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openDeudas} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Cleanse" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openDeudas} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Super Cleanse" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={openDeudas} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Powerhouse" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Collapse>
                <Collapse in={openDrips}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 17 }} onClick={handleClickReven}>
                            <ListItemText primary="Rejuvenecedores" />
                            {reven ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={reven} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Jetlag" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={reven} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Hangover" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={reven} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Flawless" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={reven} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Her" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={reven} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Super Drip" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Collapse>
                <Collapse in={openDrips}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 17 }} onClick={handleClickEner}>
                            <ListItemText primary="Energizantes" />
                            {ener ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={ener} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Autoimmune" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={ener} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Super Immunity" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={ener} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Hidration" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={ener} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Stress Relief" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={ener} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Vit D Immunity" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Collapse>
                <Collapse in={openDrips}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 17 }} onClick={handleClickOtros}>
                            <ListItemText primary="Otros" />
                            {otros ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={otros} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Migraine" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={otros} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Myers Cocktail" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={otros} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="NAD +" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={otros} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => navigate("/listarDeudas")} >
                                    <ListItemText primary="Super NAD +" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Collapse in={otros} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 20 }} onClick={() => handleDrawerClose("weight")}>
                                    <ListItemText primary="Weight Loss" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Collapse>
                <ListItemButton sx={{ textAlign: 'center', color: 'black' }} onClick={() => handleDrawerClose("aboutUs")}>
                    <ListItemText primary="Sobre Nosotros" sx={{ color: 'black', fontWeight: '700' }} />
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center', color: 'black' }} >
                    <ListItemText primary="FAQs" sx={{ color: 'black', fontWeight: '700' }} />
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center', color: 'black' }} onClick={() => handleDrawerClose("map")}>
                    <ListItemText primary="Área de cobertura" sx={{ color: 'black', fontWeight: '700' }} />
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center', color: 'black' }} onClick={() => handleDrawerClose("info")}>
                    <ListItemText primary="Info" sx={{ color: 'black', fontWeight: '700' }} />
                </ListItemButton>
            </List>
        </Box>
    );
    const drawerWidth = 1200;
    const drawerWidthMobile = 330;
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" style={{ backgroundColor: '#FFFF', display: 'flex', justifyContent: 'space-between', alignCente: 'center', height: '80px', paddingTop: '5px', width: '100%'}}>
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerOpen}
                        sx={{ mr: 1, display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' }, color: 'black' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, width: '15%', display: { xs: 'block', sm: 'block' } }}
                    >
                        <Avatar
                            alt="Cindy Baker"
                            src={LogoDrips}
                            variant="square"
                            sx={{ width: '120px', cursor: 'pointer'}}
                            onClick={() => navigate("/")}
                        />
                    </Typography>
                    <Box sx={{ width: '70%', display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }}}>
                        <Button
                            onClick={(e) => { toggleDrawer() }}
                            sx={{ color: '#57BAB3', fontWeight: '700' }}
                        >

                            Tratamientos
                        </Button>
                        <Button
                            onClick={() => navigate("/aboutUs")}
                            sx={{ color: 'black', fontWeight: '700' }}
                        >

                            SOBRE NOSOTROS
                        </Button>
                        <Button
                            sx={{ color: 'black', fontWeight: '700' }}
                        >

                            FAQS
                        </Button>
                        <Button
                            onClick={() => navigate("/map")}
                            sx={{ color: 'black', fontWeight: '700' }}
                        >

                            Área de cobertura
                        </Button>
                        <Drawer

                            sx={{
                                display: { xs: 'none', md: 'block' },
                                overflow: 'auto',
                                width: drawerWidth,
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {

                                    width: drawerWidth,
                                    color: 'red',
                                    overflowY: 'auto',
                                    overflowX: 'auto',
                                    margin: '0 auto',
                                    borderRadius: '0 0 5px 5px'
                                },
                            }}
                            anchor='top'
                            open={state}
                            onOpen={() => toggleDrawer()}


                        >
                            <div className={style.box}>
                                <div className={style.boxButton}>
                                    <IconButton onClick={toggleDrawerClose} className={style.icon} disableFocusRipple>
                                        <HighlightOffSharpIcon sx={{ color: '#73D8D1' }} />
                                    </IconButton>
                                </div>
                                {<MenuTop state={state} toggleDrawer={() => toggleDrawer()} setState={setState} toggleDrawerClose={() => toggleDrawerClose()} />}
                            </div>
                        </Drawer>
                    </Box>

                    <Container className={style.ContainerButton}>
                        <Button
                            className={style.ButtonReservar}
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                            variant="contained"

                        >
                            Reservá tu cita
                        </Button>
                    </Container>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="persistent"
                    open={open}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidthMobile },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            {/* <Box component="main" sx={{ p: 1}}>
            </Box>  */}
        </Box>
    );
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar;