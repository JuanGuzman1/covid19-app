import React, { useState } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../components/Colors';

const SpecificCases = props => {
  
    return (
        <View style={styles.container}>
        <Text style={styles.title}>{props.Countries.Country} cases</Text>
        <View style={styles.containerCases}>
            <Card style={styles.card}>
                <Text>Total cases</Text>
                <Text style={styles.numberTotal}>{props.Countries.TotalConfirmed}</Text>
            </Card>
            <Card style={styles.card}>
                <Text>Total deaths</Text>
                <Text style={styles.numberDeaths}>{props.Countries.TotalDeaths}</Text>
            </Card>
        </View>
        <Card style={styles.card}>
            <Text>Total Recovered</Text>
            <Text style={styles.numberRecovered}>{props.Countries.TotalRecovered}</Text>
        </Card>
        <Button title="BACK" color={Colors.secondary} onPress={() =>{props.onChangeView("")}}/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    containerCases: {
        flexDirection: 'row',
        padding: 10
    },
    title: {
        color: Colors.secondary,
        fontSize: 22,
        fontWeight: 'bold'
    },
    card: {
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10
    },
    numberDeaths: {
        color: Colors.red,
        fontSize: 18,
        fontWeight: 'bold'
    },
    numberTotal: {
        color: Colors.blue,
        fontSize: 18,
        fontWeight: 'bold'
    },
    numberRecovered: {
        color: Colors.warning,
        fontSize: 18,
        fontWeight: 'bold'
    },
});

export default SpecificCases;