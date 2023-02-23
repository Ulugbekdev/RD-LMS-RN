//redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//types
import { NavigateStateType } from './../../types/slices';

const initialState: NavigateStateType = {
    isEntered: false,
    tokenExpared: false,
};

const navigateSlice = createSlice({
    name: 'navigateSlice',
    initialState,
    reducers: {
        changeIsEntered: (state, action: PayloadAction<boolean>) => {
            state.isEntered = action.payload;
        },
        changeTokenExpared: (state, action: PayloadAction<boolean>) => {
            state.tokenExpared = action.payload;
        },
    },
});

export const {
    changeIsEntered,
    changeTokenExpared,
} = navigateSlice.actions;
export default navigateSlice.reducer;
