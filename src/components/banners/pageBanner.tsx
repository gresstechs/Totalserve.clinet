import CardContent from "@mui/joy/CardContent"
import CardCover from "@mui/joy/CardCover"
import Typography from "@mui/joy/Typography"
import { Card, } from "@mui/material"
import PageCallbackForm from "./pageCallbackForm"




const PageBanner = ({pageTitle, pageDescription, bannerImage }:{pageTitle:string, pageDescription:string, bannerImage:string }) => {

    return (
        <Card sx={{ minHeight: '350px', position: 'relative', borderRadius:"0" }}>
            <CardCover>
                <img src={`${bannerImage}?auto=format&fit=crop&w=320`}
                    srcSet={`${bannerImage}?auto=format&fit=crop&w=320&dpr=2 2x`}
            loading = "lazy"
            alt = "" />
                </CardCover>
                < CardCover
            sx = {{
                background:
                'linear-gradient(90deg, rgba(255,255,255,0.9) 29%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.5) 100%)',
                    }}
            />
            <CardContent sx={{ justifyContent: 'flex-end', textAlign: "left", marginLeft: "10%", marginTop: { lg: '5%', sm: '10%', xs:'45%' } }}>
                <Typography level="title-lg" textColor="#354b9c" sx={{fontSize:'35px', fontWeight:'bold'} }>
                    {pageTitle}
                 </Typography>
                <Typography textColor="neutral.300">
                    {pageDescription}
                </Typography>
                
               
                        <PageCallbackForm />
                   
                </CardContent>
     </Card>
    );
}

export default PageBanner;