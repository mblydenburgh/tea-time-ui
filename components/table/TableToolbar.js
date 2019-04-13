import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from "@material-ui/core/Typography";

const styles = {

};

const TableToolbar = ({numSelected, classes}) => {
  return (
    <Toolbar className={classNames(classes.root,{
      [classes.highlight]: numSelected > 0,
    })}>
      <div className={classes.title}>
        {(numSelected>0)?
        <Typography variant={"subtitle1"}>{numSelected} Selected</Typography> :
        <Typography variant={"h6"}>My Teas</Typography>}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {(numSelected > 0)?
          <Tooltip title={"Delete"}>
            <IconButton aria-label={"Delete"}>
              <DeleteIcon/>
            </IconButton>
          </Tooltip>:
          <Tooltip title={"Filter list"}>
            <IconButton aria-label={"Filter list"}>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        }
      </div>
    </Toolbar>
  )
};

export default withStyles(styles)(TableToolbar)