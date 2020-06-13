import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflow: 'auto'}
}

export default ({ exercises }) =>
  <Fragment>
    <Grid container spacing={1}>
      <Grid item sm>
        <LeftPane exercises={exercises} styles={style} />
      </Grid>
      <Grid item sm>
        <RightPane styles={style} />
      </Grid>
    </Grid>
  </Fragment>