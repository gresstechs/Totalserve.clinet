import { useEffect } from "react";
import Layout from "../../components/Layout";
import { Box, Container, Grid, Typography } from "@mui/material";
import PageBanner from "../../components/banners/pageBanner";
import ServiceIconButtons from "../../components/banners/serviceIconButtons";
import AppRouteKeys from "../../routing/AppRouteKeys";
import BathroomIcon from '@mui/icons-material/Bathroom';
import ThreeSteps from "../../components/steps/ThreeSteps";
import AccreditationLogo from "../../components/Accreditations/AccreditationLogo";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import KitchenIcon from '@mui/icons-material/Kitchen';
import PriceComponent from "../../components/Prices/priceComponent";

const Plumbing = () => {
    
    useEffect(() => {
        document.title = 'Plumbing';
    }, []);
    
    return (
        <>
           <Layout>
            <Container maxWidth='lg' sx={{
                    maxWidth: '100% !important', paddingLeft: '0px !important', paddingRight:'0px !important'
                }}>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <PageBanner pageTitle="Plumbing" pageDescription="The UK�s leading maintenance company" bannerImage="https://images.unsplash.com/photo-1542773998-9325f0a098d7" />
                        </Grid>

                    </Grid>

                </Container>
                <Container maxWidth='lg' sx={{ marginTop:{ xs: '150px', sm:'60px' } }}>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <Box>
                                <Typography variant="h4" sx={{ padding: "25px" }} >Fast Response Plumbing Service </Typography>
                                <ServiceIconButtons title="Bathroom Plumbing" url={AppRouteKeys.lock} icon={<BathroomIcon sx={{ fontSize: "4.5rem", "&:hover": { color:'red' } }} />} />
                                <ServiceIconButtons title="Boiler Service & Repair" url={AppRouteKeys.plumbing} icon={<LocalFireDepartmentIcon sx={{ fontSize: "4.5rem" }} />} />
                                <ServiceIconButtons title="Appliance Installation" url={AppRouteKeys.drain} icon={<MicrowaveIcon sx={{ fontSize: "4.5rem" }} />} />
                                <ServiceIconButtons title="Tap Repair & Install" url={AppRouteKeys.gasandHeating} icon={<BathroomIcon sx={{ fontSize: "4.5rem" }} />} />
                                <ServiceIconButtons title="Kitchen Plumbing" url={AppRouteKeys.electrics} icon={<KitchenIcon sx={{ fontSize: "4.5rem" }} />} />
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
                <PriceComponent />
           </Layout>
        </>
    );
}

export default Plumbing;