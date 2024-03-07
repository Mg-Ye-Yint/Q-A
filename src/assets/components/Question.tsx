import { Box, Typography } from "@mui/material";

const Question = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "94px",
        width: "100%",
        alignItems: "start",
        justifyContent: "start",
        backgroundColor: "white",
        overflow: "hidden",
        borderBottom: "1px solid #1C1C1C",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "13px",
        }}
      >
        <Typography sx={{ color: "#6C6C6C", marginLeft: "16px" }}>
          Username
        </Typography>
        <Box
          sx={{
            width: "53px",
            height: "24px",
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            backgroundColor: "#F7F7F7",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            marginRight: "16px",
          }}
        >
          <Typography sx={{ fontSize: "13px", color: "#6C6C6C" }}>
            28
          </Typography>
          <img
            alt=""
            src="/images/Like-Icon.svg"
            style={{ height: "20px", width: "20px" }}
          ></img>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddintTop: "10px",
        }}
      >
        <Box sx={{ height: "38px", width: "338px" }}>
          <Typography
            sx={{ fontSize: "16px", color: "#1C1C1C", marginLeft: "16px" }}
          >
            What is the difference between augmented reality (AR) and virtual
            reality (VR)?
          </Typography>
        </Box>
        <Box
          sx={{
            marginRight: "20px",
            marginTop: "16px",
          }}
        >
          <img
            alt=""
            src="/images/More-Icon.svg"
            style={{ height: "24px", width: "24px" }}
          ></img>
        </Box>
      </Box>
    </Box>
  );
};

export { Question };
