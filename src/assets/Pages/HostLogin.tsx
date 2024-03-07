import { Box, Typography } from "@mui/material"
import { themeApp } from "../../../utils/Theme"
import { useState } from "react";

const HostLogin = () =>{

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: any) => {
      setInputValue(event.target.value); 
    };

    return(
       <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "375px",
        position: 'relative',
        [themeApp.breakpoints.down("lg")]: {
          width: "100%", height: "auto"
      }
      }}>
        <img alt="" src="/images/Profile-Avatar.svg" style={{height: "100px", width: "100px", marginTop: "188px"}}></img>
        <Typography sx={{color: "#1C1C1C", fontSize: "32px", fontWeight: "bold", marginTop: "32px" }}>CNX Tech Week</Typography>
        <Typography sx={{color: "#6C6C6C", fontSize: "16px"}}>Mr. Lorem polem</Typography>
        <Box sx={{display: "relative", width: "100%", marginTop: "32px"}}>

<input className="code-input-box" type="text" placeholder="What should everyone call you?" style={{width: "calc(100% - 30px)", height: "59px", fontSize: "16px", fontWeight: "500", 
borderRadius: "14px", marginTop: "26px", border: "1px solid #F1F1F1", color: "#1C1C1C", overflow: 'hidden', padding: "0PX 14px"
}} value={inputValue}
onChange={handleInputChange}/> 
{inputValue.trim() !== '' && (
<img
  src="/images/Delete-Code.svg"
  style={{ position: 'absolute', right: '48px', top: "50%", transform: 'translateY(-50%)', cursor: 'pointer' }}
  alt="Delete icon"
/>
)}
</Box>

<Box
  sx={{
    display: "flex",
    width: "100%",
    height: "59px",
    bgcolor: inputValue.trim() !== ''? "#1C1C1C" :"#9C9C9C",
    marginTop: "446px",
    borderRadius: "14px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "60px",
    position: "relative"
  }}
>
  <Typography sx={{ fontSize: "16px", color: "white" }}>
    Join the event
  </Typography>
</Box>
       </Box>
    )
}

export {HostLogin}