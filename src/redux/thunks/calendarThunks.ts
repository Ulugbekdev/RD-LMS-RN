//api
import { api } from '../../api';
//constants
import { apiUrls } from '../../constants';
//types
import { CalendarDataType, CalendarTableType, ResponseType, ThunkType } from '../../types';
//redux
import { addCalendarsTable, addCalendarStudents } from '../reducers/calendarSlice';

export const getCalendarsTableThunk: ThunkType<null> = () => async dispatch => {
    const res: ResponseType<{ message: CalendarTableType }> = await api(apiUrls.lab.week_calendar);

    if (res.status === 200) {
        dispatch(addCalendarsTable({
            calendarsTable: res.data.message,
        }));
    }
};

export const getCalendarStudentsThunk: ThunkType<string> = (id) => async dispatch => {
    const res: ResponseType<CalendarDataType> = await api(`${apiUrls.lab.calendars}${id}`);

    if (res.status === 200) {
        dispatch(addCalendarStudents({
            calendarStudents: res.data,
        }));
    }
};

