import { Box, Typography } from "@mui/material";
import "./Home.css";
import AudienceChooseCard from "../components/AudienceChooseCard";
import HostChooseCard from "../components/HostChooseCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { themeApp } from "../../../utils/Theme";

const Home = () => {
  // const chooseHost = useRole((state) => state.chooseHost);
  // const setChooseHost = useRole((state) => state.setChooseHost);
  // console.log(chooseHost);

  const [chooseHost, setChooseHost] = useState<"audience" | "host">("audience");

  const navigate = useNavigate();

  const gochoosenpage = () => {
    if (chooseHost === "audience") {
      navigate("/audiencelogin");
    } else {
      navigate("/hostlogin");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: "100vh",
        width: "430px",
        [themeApp.breakpoints.down("lg")]: {
          width: "100%",
          height: "auto",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          marginTop: "198px",
          width: "calc(100% - 32px)",
          position: "relative",
        }}
      >
        <Typography
          sx={{ color: "#1C1C1C", fontSize: "32px", fontWeight: "bold" }}
        >
          Start With
        </Typography>
        <Box sx={{ position: "relative", width: "100%" }}>
          <AudienceChooseCard
            chooseHost={chooseHost}
            setChooseHost={setChooseHost}
          />
          <HostChooseCard
            chooseHost={chooseHost}
            setChooseHost={setChooseHost}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "59px",
            bgcolor: "#1C1C1C",
            marginTop: "212px",
            borderRadius: "14px",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "60px",
            position: "relative",
          }}
          onClick={gochoosenpage}
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
