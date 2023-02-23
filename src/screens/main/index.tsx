//react
import React, { useCallback } from 'react';
//react-native
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
//redux
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getGroupsThunk } from '../../redux/thunks/groupsThunks';
import { removeGroups } from '../../redux/reducers/groupsSlice';
//constants
import { colors, fonts } from '../../constants';
//components
import { Snipper } from '../../components/snipper';

export const MainScreen = () => {
    const dispatch = useAppDispatch();
    const groups = useAppSelector(state => state.groupsReducer.groups);

    useFocusEffect(
        useCallback(() => {
            dispatch(getGroupsThunk());

            return () => {
                dispatch(removeGroups());
            };
        }, [])
    );

    return groups && groups.length > 0
        ? (
            <View style={styles.group}>
                <Text style={styles.group__title}>Groups</Text>
                <FlatList
                    data={groups}
                    keyExtractor={(group) => group.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.group__item}>
                            <Text style={styles.group__name}>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        )
        : <Snipper />;
};

const styles = StyleSheet.create({
    group: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.white,
    },
    group__title: {
        fontSize: 22,
        paddingBottom: 10,
        color: colors.black,
        fontFamily: fonts.montserratBold,
    },
    group__item: {
        marginTop: 15,
        borderWidth: 2,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: colors.blue,
    },
    group__name: {
        fontSize: 18,
        color: colors.black,
        fontFamily: fonts.montserratMedium,
    },
});
