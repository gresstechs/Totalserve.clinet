//import { Card, CardCover } from "@mui/joy";
import { CardCover, Typography } from "@mui/joy";
import {Card, Box, CardContent, Container, Grid, Button, styled, Modal } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from "react";
import CallbackForm from "../banners/callbackForm";

const PriceComponent =() =>
{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const StyledButton = styled(Button)`
              background-color: grey;
              color: #fff;
              padding: 6px 12px;
             // width:200px;
              font-weight:bold;
              &:hover {
                background-color: #354b9c;
                color: #fff
               // width: 210px
              }
              &:focus {
                background-color: #354b9c;
                color:#fff;
              }`;

    return(
        <>
          <Container maxWidth='lg' sx={{
                maxWidth: '100% !important', paddingLeft: '0 !important', paddingRight: '0 !important'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <Box>
                        <Card sx={{position:'relative', height: {xs:'auto', sm:'230px'}, color:"#FFFFFF"}}>
                        <CardCover>
                                <img src={`https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320`}
                                    srcSet={`https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x`}
                            loading = "lazy"
                            alt = "" />
                        </CardCover>
                        < CardCover
                            sx = {{
                                background:
                                'linear-gradient(90deg, rgba(53,75,156,0.6447099958147322) 0%, rgba(53,75,156,0.941628763321735) 100%, rgba(53,75,156,1) 100%);',
                                    }}
                            />
                            <CardContent component="div" sx={{display: {xs:'block', lg:'inline-block'}, width:{xs:'100%', lg:'45%'}, marginTop:"1%"}}>
                                <Typography component="h6" fontSize="32px">
                                    
                                    Bathroom plumbing from
                                   
                                    
                                </Typography>
                                <Typography component="p">
                                    <Typography component="span" sx={{fontSize:"50px", fontWeight:"bold"}}>£79 </Typography>
                                  <Typography component="span"> per half hour + VAT Subject to site survey</Typography> 
                                </Typography>
                            </CardContent>
                            <CardContent component="div" sx={{display: {xs:'block', lg:'inline-block'}, width:{xs:'100%', lg:'45%'}, marginTop:"1%"}}>
                                <Typography component="h6" fontSize="32px">
                                    Call us now on
                                </Typography>
                                <Typography component="p">
                                <Typography component="span" sx={{fontSize:"50px", fontWeight:"bold"}}> 0330 017 4838 </Typography>
                                 
                                        
                                </Typography>
                                <Typography component="p">
                                    or <StyledButton sx={{ backgroundColor: "#00A7E5", borderRadius: "10px 10px", color: '#ED3237', maxWidth:"230px" }} onClick={handleOpen}>Request A Callback<NavigateNextIcon /></StyledButton>
                                 </Typography>
                                 <Modal open={open}
                                    onClose={handleClose}
                                    sx={{ top: '8%', left: { sm: '25%', xs: 0 }, maxWidth: { sm: '653px', xs: '100%' }, height: '500px', backgroundColor: 'white', textAlign: 'center', background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 23%, rgba(255,255,255,1) 100%)' }}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description">
                                    <Box>

                                        <CallbackForm />
                                    </Box>

                                </Modal>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
             </Grid>
          </Container>
        </>
    );
}
export default PriceComponent;