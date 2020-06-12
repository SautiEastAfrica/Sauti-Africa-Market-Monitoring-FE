import React, { Component } from 'react';

import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.css';
require('datatables.net');

class DataTables extends Component {
    constructor(props) {
        super(props);
        this.datatable = null;
    }
    
    componentDidMount() {
        this.$el = $(this.el);
        this.dataTable = this.$el.DataTable({
            data:this.props.data,
            columns: this.props.columns,
            ...this.props.options
        });
    }

    shouldComponentUpdate() {
        return false;
    }
    
    
    search = (value => {
        this.dataTable.search(value).draw();
    });

    render() {
        return(
                <table
                    className='display'
                    width='100%'
                    ref={(el) => (this.el = el)}
                >
                </table>
        );
    }

    componentWillUnmount() {
        this.dataTable.destroy(true);
    }
}

export default DataTables;




