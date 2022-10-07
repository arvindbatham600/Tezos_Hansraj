import React from "react";
import { Box, Button, Typography } from "@mui/material";
import style from "../css/Body.module.css";
import { Stack } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material";


const icon = {
  width: "50px",
  height: "50px",
  fill: "blue",
  display: "inline-block",
  margin: "4px auto",
};

function Footer() {
  return (
    <Box
      className={style.footer}
      sx={{
        my: 2,
        padding: "30px",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "Iosevka",
            fontWeight: "bold",
          }}
          variant="h3"
        >
          Join Our Community
        </Typography>
        <Typography
          variant="h6"
          sx={{
            padding: "20px",
            color: "#375b6c",
          }}
        >
          Join the community run solely by students, for students, focused on
          development, open source and much more.
        </Typography>
      </Box>

      <Box>
         {/* here we ll add icons  */}
      </Box>
    </Box>
  );
}

export default Footer;
