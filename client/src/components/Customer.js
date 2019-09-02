import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    pictureResized: {
        width: 64,
        height: 64
    }
});

class Customer extends React.Component {
    render(){
        const { classes } = this.props;
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} className={classes.pictureResized} alt="profile" /></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )
        
    }
}

export default withStyles(styles)(Customer);