import { Box, Typography } from "@mui/material";
import "./Questions.css";
import { Question } from "../components/Question";
import { themeApp } from "../../../utils/Theme";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const navigate = useNavigate();

  const ask = () => {
    navigate("/asknewquestion");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
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
          width: "100%",
          height: "112px",
          backgroundColor: "#D9D9D9",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            marginLeft: "15px",
            gap: "2px",
          }}
        >
          <img
            alt=""
            src="/images/Menu-Icon.svg"
            style={{ width: "18.5px", height: "12.5px" }}
          ></img>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                color: "#1C1C1C",
                fontSize: "32px",
                fontWeight: "bold",
                marginTop: "23px",
                marginLeft: "16px",
                marginBottom: "0px",
              }}
            >
              CNX Tech Week
            </Typography>
            <Typography
              sx={{ color: "#6C6C6C", fontSize: "16px", marginLeft: "18px" }}
            >
              Mr. Lorem polem
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "64px",
          width: "calc(100% - 32px)",
          border: "1px solid #9C9C9C",
          backgroundColor: "white",
          borderRadius: "14px",
          marginTop: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "16px",
          marginRight: "16px",
          overflow: "hidden",
        }}
        onClick={ask}
      >
        <Typography>+ Start Your Question</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "30px",
          alignItems: "start",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            height: "47px",
            width: "20.69%",
            fontSize: "16px",
            color: "#1C1C1C",
            fontWeight: "600",
            borderBottom: "1px solid #1C1C1C",
            textAlign: "center",
            overflow: "hidden",
            marginLeft: "16px",
          }}
        >
          Popular
        </Typography>
        <Typography
          sx={{
            height: "47px",
            width: "19.07%",
            fontSize: "16px",
            color: "#1C1C1C",
            textAlign: "center",
            marginleft: "1.86%",
            overflow: "hidden",
          }}
        >
          Recent
        </Typography>
        <Typography
          sx={{
            height: "47px",
            width: "26.05%",
            fontSize: "16px",
            color: "#6C6C6C",
            textAlign: "center",
            marginRight: "16px",
            marginLeft: "24.88%",
          }}
        >
          13 questions
        </Typography>
      </Box>
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </Box>
  );
};
export { Questions };
