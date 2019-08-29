import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: 'John Doe',
    birthday: 20100909,
    gender: 'female',
    job: 'student'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: 'Jain March',
    birthday: 20120303,
    gender: 'female',
    job: 'Admin'
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: 'Aaron',
    birthday: 20091212,
    gender: 'male',
    job: 'programmer'
  }
]
class App extends Component {
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birth</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> );})}
          </TableBody>
        </Table>  
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
