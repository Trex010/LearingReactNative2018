// Import libraries for making a component
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Platform
} from 'react-native';

//Make a component
class Header extends Component {
    render() {
        const { viewStyle, textStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}

//Styling the componet
const styles = StyleSheet.create({
    viewStyle: {
        //First heught, width
        height: 60,
        //First styling for flex
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        //other stuffs
        //Platform specific code, in the last
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.2,
            },
            android: {
                elevation: 10,
                position: 'relative'
            }
        })
    },
    textStyle: {
        fontSize: 20,
    }
});
    
//Make the component available to other parts of the app
export { Header };
