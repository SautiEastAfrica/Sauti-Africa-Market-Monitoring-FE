import React, { Component, useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import Tables from './Tables';

class Data extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         wholesale_data: null
    //     }
    // }
    
    // componentDidMount() {
    //     axiosWithAuth()
    //     .get('https://sautimarket.herokuapp.com/wholesale/data')
    //     .then(res => {
    //         console.log('data', res.data);
    //         this.setState({
    //             wholesale_data: res.data
    //         })
    //         console.log(this.state.wholesale_data)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }

    render() {
        return(
            <div>
                <Tables/>
            </div>
        );
    }
}

export default Data;
