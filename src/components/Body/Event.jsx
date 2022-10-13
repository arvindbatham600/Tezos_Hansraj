import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import style from "../css/Body.module.css";
import Card from "../Card/Cards";

function Event() {
  return (
    <Box
      className={style.main}
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
          Events
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          paddingTop: "30px",
        }}
      >
        <Card className={style.card} />
        <Card className={style.card} />
        <Card className={style.card} />
      </Box>

      <Button
        href="#!"
        variant="contained"
        color="secondary"
        sx={{
          marginTop: "30px",
          borderRadius: "20px",
        }}
      >
        See More Events
      </Button>
    </Box>
  );
}

export default Event;
