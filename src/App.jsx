import { Grid, Typography, Box } from "@material-ui/core";
import React from "react";
import SimpleTree from "./SimpleTree";

const App = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Grid container direction="column" justify={"center"}>
          <Box m={1}>
            <Typography variant="h6">Simple Data</Typography>
            <SimpleTree />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
