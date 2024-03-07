import { Box, Typography } from "@mui/material";
import { themeApp } from "../../../utils/Theme";

import "./AudienceLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AudienceLogin = () => {
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const navigate = useNavigate();

  const startquestion = () => {
    if (inputValue.trim() !== "") {
      navigate("/questions");
    } else {
      <></>;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "430px",
        position: "relative",
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
          paddingX: "32px",
          width: "calc(100% - 32px)",
          position: "relative",
        }}
      >
        <Typography
          sx={{ color: "#1C1C1C", fontSize: "32px", fontWeight: "bold" }}
        >
          Invite code
        </Typography>
        <Typography
          sx={{ color: "#6C6C6C", fontSize: "16px", paddingTop: "8px" }}
        >
          Enter invite code to participate.
        </Typography>
        <Box sx={{ display: "relative", width: "100%" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <input
              className="code-input-box"
              type="text"
              placeholder="enter code here"
              style={{
                width: "calc(100% - 30px)",
                height: "59px",
                fontSize: "16px",
                fontWeight: "500",
                borderRadius: "14px",
                marginTop: "26px",
                border: "1px solid #F1F1F1",
                color: "#1C1C1C",
                overflow: "hidden",
                padding: "0PX 14px",
              }}
              value={inputValue}
              onChange={handleInputChange}
            />
            {inputValue.trim() !== "" && (
              <img
                src="/images/Delete-Code.svg"
                style={{
                  position: "absolute",
                  right: "4%",
                  top: "65%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                alt="Delete-icon"
              />
            )}
          </div>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "59px",
            bgcolor: inputValue.trim() !== "" ? "#1C1C1C" : "#9C9C9C",
            marginTop: "182px",
            borderRadius: "14px",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "342.4px",
            position: "relative",
          }}
          onClick={startquestion}
        >
          <Typography sx={{ fontSize: "16px", color: "white" }}>
            Continue
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { AudienceLogin };
