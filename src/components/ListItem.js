
import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    View, 
    NativeModules,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && 
    UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        if (this.props.expanded) {
            return (
                <CardSection>
                    <Text>{this.props.library.description}</Text>
                </CardSection>
            );
        }
    }
    render() {
        const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

const mapStateToProps = (state, ownProp) => {
    const expanded = state.selectedLibraryId === ownProp.library.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
