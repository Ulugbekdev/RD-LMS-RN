//react
import React, { useEffect } from 'react';
//react-native
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { colors, fonts } from '../../constants';
//redux
import { hideError } from '../../redux/reducers/errorSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

export const Error = () => {
    const dispatch = useAppDispatch();
    const error = useAppSelector(state => state.errorReducer);

    useEffect(() => {
        console.log(error.message);
        
        if (error.isShow) {
            setTimeout(() => dispatch(hideError()), 5000);
        }
    }, [error]);

    return (
        <View
            style={[
                styles.error,
                {
                    display: error.isShow ? 'flex' : 'none',
                },
            ]}
        >
            <View style={styles.error__container}>
                <Text style={styles.error__text}>{error.message}</Text>
                <TouchableHighlight
                    underlayColor={'transparent'}
                    onPress={() => dispatch(hideError())}
                    style={styles.error__btn}
                >
                    <Text style={styles.error__btn__text}>&#x2715;</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    error: {
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    error__container: {
        borderRadius: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 30,
        backgroundColor: colors.red,
        transform: [{translateY: 30}],
        justifyContent: 'center',
    },
    error__text: {
        fontSize: 18,
        color: colors.white,
        fontFamily: fonts.montserratSemibold,
    },
    error__btn: {
        top: 10,
        right: 10,
        position: 'absolute',
    },
    error__btn__text: {
        fontSize: 15,
        color: colors.white,
    },
});
