import { Box, Container, Grid, Typography } from "@mui/material";
import Layout from "../components/Layout";
import PageBanner from "../components/banners/pageBanner";
import ServiceIconButtons from "../components/banners/serviceIconButtons";
import ThreeSteps from "../components/steps/ThreeSteps";
import AccreditationLogo from "../components/Accreditations/AccreditationLogo";
import PlumbingSharpIcon from '@mui/icons-material/PlumbingSharp';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import HandymanIcon from '@mui/icons-material/Handyman';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useEffect } from "react";


const Service = () => {

    useEffect(() => {
        document.title = 'Services';
    }, []);

    return (
        <Layout>
            <Container maxWidth='lg' sx={{
                maxWidth: '100% !important', paddingLeft: '0px !important', paddingRight:'0px !important'
            }}>
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <PageBanner pageTitle="Services" pageDescription="The UK�s leading maintenance company" bannerImage="https://images.unsplash.com/photo-1542773998-9325f0a098d7" />
                    </Grid>

                </Grid>

            </Container>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <Box>
                            <Typography variant="h4" sx={{ padding: "25px" }} >Services we offer </Typography>
                            <ServiceIconButtons title="Locked" url="https:text.com" icon={<LockOpenIcon sx={{ fontSize: "4.5rem", "&:hover": { color: 'red' } }} />} />
                            <ServiceIconButtons title="Plumbing" url="https:text.com" icon={<PlumbingSharpIcon sx={{ fontSize: "4.5rem" }} />} />
                            <ServiceIconButtons title="Drain" url="https:text.com" icon={<HandymanIcon sx={{ fontSize: "4.5rem" }} />} />
                            <ServiceIconButtons title="Gas & Heating" url="https:text.com" icon={<LocalFireDepartmentIcon sx={{ fontSize: "4.5rem" }} />} />
                            <ServiceIconButtons title="Electrics" url="https:text.com" icon={<TipsAndUpdatesIcon sx={{ fontSize: "4.5rem" }} />} />
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
            
        </Layout>
    );
}

export default Service;