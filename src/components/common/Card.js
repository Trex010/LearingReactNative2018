import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

class Card extends Component {
    render() {
        return ( 
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
            },
            android: {
                elevation: 1
            }

        })
    }

});

export { Card };
