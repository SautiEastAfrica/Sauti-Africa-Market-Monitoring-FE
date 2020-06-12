import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; 

// require all styling buttons
import * as jzip from 'jszip';
import 'jszip';

import 'datatables.net-dt';
import 'datatables.net-autofill-dt';
import 'datatables.net-buttons-dt'; 
import 'datatables.net-buttons/js/buttons.colVis.js';
import 'datatables.net-buttons/js/buttons.flash.js'; 
import 'datatables.net-buttons/js/buttons.html5.js';
import 'datatables.net-buttons/js/buttons.print.js';
import 'datatables.net-colreorder-dt';
import 'datatables.net-fixedcolumns-dt';
import 'datatables.net-fixedheader-dt';
import 'datatables.net-keytable-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-rowgroup-dt';
import 'datatables.net-rowreorder-dt';
import 'datatables.net-scroller-dt';
// import 'datatables.net-searchpanes-dt';
import 'datatables.net-select-dt';
// end require

// import '../styles/dataTablesCustom.css';
import '../styles/dataTablesButtons.css';
import '../styles/dataTables.css';
import 'datatables.net-dt/css/jquery.dataTables.css'; 


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
        title: 'Price',
        width: 180,
        data: 'price'
    },
    {
        title: 'Currency',
        width: 180,
        data: 'currency'
    },
    {
        title: 'Method',
        width: 180,
        data: 'method', 
        defaultContent: "<i>Not set</i>"
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
    const table = $('.data-table-wrapper2').find('table').DataTable();
    table.clear();
    table.rows.add(names);
    table.draw();
}

function updateTable(data) {
    const table = $('.data-table-wrapper2').find('table').DataTable();
    let dataChanged = false;
    table.rows().every(function () {
        const oldNameData = this.data();
        const newNameData = data.find((nameData) => {
            return nameData.price === oldNameData.price;
        });
        if (oldNameData.price !== newNameData.price) {
            dataChanged = true;
            this.data(newNameData);
        }
       return true;
    });

    if (dataChanged) {
        table.draw();
    }
}

class TableWholesale extends Component {
    componentDidMount() {
        $(this.refs.main).DataTable({
            dom: '<"data-table-wrapper2"Blfrtip>',
            data: this.props.data,
            columns,
            ordering: true
        });
    }
    
    componentWillUnmount(){
       $('.data-table-wrapper2').find('table').DataTable().destroy(true);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.data.length !== this.props.data.length) {
            reloadTableData(nextProps.data);
        } else {
            updateTable(nextProps.data);
        }
        return false;
    }

    render() {
        return (
            <div className='tableData'>
                <h1>Wholesale Data</h1>
                <hr/>
                <table ref="main" width="100%" id="example2" class="display cell-border compact hover nowrap order-column row-border stripe"/>
            </div>);
    }
}

TableWholesale.propTypes = {
    data: PropTypes.array
};

export default TableWholesale;