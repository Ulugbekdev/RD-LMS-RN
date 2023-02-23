//react
import React from 'react';
//react-native
import { ActivityIndicator, StyleSheet, View } from 'react-native';
//constants
import { colors } from '../../constants';

export const Snipper = () => {
    return (
        <View style={styles.snipper}>
            <ActivityIndicator size={50} color={colors.blue}/>
        </View>
    );
};

const styles = StyleSheet.create({
    snipper: {
        flex: 1,
        justifyContent: 'center',
    },
}); 
