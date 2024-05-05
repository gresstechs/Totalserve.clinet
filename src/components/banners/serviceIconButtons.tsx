import { Card, Typography } from "@mui/material";
//import LockIcon from '@mui/icons-material/Lock';

import { CardContent } from "@mui/joy";



const ServiceIconButtons = ({ title, url, icon }: { title:string, url:string, icon:React.ReactElement }) => {

    return (
        <Card sx={{ backgroundColor: "#354b9c", display: "inline-block", width: { sm: "15%", xs: '48%' }, margin: "1px", textDecoration:"none", "&:hover": { backgroundColor: '#00A7E5', color: 'red !important', cursor: "pointer" } }}>
            <CardContent>
                <Typography component='a' sx={{ minHeight: "100px", minWidth: "100px", cursor: "pointer", outline: 'none', textDecoration: "none", "&:hover": { backgroundColor: '#00A7E5', color: 'red !important', cursor: "pointer" } }} href={url}>
                    <Typography component="div">
                        <Typography component="span" sx={{ display: "block" }}>
                            {icon }
                        </Typography>
                        <Typography component="span" sx={{ display: "block", "&:hover": { color: 'red' } }} >
                            {title}
                        </Typography>

                    </Typography>

                </Typography>
            </CardContent>
        </Card>
       
    )
};

export default ServiceIconButtons;