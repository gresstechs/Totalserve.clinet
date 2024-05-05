
import {CardContent } from "@mui/joy";
import { Box, Card, Link, Typography } from "@mui/material";
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EngineeringIcon from '@mui/icons-material/Engineering';

const ThreeSteps = () => {

    return (
        <Box component="div" >
            <Typography component="h1" variant="h4" sx={{ padding: "25px" }}> Solving your problem in 3 simple steps</Typography>
            <Card sx={{ display: "inline-block", width: 330, margin: "20px", boxShadow:0 }}>
               
                <PhoneCallbackIcon sx={{ color: '#354b9c', fontSize:'3.5rem' }} />
                <CardContent>
                    <Typography component="h6" variant="h6" sx={{ color: '#354b9c' }}>
                      Get in touch
                    </Typography>
                    <Typography sx={{ textAlign: 'center', margin: "20px" }}>
                        Give us a call on <Link sx={{ color: '#354b9c !important' }}>0800-00-7777</Link> Or &nbsp;
                        <Link sx={{ color: '#354b9c !important' }}>request a call-back</Link> to get your free no-obligation quote.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ display: "inline-block", width: 330, margin: "20px", boxShadow: 0 }}>

                <CalendarMonthIcon sx={{ color: '#354b9c', fontSize: '3.5rem' }} />
                <CardContent>
                    <Typography component="h6" variant="h6" sx={{ color: '#354b9c' }}>
                        Select an appointment
                    </Typography>
                    <Typography sx={{ textAlign: 'center', margin: "20px" }}>
                        We will confirm your appointment and arrange one of our experts to come out to assess the issue.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ display: "inline-block", width: 330, margin: "20px", boxShadow: 0 }}>

                <EngineeringIcon sx={{ color: '#354b9c', fontSize: '3.5rem' }} />
                <CardContent>
                    <Typography component="h6" variant="h6" sx={{ color: '#354b9c' }}>
                        We're on our way
                    </Typography>
                    <Typography sx={{ textAlign: 'center', margin: "20px" }}>
                        One of our expert team will be with you ASAP, to resolve your issue as quickly and efficiently as we can.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ThreeSteps;