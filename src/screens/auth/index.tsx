//react
import React, { useState } from 'react';
//react-native
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
//redux
import { useAppDispatch } from '../../hooks/reduxHooks';
import { authThunk } from '../../redux/thunks/authThunks';
//formik
import { Formik } from 'formik';
//constants
import { colors, fonts } from '../../constants';
import { authFormValues } from '../../constants/form';

export const AuthScreen = () => {
    const dispatch = useAppDispatch();
    const [isDisabled, setIsDisabled] = useState(false);

    return (
        <Formik
            initialValues={authFormValues}
            validate={(values) => {
                if (!values.username || !values.password) {
                    return {
                        message: 'All fields required',
                    };
                }
            }}
            validateOnChange={false}
            onSubmit={async (values) => {
                dispatch(authThunk({ data: values, setIsDisabled }));
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View style={styles.auth}>
                    <Text style={styles.auth__title}>Authorization</Text>
                    <TextInput
                        value={values.username}
                        placeholder={'Login'}
                        onBlur={handleBlur('username')}
                        onChangeText={handleChange('username')}
                        style={[styles.auth__field, styles.auth__common]}
                    />
                    <TextInput
                        secureTextEntry
                        value={values.password}
                        placeholder={'Password'}
                        onBlur={handleBlur('password')}
                        onChangeText={handleChange('password')}
                        style={[styles.auth__field, styles.auth__common]}
                    />
                    {
                        errors.message &&
                        <Text style={styles.auth__error}>{errors.message}</Text>
                    }
                    <TouchableHighlight
                        onPress={handleSubmit}
                        disabled={isDisabled}
                        style={[
                            styles.auth__btn,
                            styles.auth__common,
                        ]}
                        underlayColor={colors.blue}
                    >
                        <Text style={[
                            styles.auth__btn__text,
                            {
                                color: isDisabled ? colors.blue : colors.white,
                                backgroundColor: isDisabled ? colors.grayLight : colors.blue,
                            },
                        ]}
                        >
                            Sign in
                        </Text>
                    </TouchableHighlight>
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    auth: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    auth__title: {
        fontSize: 24,
        color: colors.black,
        fontFamily: fonts.montserratBold,
    },
    auth__field: {
        fontSize: 16,
        marginTop: 15,
        borderWidth: 2,
        color: colors.black,
        paddingHorizontal: 15,
        borderColor: colors.blue,
    },
    auth__btn: {
        marginTop: 20,
    },
    auth__btn__text: {
        padding: 10,
        fontSize: 18,
        width: '100%',
        textAlign: 'center',
        backgroundColor: colors.blue,
        fontFamily: fonts.montserratSemibold,
    },
    auth__error: {
        fontSize: 18,
        marginTop: 10,
        color: colors.red,
        fontFamily: fonts.montserratMedium,
    },
    auth__common: {
        width: '100%',
        maxWidth: 300,
        borderRadius: 8,
    },
});
