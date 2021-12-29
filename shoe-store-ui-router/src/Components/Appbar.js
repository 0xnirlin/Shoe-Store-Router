import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = ['Products'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Appbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <div>
            <AppBar position="static"  >
                <Container maxWidth="x2" className='nav'>
                    <Toolbar disableGutters >
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            Shoe Store
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                           
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                  <Link to = "/" className='link'>
                                    <MenuItem key="home" onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" color='black' fontSize='larger'>Home</Typography>
                                    </MenuItem>
                            </Link> 
                            <Link to = "/products" className='link'>
                                    <MenuItem key="products" onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" color = 'black'  fontSize='larger'>Products</Typography>
                                    </MenuItem>
                            </Link> 
                    
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            ShoeStore
                        </Typography>
                        <div className='menu'>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}  >
                                {/* <Link> */}
                                <Link to = "/" className='link'>
                                    <Button
                                        key="home"
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block', fontSize: 'md' }}
                                    >
                                        {"Home"}
                                    </Button>
                                </Link>
                                <Link to = "/products" className='link'>
                                    <Button
                                        key="products"
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block', fontSize: 'md' }}
                                    >
                                        {"Products"}
                                    </Button>
                                </Link>

                            </Box>

                        </div>

                        <Box sx={{ flexGrow: 0 }}>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
