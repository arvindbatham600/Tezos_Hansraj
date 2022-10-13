import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import style from "../css/Body.module.css";
import Discord from "./icons/Discord";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Discord />
            <Typography variant="body1">Discord</Typography>
          </Box>
          <Box
            sx={{
              margin: "0 50px",
            }}
          >
            <Linkedin />
            <Typography variant="body1">LinkedIn</Typography>
          </Box>
          <Box>
            <Twitter />
            <Typography variant="body1">Twitter</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
