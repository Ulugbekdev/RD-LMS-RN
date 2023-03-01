//react 
import React, { useCallback, useState } from 'react';
//react-native
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//redux
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getCalendarsTableThunk } from '../../redux/thunks/calendarThunks';
import { removeCalendarsTable } from '../../redux/reducers/calendarSlice';
//custom hooks
import { useAppNavigation } from '../../hooks/navigationHooks';
//constants
import { colors, fonts } from '../../constants';
//moment
import moment from 'moment';
//components
import { Snipper } from '../../components/snipper';

export const CalendarScreen = () => {
    const dispatch = useAppDispatch();
    const navigation = useAppNavigation();
    const [dayName, setDayName] = useState<string | null>(null);
    const { calendarsTable } = useAppSelector(state => ({
        calendarsTable: state.calendarReducer.calendarsTable,
    }));

    useFocusEffect(
        useCallback(() => {
            dispatch(getCalendarsTableThunk());
            
            return () => {
                dispatch(removeCalendarsTable());
            };
        }, [])
    );

    return (
        <View style={styles.timeTable}>
            <Text style={styles.timeTable__title}>{moment().format('MMMM')}</Text>
            <View style={styles.timeTable__panel}>
                <FlatList
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false}
                    data={Object.keys(calendarsTable)}
                    keyExtractor={(key) => key}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setDayName(item)}
                            style={[
                                styles.timeTable__panel__btn,
                                dayName && dayName === item
                                    ? styles.timeTable__panel__btn_active
                                    : {},
                            ]}
                        >
                            <Text
                                style={[
                                    styles.timeTable__panel__text,
                                    dayName && dayName === item
                                        ? styles.timeTable__panel__text_active
                                        : {},
                                ]}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            {
                isNaN(+Object.keys(calendarsTable)[0].slice(0, 1))
                    ? <Snipper />
                    : <View>
                        {
                            dayName
                                ? calendarsTable
                                    && calendarsTable[dayName]
                                    && calendarsTable[dayName].length > 0
                                    ? <FlatList
                                        data={calendarsTable[dayName]}
                                        keyExtractor={(item) => item.id.toString()}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                style={[
                                                    styles.timeTable__lesson,
                                                    {
                                                        borderColor: item.border_color,
                                                        backgroundColor: item.background_color,
                                                    },
                                                ]}
                                                onPress={() => navigation.navigate('visiteds', { id: item.id.toString() })}
                                            >
                                                <>
                                                    <View style={styles.timeTable__lesson__cont}>
                                                        <Text
                                                            style={[
                                                                styles.timeTable__lesson__title,
                                                                styles.blackFont,
                                                            ]}
                                                        >
                                                            {item.subject_name}
                                                        </Text>
                                                        <Text
                                                            style={[
                                                                styles.timeTable__lesson__subtitle,
                                                                styles.blackFont,
                                                            ]}
                                                        >
                                                            {moment(item.endTime).format('HH:MM')} - {moment(item.startTime).format('HH:MM')}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.timeTable__lesson__cont}>
                                                        <Text
                                                            style={[
                                                                styles.timeTable__lesson__text,
                                                                styles.blackFont,
                                                            ]}
                                                        >
                                                            {item.mentor}
                                                        </Text>
                                                        <Text
                                                            style={[
                                                                styles.timeTable__lesson__text,
                                                                styles.blackFont,
                                                            ]}
                                                        >
                                                            {item.room_name}
                                                        </Text>
                                                    </View>
                                                </>
                                            </TouchableOpacity>
                                        )}
                                    />
                                    : <Text style={styles.timeTable__noLesson}>No lessons</Text>
                                : <Text style={styles.timeTable__noLesson}>Select day</Text>
                        }
                    </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    timeTable: {
        flex: 1,
        paddingTop: 15,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
    },
    timeTable__title: {
        fontSize: 22,
        color: colors.blue,
        fontFamily: fonts.montserratSemibold,
    },
    timeTable__panel: {
        paddingVertical: 15,
    },
    timeTable__panel__btn: {
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 12,
        marginHorizontal: 5,
        paddingHorizontal: 20,
        borderColor: colors.blue,
        backgroundColor: colors.blue,
    },
    timeTable__panel__btn_active: {
        backgroundColor: colors.white,
    },
    timeTable__panel__text: {
        fontSize: 18,
        color: colors.white,
        fontFamily: fonts.montserratMedium,
    },
    timeTable__panel__text_active: {
        color: colors.blue,
    },
    timeTable__lesson: {
        padding: 10,
        marginTop: 20,
        borderWidth: 3,
        borderRadius: 10,
    },
    timeTable__lesson__cont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    timeTable__lesson__title: {
        fontSize: 24,
        fontFamily: fonts.montserratBold,
    },
    timeTable__lesson__subtitle: {
        fontSize: 14,
        fontFamily: fonts.montserratBold,
    },
    timeTable__lesson__text: {
        fontSize: 14,
        fontFamily: fonts.montserratRegular,
    },
    timeTable__noLesson: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.black,
        fontFamily: fonts.montserratMedium,
    },
    blackFont: {
        color: colors.black,
    },
});
