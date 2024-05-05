import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout';
import LandingBannar from '../components/banners/Landingbanner';
import ThreeSteps from '../components/steps/ThreeSteps';
import ServiceIconButtons from '../components/banners/serviceIconButtons';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccreditationLogo from '../components/Accreditations/AccreditationLogo';
import PlumbingSharpIcon from '@mui/icons-material/PlumbingSharp';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import HandymanIcon from '@mui/icons-material/Handyman';
import AppRouteKeys from '../routing/AppRouteKeys';

const Home: React.FC = () => { 

    return (
        <>
            <Layout>
                <Container maxWidth='lg' sx={{ maxWidth:'100% !important'
                    }}>
                        <Grid container>
                            <Grid item xs={12} sm={12}>
                                <LandingBannar />
                            </Grid>
                           
                        </Grid>

                </Container>
                <Container maxWidth='lg' sx={{ marginTop:{ xs: '150px', sm:'60px' } }}>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <Box>
                                <Typography variant="h4" sx={{ padding: "25px" }} >Services we offer </Typography>
                                <ServiceIconButtons title="Locked" url={AppRouteKeys.lock} icon={<LockOpenIcon sx={{ fontSize: "4.5rem", "&:hover": { color:'red' } }} />} />
                                <ServiceIconButtons title="Plumbing" url={AppRouteKeys.plumbing} icon={<PlumbingSharpIcon sx={{ fontSize: "4.5rem" }} />} />
                                <ServiceIconButtons title="Drain" url={AppRouteKeys.drain} icon={<HandymanIcon sx={{ fontSize: "4.5rem" }} />} />
                                <ServiceIconButtons title="Gas & Heating" url={AppRouteKeys.gasandHeating} icon={<LocalFireDepartmentIcon sx={{ fontSize: "4.5rem" }} />} />
                                <ServiceIconButtons title="Electrics" url={AppRouteKeys.electrics} icon={<TipsAndUpdatesIcon sx={{ fontSize: "4.5rem" }} />} />
                            </Box>
                            
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <ThreeSteps />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Box>
                                <AccreditationLogo />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                {/*<Container maxWidth='lg' sx={{*/}
                {/*    maxWidth: '100% !important', paddingLeft:'0 !important', paddingRight:'0 !important'*/}
                {/*}}>*/}
                {/*    <Grid container spacing={2 }>*/}
                {/*        <Grid item xs={12} sm={12}>*/}
                {/*            <CustomerOption />*/}
                {/*        </Grid>*/}
                {/*        <Grid item xs={12} sm={12}>*/}
                {/*            <Quotation />*/}
                {/*        </Grid>*/}
                {/*        <Grid item xs={12} sm={12} sx={{ backgroundColor:'#00A7E5'} }>*/}
                {/*            <Intro />*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}

                {/*</Container>*/}
            </Layout>

            </>
    );
}
export default Home;