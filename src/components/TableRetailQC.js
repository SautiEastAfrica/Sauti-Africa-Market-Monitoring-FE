import React, { Component } from 'react'; 
import ReactDOM from 'react-dom'; 
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
        title: 'Category',
        width: 180,
        data: 'price_category',
        defaultContent: "<i>Not set</i>"
    },
    {
        title: 'Country',
        width: 160,
        data: 'country_code',
        defaultContent: "<i>Not set</i>"
    },
    {
        title: 'Marketplace',
        width: 160,
        data: 'market_name',
        defaultContent: "<i>Not set</i>"
    },
    {
        title: 'Product',
        width: 160,
        data: 'product',
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
        data: 'DQI_cat',
        defaultContent: "<i>Not set</i>"
    },
    {
        title: 'Total Data<br> Points',
        width: 180,
        data: 'data_points',
        defaultContent: "<i>Not set</i>"
    },
    {
        title: 'Range Of<br> Time Covered<br> (Days)',
        width: 100,
        data: 'data_length',
        defaultContent: "<i>Not set</i>"
    },
    {
        title: 'Dataset Completion<br> Percentage<br> (Annual)',
        width: 180,
        data: 'completeness',
        defaultContent: "<i>Not set</i>"
    },
    {
        title: 'Days Since<br> Last Update',
        width: 180,
        data: 'timeliness', 
        defaultContent: "<i>Not set</i>"
    }, 
    {
        title: 'Duplicates',
        width: 180,
        data: 'duplicates',
        defaultContent: "<i>Not set</i>"
    },  
    {
        title: 'Start Date',
        width: 180,
        data: 'start',
        defaultContent: "<i>Not set</i>"
    }, 
    {
        title: 'End Date',
        width: 180,
        data: 'end',
        defaultContent: "<i>Not set</i>"
    }, 
    {
        title: 'Source',
        width: 180,
        data: 'source_name',
        defaultContent: "<i>Not set</i>"
    }, 
    {
        title: 'Mode D',
        width: 180,
        data: 'mode_D',
        defaultContent: "<i>Not set</i>"
    }, 
    {
        title: 'More Details',
        width: 180,
        data: 'link', 
        // "render": function(data, type, row, meta){
        //     if(type === 'display'){
        //         data = '<a href="' + row.link + '">' + 'More Info' + '</a>'; 
        //     }
        //     return data; 
        // }, 
        defaultContent: "<i>Not set</i>"
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
        // console.log(products)
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
            ordering: true,
            "order": [[ 6, 'desc' ]],
            scrollX: true, 
            columnDefs: [{
                targets: 15, 
                createdCell: (td, cellData, rowData, row, col) =>
                    ReactDOM.render(
                        <a style={{ cursor: 'pointer' }}
                            onClick={() => this.props.goto(cellData) }>
                                Product Details
                            <i className="icon-fontello-edit"></i>
                        </a>, td),
            }], 
        });
    }
    
    componentWillUnmount(){
       $('.data-table-wrapper3').find('table').DataTable().destroy(true);
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
                <h1>Retail Data QC</h1>
                <hr/>
                <table ref="main" width="100%" id="example3" className="display cell-border compact hover nowrap order-column row-border stripe"/>
            </div>);
    }
}

TableRetailQC.propTypes = {
    data: PropTypes.array
};

export default TableRetailQC;