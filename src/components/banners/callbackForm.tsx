import { Box, Button, Card, CardContent, FormControl, FormGroup, Input, InputLabel, Modal, Typography, styled } from "@mui/material";
import { useState } from "react";
import { addEnquiry } from "../../hooks/enquiryService";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface Enquiry {
    Name: string,
    Phone: string,
    Address: string,
    PostCode: string,
    MessageDescription: string
}

const CallbackForm = () => {
   
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
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
       const [name, setName] = useState('');
       const [phone, setPhone] = useState('');
       const [address, setAddress] = useState('');
       const [postCode, setPostCode] = useState('');
       const [messageDescription, setMessageDescription] = useState('');

       const handleName =(event:any)=>{
         setName(event.target.value);
       };
       const handlePhone =(event:any)=>{
        setPhone(event.target.value);
      };
      const handleAddress =(event:any)=>{
        setAddress(event.target.value);
      };
      const handlePostCode =(event:any)=>{
        setPostCode(event.target.value);
      };
      const handleMessage =(event:any)=>{
        setMessageDescription(event.target.value);
      };
     
     const handleSubmit =async (event:any) =>{
        event.preventDefault();
        let enquiry: Enquiry ={
            Address: address,
            Name: name,
            MessageDescription : messageDescription,
            Phone: phone,
            PostCode: postCode
        };
          await addEnquiry(enquiry);
          setOpen(false);
          
     }

    return (

        <>
        <StyledButton sx={{ backgroundColor: "#00A7E5", borderRadius: "50px", marginLeft: '3%', right: { sm: '37%', xs: '16%', lg: '42%', md: '42%' }, color: '#ED3237' }} onClick={handleOpen}>Request A Callback<NavigateNextIcon /></StyledButton><Modal open={open}
            onClose={handleClose}
            sx={{ top: '8%', left: { sm: '25%', xs: 0 }, maxWidth: { sm: '653px', xs: '100%' }, height: '500px', backgroundColor: 'white', textAlign: 'center', background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 23%, rgba(255,255,255,1) 100%)' }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box>
                <form onSubmit={handleSubmit}>
                    <Card>
                        <Typography id="modal-modal-title" component="h2" sx={{ color: '#354b9c', marginTop: "12px", fontSize: "2em" }}>
                            Request A Callback
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, color: "#354b9c" }}>
                            Complete the form below to receive an immediate callback.
                        </Typography>
                        <CardContent>
                            <FormGroup>
                                <FormControl sx={{ color: '#354b9c', marginTop: "20px", }}>
                                    <InputLabel htmlFor="name" sx={{ color: '#354b9c' }}>Name</InputLabel>
                                    <Input id="name" type="text" value={name} onChange={handleName} placeholder="enter your name" />
                                </FormControl>
                                <FormControl sx={{ marginTop: "20px" }}>
                                    <InputLabel htmlFor="phone">Phone</InputLabel>
                                    <Input id="phone" type="phone" value={phone} onChange={handlePhone} placeholder="enter your phone number" />
                                </FormControl>
                                <FormControl sx={{ marginTop: "20px" }}>
                                    <InputLabel htmlFor="address">Address</InputLabel>
                                    <Input id="address" value={address} onChange={handleAddress} placeholder="enter your address" />
                                </FormControl>
                                <FormControl sx={{ marginTop: "20px" }}>
                                    <InputLabel htmlFor="postcode">Postcode</InputLabel>
                                    <Input type="postcode" value={postCode} onChange={handlePostCode} id="postcode" placeholder="enter your postcode" />
                                </FormControl>
                                <FormControl sx={{ marginTop: "20px" }}>
                                    <InputLabel htmlFor="message">Message</InputLabel>
                                    <Input type="text" rows="4" value={messageDescription} onChange={handleMessage} id="message" placeholder="enter your message" />
                                </FormControl>

                                <FormControl sx={{ marginTop: "20px" }}>
                                    <Button type="submit" sx={{ color: "white", backgroundColor: "#354b9c", width: "200px", margin: "5%" }}>Submit</Button>
                                </FormControl>
                            </FormGroup>
                        </CardContent>

                    </Card>
                </form>
            </Box>
        </Modal>
        </>
    );
}

export default CallbackForm;