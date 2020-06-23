import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; 

// require all styling buttons
import * as jzip from 'jszip';
import 'jszip';

// import 'datatables.net-dt';
// import 'datatables.net-autofill-dt';
// import 'datatables.net-buttons-dt'; 
// import 'datatables.net-buttons/js/buttons.colVis.js';
// import 'datatables.net-buttons/js/buttons.flash.js'; 
// import 'datatables.net-buttons/js/buttons.html5.js';
// import 'datatables.net-buttons/js/buttons.print.js';
// import 'datatables.net-colreorder-dt';
// import 'datatables.net-fixedcolumns-dt';
// import 'datatables.net-fixedheader-dt';
// import 'datatables.net-keytable-dt';
// import 'datatables.net-responsive-dt';
// import 'datatables.net-rowgroup-dt';
// import 'datatables.net-rowreorder-dt';
// import 'datatables.net-scroller-dt';
// import 'datatables.net-searchpanes-dt';
import 'datatables.net-select-dt';
// end require

// import '../styles/dataTablesCustom.css';
import '../styles/dataTablesButtons.css';
import '../styles/tableContainer.scss'; 

// Fix vfsfonts import error in pdfMake
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
// End fixing of error

window.JSZip = jzip;

const $ = require('jquery'); 
$.DataTable = require('datatables.net'); 

const columns = [
    {
        title: 'Country',
        width: 120,
        data: 'country_code', 
        defaultContent: "<i>Not set</i>",
        className: 'dt-body-right'
    },
    {
        title: 'Marketplace',
        width: 180,
        data: 'market_name', 
        className: 'dt-body-right', 
        defaultContent: "<i>Not set</i>"
    },
    {
        title: 'Product',
        width: 180,
        data: 'product_name', 
        className: 'dt-body-right', 
        defaultContent: "<i>Not set</i>"
    },
    {
        title: 'Price',
        width: 180,
        data: 'observed_price',
        className: 'dt-body-right', 
        defaultContent: "<i>Not set</i>"
    },
    {
        title: 'Currency',
        width: 180,
        data: 'currency_code', 
        className: 'dt-body-right', 
        defaultContent: "<i>Not set</i>"
    },
    {
        title: 'Date',
        width: 180,
        data: 'date_price', 
        className: 'dt-body-right', 
        defaultContent: "<i>Not set</i>"
    },
    {
        title: 'Data Source',
        width: 180,
        data: 'source_name', 
        className: 'dt-body-right', 
        defaultContent: "<i>Not set</i>"
    }
]

function reloadTableData(names) {
    const table = $('.data-table-wrapper5').find('table').DataTable();
    table.clear();
    table.rows.add(names);
    table.draw();
}

function updateTable(products) {
    const table = $('.data-table-wrapper5').find('table').DataTable();
    let dataChanged = false;
    table.rows().every(function () {
        const oldData = this.data();
        const newData = products.find((productData) => {
            return productData.DQI === oldData.DQI;
        });

        if (oldData.DQI !== newData.DQI) {
            dataChanged = true;
            this.data(newData);
        }
       return true;
    });

    if (dataChanged) {
        table.draw();
    }
}

class TableProduct extends Component {
    componentDidMount() {
        console.log(`PRODUCT TABLE Component props: `, this.props); 
        $(this.refs.main).DataTable({
            dom: '<"data-table-wrapper5"Blfrtip>',
            data: this.props.data,
            buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
            ], 
            columns,
            ordering: true, 
            scrollX: true
        });
    }
    
    componentWillUnmount(){
       $('.data-table-wrapper5').find('table').DataTable().destroy(true);
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
            <div className='tableData'>
                <h1>Product History</h1>
                <hr/>
                <table ref="main" width="100%" id="example5" className="display cell-border compact hover nowrap order-column row-border stripe"/>
            </div>);
    }
}

TableProduct.propTypes = {
    data: PropTypes.array
};

export default TableProduct;