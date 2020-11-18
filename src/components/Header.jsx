import React from "react";
import { Typography, Grid, AppBar, Toolbar } from "@material-ui/core";

export const Header = () => {
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <Grid container direction="row" justify="center">
          <Typography variant="h4">EXPENSE MANAGER </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
