import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

class Converter extends Component {
    state = {
        marketName: '',
        price1: 0,
        price2: 0
    };

    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });

    createAndDownloadPdf = () => {
        axios
            .post('https://sautimarket.herokuapp.com/create-pdf', this.state)
            .then(() => axios.get('https://sautimarket.herokuapp.com/fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' })

                saveAs(pdfBlob, 'newPdf.pdf');
            })
    };

    render() {
        return (
            <div className="Converter">
                <input type="text" placeholder="Market" name="marketName" onChange={this.handleChange} />
                <input type="text" placeholder="Wholesale Price" name="price1" onChange={this.handleChange} />
                <input type="text" placeholder="Retail Price" name="price2" onChange={this.handleChange} />
                <button onClick={this.createAndDownloadPdf}> Download ODF </button>
            </div>
        );
    }
}

export default Converter;

