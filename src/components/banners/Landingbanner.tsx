
import bannervideo from './videos/hp-services.mp4';
import './banner.css';
import { Box, Card, CardContent, } from '@mui/material';
import CardCover from '@mui/joy/CardCover';
//import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CallbackForm from './callbackForm';

const LandingBannar = () => {

    return (
        <div className="tsm-bannar">
            <Box
                component="ul"
               
            >
                {/*sx={{ top: '179px', height: '600px' }}*/}
                <Card component="li" sx={{ minWidth: 300, flexGrow: 1, maxHeight: 600 }}>
                    <CardCover sx={{ height: '600px' }}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            //poster="https://assets.codepen.io/6093409/river.jpg"
                        >
                            <source
                                src={bannervideo }
                                type="video/mp4"
                            />
                        </video>
                    </CardCover>
                    <CardCover
                        sx={{
                            background:
                                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 600px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 600px)', height:"600px"
                        }}
                    />
                    <CardContent sx={{ justifyContent: 'flex-end', marginLeft:'9%', marginTop: {lg: '-10px', xs:'167px',sm:'0px',md:'60px' } }}>
                        <Typography component="h1"
                            fontSize={{ xs: '30px', sm: '65px'}}
                            textAlign='left'
                            maxWidth='880px'
                            textColor="#fff"
                            
                        >
                            Igniting Excellence in Gas & Electric Maintenance!
                        </Typography>
                        <Typography component="h6"
                            marginTop='0px !important'
                            textColor="#fff"
                            textAlign='left'
                            fontSize={{xs:'15px', sm:'25px' }}
                            mt={{ xs: 12, sm: 18 }}
                        >
                            24/7* with no callout charges
                        </Typography>
                        
                        
                                
                        <CallbackForm />
                            
                    </CardContent>
                </Card>

               
            </Box>

            {/*<ServiceIconButtons />*/}

           
        </div>
        
    );
}

export default LandingBannar;