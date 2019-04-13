import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles/index'
import Checkbox from '@material-ui/core/Checkbox'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Tooltip from '@material-ui/core/Tooltip'
import TableSortLabel from '@material-ui/core/TableSortLabel/index'

const styles = {

};

class TableHeader extends Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;
    const rows = [
      {id:'name', numeric:false, disablePadding:false, label:"Name"},
      {id:'maker', numeric:false, disablePadding:false, label:"Maker"},
      {id:'type', numeric:false, disablePadding:false, label:"Type"},
      {id:'caffeine', numeric:false, disablePadding:false, label:"Caffeine"},
      {id:'rating', numeric:true, disablePadding:false, label:"Rating"}
    ];

    return (
      <TableHead>
        <TableRow>
          <TableCell padding={"checkbox"}>
            <Checkbox
              indeterminate={numSelected>0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(row=>(
            <TableCell
              key={row.id}
              // align={row.numeric?'right':'left'}
              padding={row.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === row.id ? order : false}
            >
              <Tooltip
                title="Sort"
                placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                enterDelay={300}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={this.createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </Tooltip>
            </TableCell>
          ),
            this,
          )}
        </TableRow>
      </TableHead>
    )
  }
}

export default withStyles(styles)(TableHeader)