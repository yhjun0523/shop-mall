import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function BoardWrite() {
  return (
    <div>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField required id="name" label="Required" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="title"
              label="Required"
              defaultValue="Hello World"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="content"
              label="Content"
              multiline
              rows={4}
              defaultValue="Default Value"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">Hello World</Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}

export default BoardWrite;
