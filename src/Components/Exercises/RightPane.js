import React from 'react';
import { Paper, Typography } from '@material-ui/core';

export default ({ styles }) =>
  <Paper style={styles.Paper}>
    <Typography variant="h5">
      WelCome!
    </Typography>
    <Typography>
      Please select an exercise
    </Typography>
  </Paper>