import {Typography } from "@mui/joy";
import { Box, Button, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import first from './images/first.jpg'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CustomerOptions = () => {

    return (
        <Box>
            <ImageList sx={{ height: { SM: '340px', xs:'300px'}, overflow: 'hidden', gap: '0 !important' }}>
                <ImageListItem sx={{ borderRight:  '1px solid red', height: "340px !important", }}>
                    <img
                        src={`${first}?w=248&fit=crop&auto=format` }
                        srcSet={`${first}?auto=format&fit=crop&w=800&dpr=2 2x`}
                        loading="lazy"
                        alt=""
                    />
                    <ImageListItemBar sx={{ height:"340px", background: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(53,75,156,0.5) 23%, rgba(53,75,156,1) 100%), linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(53,75,156,0.5) 23%, rgba(53,75,156,0.5) 100%)' }}
                      

                    />
                    <Box sx={{ position: "absolute", textAlign: "justify", padding: { sm: '40px', xs: '10px' } }}>
                        <Typography component="h2" sx={{ fontSize: {sm:'40px', xs:'15px'}}} >Existing Customer?</Typography>
                        <Typography component="h3" sx={{ fontSize: {sm:'23px', xs:'10px'} }}>Contact our Customer Service team on</Typography>
                        <Typography component="a" href="08080808008080" sx={{ fontSize: { sm: "30px", xs: '12px' }, textDecoration:"none" }}>08080808008080</Typography>
                        <Typography component="h6" sx={{ fontSize: { sm: "18px", xs: '9px' } }}>We are available 24 hours a day, 7 days a week*</Typography>
                    </Box>
                    
                    
                               
                </ImageListItem>
                <ImageListItem sx={{ height: "340px !important",  } }>
                    <img
                        src={`${first}?w=248&fit=crop&auto=format`}
                        srcSet={`${first}?auto=format&fit=crop&w=800&dpr=2 2x`}
                        loading="lazy"
                        alt=""
                    />
                    <ImageListItemBar sx={{ height: '340px', background: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(53,75,156,0.5) 23%, rgba(53,75,156,1) 100%), linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(53,75,156,0.5) 23%, rgba(53,75,156,0.5) 100%)' }}
                        
                    />
                    <Box sx={{ position: "absolute", textAlign: "justify", padding: {sm:'40px', xs:'10px'}}}>
                        <Typography component="h2" sx={{ fontSize: { sm: '38px', xs: '15px' } }} >We are accepting new Priority Accounts</Typography>
                        <Typography component="p" sx={{ fontSize: { sm: '14px', xs: '9px' } }}>HelpBy Maintenance provide professional and reliable services for a range of Priority Accounts, including independent retailers, established department stores, facilities management companies, county councils and police authorities.</Typography>
                        <Button component="a" href="" sx={{ fontSize: { sm: "20px" , xs:'10px'} , textDecoration: "none", marginTop: '20px', backgroundColor: "#ffffff", color: '#354b9c !important',  "&:hover": { backgroundColor: '#00A7E5', color: '#ffffff !important' }, "&:focus": { backgroundColor: '#00A7E5', color: '#ffffff !important' } }}>Find Out More <NavigateNextIcon /> </Button>
                        
                    </Box>

                </ImageListItem>
            </ImageList>
            
            {/*<Card component="li" sx={{ flexGrow: 1, display: "inline-block", height: "400px", width: { sm: "50%", xs: "100%" } }}>*/}
            {/*    <CardCover sx={{ position: "sticky" }}>*/}
            {/*        <img*/}
            {/*            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"*/}
            {/*            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"*/}
            {/*            loading="lazy"*/}
            {/*            alt=""*/}
            {/*        />*/}
            {/*    </CardCover>*/}
                {/*<CardCover sx={{ height: '600px', position: "relative", display: "inline-block" }}>*/}
                {/*    <img src={first} srcSet={first} loading="lazy" />*/}
                    
                {/*</CardCover>*/}
                {/*<CardCover*/}
                {/*    sx={{*/}
                {/*        borderRight:"1px solid red",*/}
                {/*        background:*/}
                {/*            'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(53,75,156,0.5) 23%, rgba(53,75,156,1) 100%), linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(53,75,156,0.5) 23%, rgba(53,75,156,0.5) 100%)', position: "sticky", height: "100%"*/}
                {/*    }}*/}
                {/*/>*/}
                {/*<Typography component="h5" textColor="#fff" mt={{ xs: 12, sm: 18 }} textAlign='left' sx={{ position: "sticky" }}>Existing customer?</Typography>*/}
            {/*    <CardContent sx={{ justifyContent: 'flex-end', position: "sticky" }}>*/}
            {/*        <h3>Existing customer?</h3>*/}
            {/*        <Typography component="h5" textColor="red" mt={{ xs: 12, sm: 18 }} textAlign='left' sx={{ position: "sticky" }}>Existing customer?</Typography>*/}
            {/*        */}{/*<Typography component="h6">Existing customer?</Typography>*/}
            {/*        */}{/*<Typography component="h6">Existing customer?</Typography>*/}
            {/*    </CardContent>*/}
            {/*</Card>*/}
            {/*<Card component="li" sx={{ display: "inline-block", height: "400px", width: { sm: "50%", xs: "100%" } }}>*/}
                
            {/*        <CardCover sx={{ height: '600px', position: "relative", display:"inline-block" }}>*/}
            {/*            <img src={first} srcSet={first} loading="lazy" />*/}

            {/*        </CardCover>*/}
            {/*        <CardCover*/}
            {/*            sx={{*/}
            {/*                background:*/}
            {/*                    'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(53,75,156,0.5) 23%, rgba(53,75,156,0.5) 100%), linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(53,75,156,0.5) 23%, rgba(53,75,156,0.5) 100%)', position: "sticky", height: "100%"*/}
            {/*            }}*/}
            {/*    />*/}
            {/*    <CardContent sx={{ justifyContent: 'flex-end' }}>*/}
            {/*        */}{/*<Typography level="title-lg" textColor="#fff">*/}
            {/*        */}{/*    Yosemite National Park*/}
            {/*        */}{/*</Typography>*/}
            {/*        */}{/*<Typography component="h5" sx={{ position: "sticky" }}>Existing customer?</Typography>*/}
            {/*    </CardContent>*/}
            {/*</Card>*/}
        </Box>
    );
}

export default CustomerOptions;