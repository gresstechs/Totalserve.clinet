import { Box, Card, CardContent, Typography } from "@mui/material";
//import { first } from './images/first.jpg';

const Intro = () => {

    return (
        <Box>
            <Card sx={{ backgroundColor: '#00A7E5' }}>
                <CardContent>
                    <Typography component="p">
                        HelpBy leads the way in offering both scheduled and on-demand maintenance services to residences and companies across the entire country. Our expertise covers a wide array of services, encompassing plumbing, locksmith services, gas and heating, electrical work
                    </Typography>
                </CardContent>
            </Card>
           {/* <Card>*/}
                {/*<CardMedia*/}
                {/*    component="img"*/}
                {/*    height="194"*/}
                {/*    image={`${first}?w=248&fit=crop&auto=format`}*/}
                {/*    alt="Paella dish"*/}
                {/*/>*/}
                {/*<img src={`${first}?w=248&fit=crop&auto=format`} srcSet={first} />*/}
            {/*    <CardContent>*/}
                    
            {/*    </CardContent>*/}
            {/*</Card>*/}
        </Box>
    );
}

export default Intro;