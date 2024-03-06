import { Box, Typography } from "@mui/material";
import "./Home.css";
import AudienceChooseCard from "./components/AudienceChooseCard";
import HostChooseCard from "./components/HostChooseCard";
import { useState } from "react";
// import { useRole } from "../../../store/store";
// import themeApp from "/Users/HP/OneDrive/Documents/GitHub/Q-A/utils/Theme";

const Home = () => {
  // const chooseHost = useRole((state) => state.chooseHost);
  // const setChooseHost = useRole((state) => state.setChooseHost);
  // console.log(chooseHost);

  const [chooseHost, setChooseHost] = useState<"audience" | "host">("audience");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "198px",
          marginLeft: "16px",
          marginRight: "16px",
          width: "100%",
        }}
      >
        <Typography
          sx={{ color: "#1C1C1C", fontSize: "32px", fontWeight: "bold" }}
        >
          Start With
        </Typography>

        <AudienceChooseCard
          chooseHost={chooseHost}
          setChooseHost={setChooseHost}
        />
        <HostChooseCard chooseHost={chooseHost} setChooseHost={setChooseHost} />

        <Box
          sx={{
            display: "flex",
            width: "398px",
            height: "59px",
            bgcolor: "#1C1C1C",
            marginTop: "212px",
            borderRadius: "14px",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "60px",
          }}
        >
          <Typography sx={{ fontSize: "16px", color: "white" }}>
            Continue
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
