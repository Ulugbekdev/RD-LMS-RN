//react
import React, { useCallback, useState } from 'react';
//react-native
import { Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, TouchableHighlight } from 'react-native';
//redux
import { getCalendarStudentsThunk } from '../../redux/thunks/calendarThunks';
import { removeCalendarStudents } from '../../redux/reducers/calendarSlice';
//constants
import { colors, fonts } from '../../constants';
//custom hooks
import { useAppNavigation, useAppRoute } from '../../hooks/navigationHooks';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
//components
import { Snipper } from '../../components/snipper';
import { CalendarVisitType } from '../../types';
import { sendStudentsVisited } from '../../redux/thunks/visitedThunks';

export const VisitedsScreen = () => {
    const { params } = useAppRoute();
    const dispatch = useAppDispatch();
    const navigation = useAppNavigation();
    const [loading, setLoading] = useState(false);
    const { calendarStudents } = useAppSelector(state => ({
        calendarStudents: state.calendarReducer.calendarStudents,
    }));
    const [listVisits, setListVisits] = useState<CalendarVisitType>([]);

    useFocusEffect(
        useCallback(() => {
            if (params?.id) {
                dispatch(getCalendarStudentsThunk(params.id.toString()));
            }
            return () => {
                dispatch(removeCalendarStudents());
            };
        }, [params])
    );

    useFocusEffect(
        useCallback(() => {
            if (calendarStudents) {
                setListVisits(calendarStudents.student_visits);
            }
        }, [calendarStudents])
    );

    const onCheck = (id: number) => {
        if (listVisits) {
            setListVisits(prevState => prevState.map(item => {
                if (item.student_id === id) {
                    return {
                        ...item,
                        visited: !item.visited,
                    };
                }
                return item;
            }));
        }
    };

    const onSendVisits = () => {        
        setLoading(true);
        params?.id && dispatch(sendStudentsVisited({
            id: params.id.toString(),
            student_visits: listVisits.filter(visit => visit.visited).map(visit => visit.student_id),
            setLoading,
            navigation,
        }));
    };

    return (
        <View style={styles.visiteds}>
            <Text style={styles.visiteds__title}>Mark visits</Text>
            {
                listVisits
                    ? <FlatList
                        data={listVisits}
                        keyExtractor={(item) => item.student_id.toString()}
                        renderItem={({ item }) => (
                            <CheckBox
                                title={item.student_name}
                                checked={item.visited}
                                onPress={() => onCheck(item.student_id)}
                            />
                        )}
                    />
                    : <Snipper />
            }
            <TouchableHighlight
                style={[
                    styles.visiteds__btn,
                    loading && styles.visiteds__btn_active,
                ]}
                onPress={onSendVisits}
            >
                <Text style={styles.visiteds__btn__text}>Send</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    visiteds: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: colors.white,
    },
    visiteds__title: {
        fontSize: 24,
        paddingVertical: 10,
        color: colors.black,
        fontFamily: fonts.montserratBold,
    },
    visiteds__btn: {
        padding: 10,
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: colors.blue,
    },
    visiteds__btn_active: {
        backgroundColor: colors.gray,
    },
    visiteds__btn__text: {
        fontSize: 18,
        marginLeft: 10,
        color: colors.white,
        textAlign: 'center',
        fontFamily: fonts.montserratMedium,
    },
});
