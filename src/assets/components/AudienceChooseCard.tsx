import { Box, Typography } from "@mui/material";

interface AudienceProps {
  chooseHost: "audience" | "host";
  setChooseHost: React.Dispatch<React.SetStateAction<"audience" | "host">>;
}

const AudienceChooseCard = ({ chooseHost, setChooseHost }: AudienceProps) => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: chooseHost === "audience" ? "#1C1C1C" : "white",
          height: "152.86px",
          width: "100%",
          borderRadius: "14px",
          display: "flex",
          flexDirection: "column",
          marginTop: "24px",
          position: "relative",
          overflow: "hidden"
        }}
        onClick={() => setChooseHost("audience")}
      >
        <Box sx={{ paddingX: "16px", paddingTop: "20px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            {chooseHost === "audience" ?    <img
              src={"/images/Audience-Icon-White.svg"}
              style={{ width: "40px", height: "40px" }}
            ></img> :    <img
            src={"/images/Audience-Icon.svg"}
            style={{ width: "40px", height: "40px" }}
          ></img>}
            {chooseHost === "audience" ? (
              <img
                src="/images/Tick-Icon.svg"
                style={{ width: "30px", height: "30px" }}
              ></img>
            ) : (
              ""
            )}
          </Box>
          <Box sx={{ paddingTop: "16px", gap: "6.63px" }}>
            <Typography
              sx={{
                color: chooseHost === "audience" ? "white" : "#1C1C1C",
                fontSize: "22px",
                fontWeight: "bold", 
              }}
            >
              Audience
            </Typography>
            <Typography
              sx={{
                color: chooseHost === "audience" ? "white" : "#6C6C6C",
                fontSize: "16px", 
              }}
            >
              Join in, ask away, be part of the conversation.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AudienceChooseCard;
