import { Box, Typography } from "@mui/material";
import image from "../Navbar/image.png";
import React from "react";
import style from "../css/Body.module.css";

function Body() {
  return (
    <Box className={style.main}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: "30px",
        }}
      >
        <img src={image}></img>
        <img src={image}></img>
      </Box>

      <Box>
        <Typography
          sx={{
            mx: {
              xs: 2,
              sm: 2,
              md: "15%",
              marginTop: "50px",
              paddingBottom: "30px",
            },
          }}
          variant="h5"
        >
          Let's Build the community of Blockchain Developers, where we all grow together,
          encourage each other for development and Unlock their full potentials that makes, one step more towards your goal.
        </Typography>
      </Box>
    </Box>
  );
}

export default Body;
