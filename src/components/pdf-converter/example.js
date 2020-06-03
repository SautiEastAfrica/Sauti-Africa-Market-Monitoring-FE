import React, { useState, useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import axios from 'axios';



// Create Styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
const ExampleDocument = () => (
    <Document>
        <Page size='LETTER' style={styles.page}>
            <View style={styles.section}>
                <Text> section #1 </Text>
            </View>
            <View style={styles.section}>
                <Text> section #2 </Text>
            </View>
            <View style={styles.section}>
                <Text> section #3 </Text>
            </View>
            <View style={styles.section}>
                <Text> section #4 </Text>
            </View>
            <View style={styles.section}>
                <Text> section #5 </Text>
            </View>
        </Page>
    </Document>
);

export default ExampleDocument;