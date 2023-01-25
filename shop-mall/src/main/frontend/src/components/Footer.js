import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <Box
          component="footer"
          sx={{
            backgroundColor: "#E0E3E7",
            padding: 4,
            marginTop: 3,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {"Hyeonjun Yang / "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </footer>
    </div>
  );
}

export default Footer;
