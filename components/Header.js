import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors  from './Colors';

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 30,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: Colors.primary

    },
    headerTitle: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold'
    }
});

export default Header;
