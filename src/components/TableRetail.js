import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; 

import '../styles/dataTables.css';
import 'datatables.net-dt/css/jquery.dataTables.css'; 

const $ = require('jquery'); 
$.DataTable = require('datatables.net'); 

const columns = [
    {
        title: 'Country',
        width: 120,
        data: 'country'
    },
    {
        title: 'Marketplace',
        width: 180,
        data: 'marketplace'
    },
    {
        title: 'Product',
        width: 180,
        data: 'product'
    },
    {
        title: 'Currency',
        width: 180,
        data: 'currency'
    },
    {
        title: 'Category',
        width: 180,
        data: 'category'
    },
    {
        title: 'Phase',
        width: 180,
        data: 'phase'
    },
    {
        title: 'Stressness',
        width: 180,
        data: 'stressness'
    },
    {
        title: 'Date',
        width: 180,
        data: 'date'
    }
];

function reloadTableData(names) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    table.clear();
    table.rows.add(names);
    table.draw();
}

function updateTable(products) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    let dataChanged = false;
    table.rows().every(function () {
        const oldData = this.data();
        const newData = products.find((productData) => {
            return productData.price === oldData.price;
        });
        if (oldData.price !== newData.price) {
            dataChanged = true;
            this.data(newData);
        }
       return true;
    });

    if (dataChanged) {
        table.draw();
    }
}

class TableRetail extends Component {
    componentDidMount() {
        $(this.refs.main).DataTable({
            dom: '<"data-table-wrapper"lfrtip>',
            data: this.props.data,
            columns,
            ordering: true
        });
    }
    
    componentWillUnmount(){
       $('.data-table-wrapper').find('table').DataTable().destroy(true);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.data.length !== this.props.data.length) {
            reloadTableData(nextProps.data);
        } else {
            console.log('ShouldComponentUpdate:', nextProps); 
            updateTable(nextProps.data);
        }
        return false;
    }

    render() {
        return (
            <div>
                <table ref="main" width="100%" id="example" class="display cell-border compact hover nowrap order-column row-border stripe"/>
            </div>);
    }
}

TableRetail.propTypes = {
    data: PropTypes.array
};

export default TableRetail;