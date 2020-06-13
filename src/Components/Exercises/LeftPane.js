import React, { Fragment } from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

export default ({ styles, exercises }) =>
  <Paper style={styles.Paper}>
    {exercises.map(([heading, item]) =>
      <Fragment>
        <Typography
          variant="h6"
          style={{ textTransform: 'capitalize' }}
        >
          {heading}
        </Typography>
        <List component="ul">
          {item.map(({ title }) =>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          )}
        </List>
      </Fragment>
    )}
  </Paper>