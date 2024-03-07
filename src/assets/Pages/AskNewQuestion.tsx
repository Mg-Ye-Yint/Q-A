import { Box, Typography } from "@mui/material";
import { themeApp } from "../../../utils/Theme";
import { useState } from "react";

import "./AskNewQuestion.css";

const AskNewQuestion = () => {
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
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
          height: "58px",
          width: "100%",
          backgroundColor: "#D9D9D9",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          gap: "20px",
        }}
      >
        <img
          alt=""
          src="/images/Back-Arrow-Icon.svg"
          style={{ width: "24px", height: "24px", marginLeft: "16px" }}
        />
        <Typography
          sx={{ fontSize: "16px", fontWeight: "500", color: "#000000" }}
        >
          Ask the speaker
        </Typography>
      </Box>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <input
          className="question-box"
          type="text"
          placeholder="Type your question"
          style={{
            width: "calc(100% - 6.5px)",
            height: "187px",
            backgroundColor: "#1A1A1A",
            color: "#FFFFFF",
            position: "relative",
          }}
          onChange={handleInputChange}
        />
        <Typography
          sx={{
            position: "absolute",
            right: "26px",
            top: "90%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            color: "#747474",
          }}
        >
          300
        </Typography>
      </div>

      <Box
        sx={{
          display: "flex",
          width: "calc(100% - 32px)",
          height: "59px",
          bgcolor: "#1C1C1C",
          marginTop: "247px",
          borderRadius: "14px",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Typography sx={{ fontSize: "16px", color: "white" }}>Send</Typography>
      </Box>
    </Box>
  );
};

export default AskNewQuestion;
