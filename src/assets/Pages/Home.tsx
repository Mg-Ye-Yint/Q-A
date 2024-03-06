import { Box, Typography } from "@mui/material"
import { themeApp } from "../utils/Theme";

const Home = () => {
    return (
        <Box sx={{
            display: "flex", width: "100%", background: "black", justifyContent: "center", marginBottom: "100px",
            [themeApp.breakpoints.down("lg")]: {
                width: "100%", height: "auto"
            }
        }}>
            <Typography sx={{color: "#1C1C1C", fontSize: "32", fontWeight: "bold"}}>
                Start With
            </Typography>
        </Box>
    )
}

export default Home