import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ecf6fe",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          color: "#133149",
        }}
      >
        Error 404
      </Typography>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "#1a4262",
        }}
      >
        Page not found
      </Typography>
      <Button
        component={Link}
        variant="outlined"
        size="large"
        to="/takeoff-staff"
        sx={{
          mt: 5,
        }}
      >
        Back to Main page
      </Button>
    </Box>
  );
};

export default NotFound;
