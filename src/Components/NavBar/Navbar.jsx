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

const drawerWidth = 240;
const navItems = ['Tratamientos', 'Sobre Nosotros', 'FAQs', 'Área de cobertura'];

const Navbar = (props) => {
    const [state, setState] = useState(false);
    const toggleDrawer = () => {
        setState(true);
    };
    const toggleDrawerClose = () => {
        setState(false);
    };
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <div className={style.logoMedia}>
            <Avatar
                alt="Cindy Baker"
                src={LogoDrips}
                variant="square"
                sx={{ width: '50%', height:'100%'}}
            />
            </div>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding >
                        <ListItemButton sx={{ textAlign: 'center', color: 'black' }} >
                            <ListItemText primary={item} sx={item === "Tratamientos"
                                ? { color: '#57BAB3', fontWeight: '700' }
                                : { color: 'black', fontWeight: '700' }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const drawerWidth = 1900;
    const drawerWidthMobile = 330;
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" style={{ backgroundColor: '#FFFF', display: 'flex', justifyContent: 'space-between', alignCente: 'center', height: '80px', paddingTop: '5px' }}>
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
                    >
                        <MenuIcon />
                    </IconButton>
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
                    <Box sx={{ width: '80%', display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                onClick={(e) => { item === "Tratamientos" ? toggleDrawer() : "" }}
                                key={item}
                                sx={item === "Tratamientos"
                                    ? { color: '#57BAB3', fontWeight: '700' }
                                    : { color: 'black', fontWeight: '700' }}
                            >
                                {item}
                            </Button>
                        ))}
                        <Drawer
                            sx={{

                                width: drawerWidth,
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {

                                    width: drawerWidth,
                                    color: 'white',
                                    overflowY: 'auto',
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
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidthMobile },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            {/* <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                    fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                    aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
                    cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
                    at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
                    Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
                    numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
                    asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
                    assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
                    soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
                    ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
                    soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
                    Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
                    delectus quo eius exercitationem tempore. Delectus sapiente, provident
                    corporis dolorum quibusdam aut beatae repellendus est labore quisquam
                    praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
                    deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
                    fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
                    recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
                    debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
                    praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
                    voluptate iure labore, repellendus beatae quia unde est aliquid dolor
                    molestias libero. Reiciendis similique exercitationem consequatur, nobis
                    placeat illo laudantium! Enim perferendis nulla soluta magni error,
                    provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
                    iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
                    Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
                    reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
                    cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
                    consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
                    Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
                    dolores sunt inventore perferendis, aut sapiente modi nesciunt.
                </Typography>
            </Box> */}
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