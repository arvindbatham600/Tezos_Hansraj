import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import style from "../css/Body.module.css";
import image1 from "../Assets/imag1.svg";

function About() {
  return (
    <Box
      className={style.about}
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
            Cerritus Coders is a student-run community focusing on open-source,
            project-based learning. It aims to help folks to get opportunities
            by encouraging them to learn, build and share in public.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              padding: "20px",
            }}
          >
            Cerritus Coders is a student-run community focusing on open-source,
            project-based learning. It aims to help folks to get opportunities
            by encouraging them to learn, build and share in public.
          </Typography>
        </Box>
        <Box className="image1">
          <img height={300} src={image1} alt="image " />
        </Box>
      </Box>
    </Box>
  );
}

export default About;
