import React, { useState } from 'react';
import { View, Text, Picker, Button, StyleSheet } from 'react-native';
import Colors from '../components/Colors';
import Card from '../components/Card';
import SpecificCases from '../screens/SpecificCases';

const FormCountries = props => {
    

    return (
        <View></View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'center',
    },
    select: {
        height: 25,
        width: 150,

    },
    title: {
        color: Colors.secondary,
        fontSize: 22,
        fontWeight: 'bold',

    },
    card: {
        margin: 20
    }
});

export default FormCountries;