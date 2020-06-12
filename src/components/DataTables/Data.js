import React, { Component } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import DataTables from './Tables';

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns: [
                {title: 'country', data: 'country'},
                {title: 'currency', data: 'currency'},
                {title: 'date', data: 'date'},
                {title: 'market_id', data: 'market_id'},
                {title: 'marketplace', data: 'marketplace'},
                {title: 'phase', data: 'phase'},
                {title: 'price', data:'price'},
                {title: 'product', data: 'product'},
                {title: 'source_id', data: 'source_id'},
                {title: 'stressness', data: 'stressness'}
            ],
            searchValue: '',
            options: {
                dom: 'lrtip'
            }
        };
        this.dataTableRef = React.createRef();
    }
    
    componentDidMount() {
        axiosWithAuth()
        .get('https://sautimarket.herokuapp.com/wholesale/data')
        .then(res => {
            console.log('data', res.data);
            this.setState({
                data: res.data.wholesale_data
            })
            console.log(this.state.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    onChangeSearch = (e) => {
        const { value } = e.target;
        const searchValue = value;
        this.setState({ searchValue });
        this.dataTableRef.current.search(searchValue);
    }
    
    render() {
        const {
            data,
            columns,
            options,
            searchValue
        } = this.state
        return(
            <div>
                <input
                    value={searchValue}
                    onChange={this.onChangeSearch}
                    autoComplete={'off'}
                    type='text'
                    placeholder="Search Data"
                />
                <DataTables
                    ref={this.dataTableRef}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>
        );
    }
}

export default Data;
