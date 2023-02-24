//react
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
//react-native
import { FlatList, Text, View, StyleSheet } from 'react-native';
//redux
import { sendFilterUsersThunk } from '../../redux/thunks/filter';
//custom hooks
import { useAppRoute } from '../../hooks/navigationHooks';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
//types
import { StatusRankEnum } from '../../types';
//constants
import { colors, fonts } from '../../constants';
//components
import { Snipper } from '../../components/snipper';

export const GroupStudentsScreen = () => {
    const { params } = useAppRoute();
    const dispatch = useAppDispatch();
    const { foundUsers } = useAppSelector(state => ({
        foundUsers: state.filterReducer.foundUsers,
    }));

    useFocusEffect(
        useCallback(() => {
            if (params?.id) {
                dispatch(sendFilterUsersThunk({
                    data: {
                        group: params.id as string,
                        status: StatusRankEnum.student,
                    },
                }));
            }
        }, [params])
    );

    return (
        <View style={styles.groupStudents}>
            <Text style={styles.groupStudents__title}>Students</Text>
            {
                foundUsers && foundUsers.length > 0
                    ? <FlatList 
                        data={foundUsers}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => (
                            <View style={styles.groupStudents__item}>
                                <Text style={styles.groupStudents__item__userName}>{item.first_name} {item.last_name}</Text>
                            </View>
                        )}
                    />
                    : <Snipper />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    groupStudents: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: colors.white,
    },
    groupStudents__title: {
        fontSize: 22,
        paddingVertical: 10,
        color: colors.black,
        fontFamily: fonts.montserratBold,
    },
    groupStudents__item: {
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.blue,
    },
    groupStudents__item__userName: {
        fontSize: 18,
        color: colors.blue,
        fontFamily: fonts.montserratMedium,
    },
});
