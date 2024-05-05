import { Container, Grid } from "@mui/material";
import Layout from "../components/Layout";
import CustomerOption from '../components/CustomerOptions/CustomerOption';
import Quotation from "../components/Quotations/Quotation";
import Intro from "../components/Intros/Intro";
import PageBanner from "../components/banners/pageBanner";

const AboutUs: React.FC = () => {

    return (
        <>
        <Layout>
                <Container maxWidth='lg' sx={{
                    maxWidth: '100% !important', paddingLeft: '0px !important', paddingRight: '0px !important'
                }}>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <PageBanner pageTitle="About Us" pageDescription="The UK�s leading maintenance company" bannerImage="https://images.unsplash.com/photo-1542773998-9325f0a098d7" />
                        </Grid>

                    </Grid>

                </Container>
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
        </Layout>
            </>
    );
}

export default AboutUs;