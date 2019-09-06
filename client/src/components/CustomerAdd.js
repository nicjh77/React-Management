import React from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
    // dialog: {
    //     maxWidth: '100%',
    //     width : '600px',
    //     maxHeight: '100%',
    //     height : '600px'
    // }
    // dialog: {
    //     width: '100%',
    //     maxWidth: 'none',
    //     minHeight: '80vh',
    //     maxHeight: '80vh'
    //   }
});

class CustomerAdd extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        }
    }

    //form으로 post 하는 방식 찾아보기
    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers: {
                'content-type':'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    handleFormSubmit = (e) => {
        e.preventDefault() // prevent error when submiting data
        this.addCustomer()
            .then((response) => {
                console.log(response.data)
                this.props.stateRefresh();
            });
        
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        });
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        });
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>Add Customer</Button>
                <Dialog open={this.state.open} onClose={this.handleClose} className={classes.dialog}>
                    <DialogTitle>Customer Add</DialogTitle>
                    <DialogContent>
                        <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br />
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color="primary" component="span" name="file">
                                {this.state.fileName === "" ? "Slect an Image" : this.state.fileName}
                            </Button>
                        </label>
                        <br/>
                        <TextField label="name" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br />
                        <TextField label="birthday" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br />
                        <TextField label="gender" type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br />
                        <TextField label="job" type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>Add</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
            // <form onSubmit={this.handleFormSubmit}>
            //     <h1>Add Customer</h1>
            //     Profile image: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br />
            //     Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br />
            //     Birth Day: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br />
            //     Gender: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br />
            //     Job: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br />
            //     <button type="submit">Add</button>
            // </form>
        )
    }
}

export default withStyles(styles)(CustomerAdd);