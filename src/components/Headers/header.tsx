import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Call } from '@mui/icons-material';
import reactLogo from '../../assets/logo.svg'
import './header.css';
import AppRouteKeys, {AppRouteMapLabel } from '../../routing/AppRouteKeys';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';




//const pages = ['Home', 'About us', 'Services', 'Contact us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const HeaderAppBar: React.FC= ()=> {

    //const location = useLocation();
    //const pathnames: string[] = location.pathname.split('/').filter((value) => {
      //  return value;
    //});

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" sx={{ borderBottom: '2px solid', borderBottomColor: '#ED3237' }}>
            <Container className='containerheader'>
                <Toolbar disableGutters>
                    {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
                    <Typography
                        variant="h6"
                        noWrap
                        component='a'
                        href={AppRouteKeys.root}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            backgroundColor: '#354b9c',
                            textDecoration: 'none',
                        }}
                    >
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}>
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
                                display: { xs: 'block', md: 'none', },
                                '& .MuiMenu-paper': {
                                    backgroundColor: '#354b9c',
                                }
                            }}
                        >
                            {AppRouteMapLabel.map((page) => (
                                <MenuItem key={page.path} href={page.path} component="a">
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                            <MenuItem>
                                <Typography textAlign="center" sx={{fontSize:{lg:'40px'}}}><Call /> 0800-808080 </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/}
                    <Typography
                        variant="h5"
                        noWrap
                        component='a'
                        href={AppRouteKeys.root}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, height: '50px' }}>
                        <Link key={AppRouteKeys.aboutUs} to={AppRouteKeys.aboutUs} component={RouterLink} underline="none">
                            <Typography key={AppRouteKeys.aboutUs} sx={{ my: 2, color: 'white', display: 'block', height: '48px', padding: '20px', }}>About Us</Typography> 
                        </Link>
                        <Link key={AppRouteKeys.services} to={AppRouteKeys.services} component={RouterLink} underline="none">
                            <Typography key={AppRouteKeys.services} sx={{ my: 2, color: 'white', display: 'block', height: '48px', padding: '20px', }}>Services</Typography>
                        </Link>
                        <Link key={AppRouteKeys.contact} to={AppRouteKeys.contact} component={RouterLink} underline="none">
                            <Typography key={AppRouteKeys.contact} sx={{ my: 2, color: 'white', display: 'block', height: '48px', padding:'20px', }}>Contact Us</Typography>
                        </Link>
                       
                        {/*{pathnames.map((_value:string, index:number) => {*/}
                        {/*    const to = `/${pathnames.slice(0, index + 1).join(' / ')}` as AppRouteKeys;*/}
                        {/*    const label = AppRouteMap[to].label;*/}

                        {/*    return (label && to !== location.pathname)*/}
                        {/*        ? <Link key={to} component={RouterLink} color="primary" to={to}>{label}</Link>*/}
                        {/*            : <Typography key={to} variant="inherit" color="primary" sx={{ fontSize: '0.8rem !important' }}>{label}</Typography>;*/}
                        {/*})}*/}
                        {/*{pages.map((page) => (*/}
                        {/*    <Button*/}
                        {/*        key={page}*/}
                        {/*        onClick={handleCloseNavMenu}*/}
                        {/*        sx={{*/}
                        {/*            my: 2, color: 'white', display: 'block', height: '48px',*/}
                        {/*            //paddingTop: '4%'*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        {page}*/}
                        {/*    </Button>*/}
                        {/*))}*/}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                my: 2, color: 'white', display: 'block', height: '48px',
                                 paddingLeft: '10%'
                            }}><Call sx={{ backgroundColor: '#ED3237', borderRadius: '50px 50px', marginTop:'6px' }} /> 0800-0040404</Typography>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{
                                mt: '45px', '& .MuiMenu-paper': {
                                    backgroundColor: '#354b9c',
                                }
                            }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default HeaderAppBar;