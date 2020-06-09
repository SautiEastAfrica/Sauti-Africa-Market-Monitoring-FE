import React, { Component, useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// import $ from 'jquery';
// import DataTable from 'datatables.net';
// $.DataTable = DataTable
const $ = require('jquery')
$.DataTable = require('datatables.net');

class Tables extends Component {
    constructor() {
        super();

        this.state = {
            wholesale_data: null
        }
    }
    
    componentDidMount() {
        axiosWithAuth()
        .get('https://sautimarket.herokuapp.com/wholesale/data')
        .then(res => {
            console.log('data', res.data);
            this.setState({
                wholesale_data: res.data
            })
            console.log(this.state.wholesale_data.wholesale_data)
        })
        .catch(err => {
            console.log(err);
        })
        console.log('props',this.props.data)
        console.log(this.el);
        this.$el = $(this.el);
        this.$el.DataTable(
            {
                data: this.state.wholesale_data,
                columns: [
                    {data: 'category'},
                    {title: 'country'},
                    {title: 'currency'},
                    {title: 'date'},
                    {title: 'market_id'},
                    {title: 'marketplace'},
                    {title: 'phase'},
                    {title: 'price'},
                    {title: 'product'},
                    {title: 'source_id'},
                    {title: 'stressness'}
                ]

            }
        )

    }
    componentWillUnmount() {

    }
    render() {
        return(
            <div>
                <table
                    className='display'
                    width='100%'
                    ref={el => this.el = el}
                >
                </table>
            </div>
        );
    }
}

export default Tables;




