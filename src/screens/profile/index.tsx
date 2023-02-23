//react
import React, { useCallback } from 'react';
//react-native
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
//redux
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getProfileDataThunk } from '../../redux/thunks/userThunks';
import { removeProfileData } from '../../redux/reducers/userSlice';
//constants
import { apiUrls, colors, fonts } from '../../constants';
//components
import { Snipper } from '../../components/snipper';

export const ProfileScreen = () => {
    const dispatch = useAppDispatch();
    const profile = useAppSelector(state => state.userReducer.profile);

    useFocusEffect(
        useCallback(() => {
            dispatch(getProfileDataThunk());

            return () => {
                dispatch(removeProfileData());
            };
        }, [])
    );

    return profile
        ? (
            <ScrollView style={styles.profile}>
                <View style={styles.profile__imgCont}>
                    <Image
                        style={styles.profile__img}
                        source={{
                            uri: `${apiUrls.baseUrl}${profile.image}`,
                        }}
                    />
                </View>
                <Text
                    style={styles.profile__username}
                >
                    {profile.first_name} {profile.last_name}
                </Text>
                <Text
                    style={styles.profile__status}
                >
                    {profile.status}
                </Text>
                <View style={styles.profile__info}>
                    <Text style={styles.profile__info__title}>
                        Phone:
                    </Text>
                    <Text style={styles.profile__info__content}>
                        {profile.phone_num}
                    </Text>
                </View>
                <View style={styles.profile__info}>
                    <Text style={styles.profile__info__title}>
                        Name of branch:
                    </Text>
                    <Text style={styles.profile__info__content}>
                        {profile.branches.join(', ')}
                    </Text>
                </View>
                <View style={styles.profile__info}>
                    <Text style={styles.profile__info__title}>
                        Group:
                    </Text>
                    <Text style={styles.profile__info__content}>
                        {profile.groups.map(group => group.name).join(', ')}
                    </Text>
                </View>
            </ScrollView>
        )
        : <Snipper />;
};

const styles = StyleSheet.create({
    profile: {
        padding: 10,
        backgroundColor: colors.white,
    },
    profile__imgCont: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    profile__img: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profile__username: {
        fontSize: 18,
        marginVertical: 10,
        color: colors.black,
        textAlign: 'center',
        fontFamily: fonts.montserratSemibold,
    },
    profile__status: {
        fontSize: 14,
        color: colors.gray,
        textAlign: 'center',
        fontFamily: fonts.montserratMedium,
    },
    profile__info: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profile__info__title: {
        fontSize: 16,
        marginRight: 10,
        color: colors.black,
        fontFamily: fonts.montserratRegular,
    },
    profile__info__content: {
        fontSize: 16,
        color: colors.gray,
        fontFamily: fonts.montserratRegular,
    },
});
