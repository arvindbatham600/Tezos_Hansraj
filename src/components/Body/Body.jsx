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
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
    </Box>
  );
}

export default Body;
