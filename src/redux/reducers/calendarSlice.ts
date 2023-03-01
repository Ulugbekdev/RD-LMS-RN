//redux 
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//types
import { CalendarStateType } from '../../types/slices';

const initialState: CalendarStateType = {
    calendarsTable: {
        ['Monday']: [],
        ['Tuesday']: [],
        ['Wednesday']: [],
        ['Thursday']: [],
        ['Friday']: [],
        ['Saturday']: [],
        ['Sunday']: [],
    },
    calendarStudents: undefined,
};

const calendarSlice = createSlice({
    name: 'calendarSlice',
    initialState,
    reducers: {
        addCalendarsTable: (state, action: PayloadAction<Pick<CalendarStateType, 'calendarsTable'>>) => {
            state.calendarsTable = action.payload.calendarsTable;
        },
        addCalendarStudents: (state, action: PayloadAction<Pick<CalendarStateType, 'calendarStudents'>>) => {
            state.calendarStudents = action.payload.calendarStudents;
        },
        removeCalendarsTable: (state) => {
            state.calendarsTable = {...initialState.calendarsTable};
        },
        removeCalendarStudents: (state) => {
            state.calendarStudents = undefined;
        },
    },
});

export const {
    addCalendarsTable,
    addCalendarStudents,
    removeCalendarsTable,
    removeCalendarStudents,
} = calendarSlice.actions;
export default calendarSlice.reducer;
