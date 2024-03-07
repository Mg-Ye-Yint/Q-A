import { Box, Typography } from "@mui/material"

const Question =() => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", height: "94px", width: "100%", alignItems: "center", justifyContent: "center"}}>
            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "content"}}>
             <Typography sx={{color: "#6C6C6C"}}>Username</Typography>
             <Box sx={{width: "53px", height: "24px", display: "flex", flexDirection: "row",  gap: "4px", backgroundColor: "#F7F7F7", alignItems: "center", justifyContent: "center"}}></Box>
             <Typography sx={{fontSize: "13px", color: "#6C6C6C"}}>28</Typography>
             <img alt="" src="/images/Like-Icon.svg"></img>
             <Box></Box>
            </Box>
            
        </Box>
    )
}

export {Question}