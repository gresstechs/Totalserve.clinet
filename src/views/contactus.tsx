import { Box, Container, Grid } from "@mui/material";
import Layout from "../components/Layout";



const Contactus = () => {

    return (
        <Layout>
            <Box display="flex" p={2}>
                <Container maxWidth='lg'>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            Contact Us
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </Layout>
    );
}

export default Contactus;