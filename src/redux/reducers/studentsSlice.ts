//redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//types
import { StudentsStateType } from './../../types/slices';

const initialState: StudentsStateType = {
    students: [],
};

const studentsSlice = createSlice({
    name: 'studentsSlice',
    initialState,
    reducers: {
        addStudents: (state, action: PayloadAction<Pick<StudentsStateType, 'students'>>) => {
            state.students = action.payload.students;
        },
        removeStudents: (state) => {
            state.students = [];
        },
    },
});

export const {
    addStudents,
    removeStudents,
} = studentsSlice.actions;
export default studentsSlice.reducer;
