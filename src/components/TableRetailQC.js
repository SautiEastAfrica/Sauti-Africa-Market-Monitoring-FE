import React, { Component, useEffect, useState } from 'react'; 
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
        title: 'Category',
        width: 180,
        data: 'category'
    },
    {
        title: 'Completeness',
        width: 180,
        data: 'completeness',
        defaultContent: "<i>Not set</i>"
    },
    {
        title: 'Timeliness',
        width: 180,
        data: 'timeliness', 
        defaultContent: "<i>Not set</i>"
    }, 
    {
        title: 'DQI',
        width: 180,
        data: 'DQI', 
        defaultContent: "<i>Not set</i>"
    },
    {
        title: 'DQI Category',
        width: 180,
        data: 'DQI_cat'
    },
    {
        title: 'Data Length',
        width: 180,
        data: 'data_length'
    },
    {
        title: 'Data Points',
        width: 180,
        data: 'data_points'
    }, 
    {
        title: 'Duplicates',
        width: 180,
        data: 'duplicates'
    }, 
    {
        title: 'Start Date',
        width: 180,
        data: 'start_date'
    }, 
    {
        title: 'End Date',
        width: 180,
        data: 'end_date'
    }, 
    {
        title: 'Source',
        width: 180,
        data: 'source'
    }, 
    {
        title: 'Mode D',
        width: 180,
        data: 'mode_D'
    }
];

function reloadTableData(names) {
    const table = $('.data-table-wrapper3').find('table').DataTable();
    table.clear();
    table.rows.add(names);
    table.draw();
}

function updateTable(products) {
    const table = $('.data-table-wrapper3').find('table').DataTable();
    let dataChanged = false;
    table.rows().every(function () {
        const oldData = this.data();
        const newData = products.find((productData) => {
            return productData.DQI === oldData.DQI;
        });
        
        // insert test log here
        console.log(products)
        // end test log

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

class TableRetailQC extends Component {
    componentDidMount() {
        $(this.refs.main).DataTable({
            dom: '<"data-table-wrapper3"Blfrtip>',
            data: this.props.data,
            buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
            ], 
            columns,
            ordering: true
        });
    }
    
    componentWillUnmount(){
       $('.data-table-wrapper3').find('table').DataTable().destroy(true);
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
                <h1>Retail Data QC</h1>
                <hr/>
                <table ref="main" width="100%" id="example3" class="display cell-border compact hover nowrap order-column row-border stripe"/>
            </div>);
    }
}

TableRetailQC.propTypes = {
    data: PropTypes.array
};

export default TableRetailQC;