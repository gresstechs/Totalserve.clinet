import { Box } from "@mui/material";
import HeaderAppBar from "./Headers/header";
import Footer from "./Footers/footer";

const Layout = ({ children }:{ children:any}) => {

    return (
        <>
            <HeaderAppBar />
            <Box component="main" role="main" sx={{ marginTop: { lg: '182px', sm:'120px' } } } >
                {children}
            </Box>
            <Footer/>
        </>
    );
}

export default Layout;