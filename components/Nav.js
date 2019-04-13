import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: "80%",
    margin: "auto auto"
  },
  title:{
    color: 'white',
    flexGrow: 1
  }
};

const Nav = ({classes}) => {
  return (
    <div className={classes.root}>
    <AppBar backgroundColor={"deepPurple"} position={"static"}>
      <Toolbar>
        <Typography className={classes.title} variant={"h4"}>Tea-Time</Typography>
        <Button color={"inherit"}>Login</Button>
      </Toolbar>
    </AppBar>
    </div>
  )
};

export default withStyles(styles)(Nav)