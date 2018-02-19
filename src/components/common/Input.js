import React, { Component } from 'react';

import { TextInput, View, Text, StyleSheet } from 'react-native';


class Input extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.labelStyle}>{this.props.label}</Text>
                <TextInput 
                    autoCorrect={false}
                    secureTextEntry={this.props.secureTextEntry}
                    underlineColorAndroid='transparent'
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder}    
                    style={styles.inputStyle}
                    
                />
            </View>

        );
    }

}

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        flex: 1,
        paddingLeft: 20,
        fontSize: 18
    },
    containerStyle: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export { Input };
