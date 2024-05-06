import { Box, Card, CardContent, Typography } from "@mui/material";
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';
import RemoveShoppingCartTwoToneIcon from '@mui/icons-material/RemoveShoppingCartTwoTone';
import AirportShuttleTwoToneIcon from '@mui/icons-material/AirportShuttleTwoTone';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';


const Quotation = () => {
    return (
        <Box>
            <Card sx={{ display: "inline-block", width: { sm: "20%", xs: "50%" }, maxHeight: { sm: "262px", xs: "340px" }, boxShadow: "none",}}>
                <EngineeringTwoToneIcon sx={{ fontSize: '6rem', color: '#00A7E5' }} />
                <CardContent>
                    <Typography component="h6" sx={{ color: "#354b9c", fontSize: '1.5rem', paddingBottom:'10px' }}> Free quotations</Typography>
                <Typography component="p"> Receive your free quote and advice from one of our expert advisers today.</Typography>
            </CardContent>
            </Card>
            <Card sx={{ display: "inline-block", width: { sm: "20%", xs: "50%" }, maxHeight: { sm: "262px", xs: "340px" }, boxShadow: "none",  }}>
                <RemoveShoppingCartTwoToneIcon sx={{ fontSize: '6rem', color: '#00A7E5' }} />
                <CardContent>
                    <Typography component="h6" sx={{ color: "#354b9c", fontSize: '1.5rem', paddingBottom: '10px' }}> No call-out charges</Typography>
                    <Typography component="p"> We do not believe in unnecessary call-out charges or unexpected bills.</Typography>
                </CardContent>
            </Card>
            <Card sx={{ display: "inline-block", width: { sm: "20%", xs: "50%" }, maxHeight: { sm: "262px", xs: "340px" }, boxShadow: "none", }}>
                <AirportShuttleTwoToneIcon sx={{ fontSize: '6rem', color: '#00A7E5' }} />
                <CardContent>
                    <Typography component="h6" sx={{ color: "#354b9c", fontSize: '1.5rem', paddingBottom: '10px' }}> Fast response</Typography>
                    <Typography component="p">Providing a rapid emergency response, we aim to resolve your problem quickly and efficiently.</Typography>
                </CardContent>
            </Card>
            <Card sx={{ display: "inline-block", width: { sm: "20%", xs: "50%" }, maxHeight: { sm: "262px", xs: "340px" }, boxShadow: "none", }}>
                <BusinessTwoToneIcon sx={{ fontSize: '6rem', color: '#00A7E5' }} />
                <CardContent>
                    <Typography component="h6" sx={{ color: "#354b9c", fontSize: '1.5rem', paddingBottom: '10px' }}> Home & business</Typography>
                    <Typography component="p"> Effectively helping homes and businesses nationwide for almost 10 years.</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Quotation;