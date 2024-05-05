import { useEffect } from "react";
import Layout from "../../components/Layout";
import { Container, Grid } from "@mui/material";
import PageBanner from "../../components/banners/pageBanner";


const Lock =() =>{
   
    useEffect(() => {
        document.title = 'Lock';
    }, []);

    return(
        <>
          <Layout>
                <Container maxWidth='lg' sx={{
                    maxWidth: '100% !important', paddingLeft: '0px !important', paddingRight: '0px !important'
                }}>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <PageBanner pageTitle="Locked" pageDescription="The UK�s leading maintenance company" bannerImage="https://images.unsplash.com/photo-1542773998-9325f0a098d7" />
                        </Grid>

                    </Grid>

                </Container>
          </Layout>
        </>
    );

}

export default Lock;