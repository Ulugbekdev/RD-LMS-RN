//react
import React from 'react';
//react-native
import { StyleSheet, Text, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
//constants
import { colors, fonts } from '../../constants';

export const NoInternet = () => {
    return (
        <View style={styles.cont}>
            <FeatherIcon name={'wifi-off'} color={colors.blue} size={20}/>
            <Text style={styles.cont__text}>
                No internet connection
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    cont__text: {
        fontSize: 18,
        color: colors.blue,
        fontFamily: fonts.montserratMedium,
    },
});
