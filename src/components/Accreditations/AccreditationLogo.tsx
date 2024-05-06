import { Card, CardContent } from "@mui/material";
import SafeGas from './images/gas-safe-logo.png';
import WhiteSafeGas from './images/Gas-Safe-Logo.jpg';
import  './Accreditation.css'

const AccreditationLogo = () => {

    return (
        <>
            <Card sx={{ display: "inline-flex", border: "none", width:"25%" }}>
                <CardContent>
                    <img src={SafeGas} />
            </CardContent>
        </Card>
            <Card sx={{ display: "inline-flex", border: "none", width: "25%" }}>
            <CardContent>
                    <img src={WhiteSafeGas} />
            </CardContent>
            </Card>
            <Card sx={{ display: "inline-flex", border: "none", width: "25%",  }}>
            <CardContent>
                <img src={SafeGas} />
            </CardContent>
        </Card>
       </>
    );
}

export default AccreditationLogo;