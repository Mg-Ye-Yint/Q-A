import { Box, Typography } from "@mui/material"
import "./Questions.css"
import { Question } from "../components/Question"

const Questions =()=>{
    return(
        <Box sx={{
            width: "100%",  
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            height: "100vh",
          }}>
            <Box sx={{ width: "100%", height: "112px", backgroundColor: "#D9D9D9", marginTop: "72px", overflow: "hidden"}}>
              <Typography sx={{color: "#1C1C1C", fontSize: "32px", fontWeight: "bold", marginTop: "23px", marginLeft: "16px", marginBottom:"0px"}}>CNX Tech Week</Typography>
              <Typography sx={{color: "#6C6C6C", fontSize: "16px", marginLeft: "18px"}}>Mr. Lorem polem</Typography>
            </Box>
            <Box sx={{height: "64px", width: "398px", border: "1px solid #9C9C9C", backgroundColor: "white", borderRadius: "14px", marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Typography>+ Start Your Question</Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "row", marginTop: "38px", gap: "107px"}}>
            <Box sx={{display: "flex", flexDirection: "row", gap: "8px"}}>
             <Typography sx={{height: "47px", width: "89px", fontSize: "16px", color: "#1C1C1C", fontWeight: "600", borderBottom: "1px solid #1C1C1C", textAlign: "center"}}>Popular</Typography>
             <Typography sx={{height: "47px", width: "82px",fontSize: "16px", color: "#1C1C1C", textAlign: "center"}}>Recent</Typography>
             </Box>
             <Typography sx={{height: "47px", width: "112px",fontSize: "16px", color: "#6C6C6C", textAlign: "center"}}>13 questions</Typography>
            </Box>
            <Question/>
          </Box>
    )
}
export {Questions}