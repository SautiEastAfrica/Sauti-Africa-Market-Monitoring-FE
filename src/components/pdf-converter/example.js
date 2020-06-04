import React, { useState, useEffect, useContext } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// Create Styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4'
    }
});

// Create Document Component
const ExampleDocument = () => {
    const [dataset, setDataset] = useState({});
    useEffect(() => {
        async function wholeSale() {
    await axiosWithAuth()
    .get('https://sautimarket.herokuapp.com/wholesale/data')
        .then((res) => {
            console.log(res.data);
            setDataset(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }
        wholeSale();
    }, [])
        
    console.log(`datahere`, dataset)
    return (
        
            <Document >
                <WholeSaleDoc 
                    wholesale={dataset}
                />
            </Document>
        );
}

const WholeSaleDoc = (props) => {
    return(
        <Page size='LETTER' style={styles.page}>
            <View style={styles.section}>
            <Text></Text>
            </View>
        </Page>
    )
}

export default ExampleDocument;