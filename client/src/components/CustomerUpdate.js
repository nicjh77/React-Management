import React from 'react';

import Button from '@material-ui/core/Button';

class CustomerUpdate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    render(){
        return(
            <p>
                <Button variant="contained" color="primary" >UPDATE</Button>
            </p>
        )
    }
}


export default CustomerUpdate;