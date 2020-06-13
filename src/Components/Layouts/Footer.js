import React, { Fragment } from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'

const Footer = ({ muscles }) => {
  return (
    <Fragment>
      <Paper>
        <Tabs
          value={0}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          {muscles.map(item => 
            <Tab key={item} label={item} />
          )}
        </Tabs>
      </Paper>
    </Fragment>
  );
}

export default Footer;