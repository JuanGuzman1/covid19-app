import React,{useState} from 'react';
import { View, Text, StyleSheet,Picker,Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../components/Colors';


const GlobalCases = (props) => {

    const [filterText, setFilterText] = useState("");
    const Countries2 = props.countries;

    const TotalConfirmed = props.global.TotalConfirmed;
    const TotalDeaths = props.global.TotalDeaths;
    const TotalRecovered = props.global.TotalRecovered;

    const onFilterTextChange = (text) => {
        setFilterText(text);
    };

    const handleFilterTextChange = (e) => {
        onFilterTextChange(e);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Global cases</Text>
            <View style={styles.containerCases}>
                <Card style={styles.card}>
                    <Text>Total cases</Text>
                    <Text style={styles.numberTotal}>{TotalConfirmed}</Text>
                </Card>
                <Card style={styles.card}>
                    <Text>Total deaths</Text>
                    <Text style={styles.numberDeaths}>{TotalDeaths}</Text>
                </Card>
            </View>
            <Card style={styles.card}>
                <Text>Total Recovered</Text>
                <Text style={styles.numberRecovered}>{TotalRecovered}</Text>
            </Card>

            <View style={styles.container}>
            <Text style={styles.title}>Countries data</Text>
            <Card style={styles.card}>
                <Picker
                    selectedValue={filterText}
                    style={styles.select}
                    onValueChange={(itemValue, itemIndex) => handleFilterTextChange(itemValue)}
                >
                    <Picker.Item label="Seleccione" value="" />
                    {Countries2.map((item, key) => (
                            <Picker.Item key={key} label={item.Country} value={item.Country} />
                        ))}
                </Picker>
            </Card>
            <Button title="Check" color={Colors.secondary} onPress={() => {props.onViewCountry(filterText)}} />
        </View>
        </View>
    );
};

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
    select: {
        height: 25,
        width: 150,

    },
});

export default GlobalCases;