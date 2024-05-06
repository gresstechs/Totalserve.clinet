import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Button, Grid, Input, InputAdornment } from '@mui/material';
import reactLogo from '../../assets/logo.svg'
import './footer.css'
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CustomerOption from '../CustomerOptions/CustomerOption';
import Quotation from '../Quotations/Quotation';
import Intro from '../Intros/Intro';
import AppRouteKeys from '../../routing/AppRouteKeys';
function Copyright() {
    return (
        <Typography variant="h6" component="h6" align="center">
            {'Copyright � '}
            TotalServe &nbsp;
            {/*<Link color="inherit" href="https://totalserve.co.uk/">*/}
            {/*    Total Serve*/}
            {/*</Link>{' '}*/}
            {  new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

//interface FooterProps {
//    description: string;
//    title: string;
//}

export default function Footer() {
    return (
        <>
        <Container maxWidth='lg' sx={{
            maxWidth: '100% !important', paddingLeft: '0 !important', paddingRight: '0 !important'
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <CustomerOption />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Quotation />
                </Grid>
                <Grid item xs={12} sm={12} sx={{ backgroundColor: '#00A7E5' }}>
                    <Intro />
                </Grid>
            </Grid>

        </Container>
        <Box
            component="footer"
            sx={{ p: 6, marginBottom: '0', backgroundColor: '#354b9c' }} >
            <Container maxWidth='lg' sx={{ backgroundColor: '#354b9c', color: 'white', textAlign: 'justify', borderBottom:'1px solid #ffffff op', }} className="container">
                <Grid container>
                    <Grid item xs={12} sm={12 }>
                        <div className="subscriptioncontainer">
                            <h2>Get Exclusive Offers And Updates </h2>
                            <Input placeholder="Email Address..." type="text" className="emailsubscription" startAdornment={
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            } />
                            <Button variant="contained" endIcon={<SendIcon />} className="emailsubmit">
                                Send
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={3}>
                        <Typography
                            
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex' },
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
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <ul>
                            <li><Link href={AppRouteKeys.ourTeam}  >
                                Our Team
                            </Link></li>
                            <li><Link href={AppRouteKeys.careers}>
                                Careers
                            </Link></li>
                            <li><Link href={AppRouteKeys.contact}>
                                Contact Us
                            </Link></li>
                            <li><Link href={AppRouteKeys.ourStory}>
                                Our Story
                            </Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6"  gutterBottom>
                           Quick Links
                        </Typography>
                        <ul>
                            <li><Link href={AppRouteKeys.termsofuse}>
                                Terms of Use
                            </Link></li>
                            <li><Link href={AppRouteKeys.privacy} >
                                Privacy Policy
                            </Link></li>
                            <li><Link href={AppRouteKeys.faqs}>
                                FAQs
                            </Link></li>
                            <li><Link href={AppRouteKeys.contactSupport}>
                                Contact Support
                            </Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6"  gutterBottom>
                            Service
                        </Typography>
                        <ul>
                            <li><Link href={AppRouteKeys.plumbing}>
                               Plumbing
                            </Link></li>
                            <li><Link href={AppRouteKeys.gasandHeating} >
                                Gas & Heating
                            </Link></li>
                            <li><Link href={AppRouteKeys.drain}>
                                Drains
                            </Link></li>
                            <li><Link href={AppRouteKeys.electrics}>
                                Electrics
                            </Link></li>
                        </ul>
                    </Grid>
                    
                </Grid>
            </Container>
            <Container sx={{ color: 'white' } }>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={8}>
                        <ul className="socilmedialist">
                            <li className="socialmediaitem">
                                <Typography component='a' href="https://www.facebook.com/profile.php?id=61552143557597" target="_black">
                                    <FacebookIcon/>
                                </Typography>
                            </li>
                            <li className="socialmediaitem">
                                <Typography>
                                    <InstagramIcon />
                                </Typography>
                            </li>
                            <li className="socialmediaitem">
                                <Typography>
                                    <TwitterIcon />
                                </Typography>
                            </li>
                            <li className="socialmediaitem">
                                <Typography>
                                    <LinkedInIcon />
                                </Typography>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Copyright />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
    )
}