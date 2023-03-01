//react
import React, { useCallback } from 'react';
//react-native
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
//redux
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getGroupsThunk } from '../../redux/thunks/groupsThunks';
// import { removeGroups } from '../../redux/reducers/groupsSlice';
//constants
import { colors, fonts } from '../../constants';
//components
import { Snipper } from '../../components/snipper';
import { useAppNavigation } from '../../hooks/navigationHooks';

export const MainScreen = () => {
    const dispatch = useAppDispatch();
    const navigation = useAppNavigation();
    const groups = useAppSelector(state => state.groupsReducer.groups);

    useFocusEffect(
        useCallback(() => {
            dispatch(getGroupsThunk());

            // return () => {
            //     dispatch(removeGroups());
            // };
        }, [])
    );

    return (
        <View style={styles.group}>
            {
                groups && groups.length > 0
                    ? <FlatList
                        data={groups}
                        keyExtractor={(group) => group.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.group__item}
                                onPress={() => navigation.navigate('groupStudents', { id: item.id.toString() })}
                            >
                                <Text style={styles.group__name}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    : <Snipper />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    group: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.white,
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
