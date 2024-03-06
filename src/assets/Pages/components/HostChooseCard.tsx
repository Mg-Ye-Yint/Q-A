import { Box, Typography } from "@mui/material";

interface HostProps {
  chooseHost: "audience" | "host";
  setChooseHost: React.Dispatch<React.SetStateAction<"audience" | "host">>;
}

const HostChooseCard = ({ chooseHost, setChooseHost }: HostProps) => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: chooseHost === "host" ? "#1C1C1C" : "white",
          height: "163.01px",
          width: "398px",
          borderRadius: "14px",
          display: "flex",
          flexDirection: "column",
          marginTop: "24px",
        }}
        onClick={() => setChooseHost("host")}
      >
        <Box sx={{ paddingX: "16px", paddingTop: "20px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "286px",
              alignItems: "center",
            }}
          >
            {chooseHost === "host" ? (
              <img
                src="/images/Host-Icon-White.svg"
                style={{ width: "40px", height: "40px", color: "#000080" }}
              ></img>
            ) : (
              <img
                src="/images/Host-Icon.svg"
                style={{ width: "40px", height: "40px", color: "#000080" }}
              ></img>
            )}
            {chooseHost === "host" ? (
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
                color: chooseHost === "host" ? "white" : "#1C1C1C",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              Host
            </Typography>
            <Typography
              sx={{
                color: chooseHost === "host" ? "white" : "#6C6C6C",
                fontSize: "16px",
              }}
            >
              Creates and manages an event where attendees can engage in
              discussions.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default HostChooseCard;
