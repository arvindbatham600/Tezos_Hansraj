import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import style from "../css/Body.module.css";
import image1 from "../Assets/imag1.svg";

function About() {
  return (
    <Box
      className={style.main}
      sx={{
        my: 2,
        padding: "30px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Iosevka",
          fontWeight: "bold",
        }}
      >
        About Us
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              padding: "20px",
            }}
          >
            Tezos_Hansraj is a student-run community focusing on learning more about Web3.
             It aims to help folks to get opportunities
            by encouraging them to learn, build and share in public.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              padding: "20px",
            }}
          >
          We encourage folks to get started with 
          Blockchain Development and conduct multiple events 
          around the same. We are a community
           of more than 100+ members and growing every day.
          </Typography>
        </Box>
        <Box className="image1">
          <img width={500} src={image1} alt="image " />
        </Box>
      </Box>
    </Box>
  );
}

export default About;
