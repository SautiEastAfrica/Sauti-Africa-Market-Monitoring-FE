import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDoc from './example';

const Converter = () => (
    <div>
        <PDFDownloadLink document={<MyDoc />} fileName='example.pdf'>
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
    </div>
);

export default Converter;
