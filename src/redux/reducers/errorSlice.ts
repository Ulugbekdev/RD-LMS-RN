//redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//types
import { ErrorSliceStateType } from '../../types/slices';

const initialState: ErrorSliceStateType = {
    message: '',
    isShow: false,
};

const errorSlice = createSlice({
    name: 'errorSlice',
    initialState,
    reducers: {
        showError: (state, action: PayloadAction<Pick<ErrorSliceStateType, 'message'>>) => {
            state.message = action.payload.message;
            state.isShow = true;
        },
        hideError: (state) => {
            state.isShow = false;
            state.message = '';
        },
    },
});

export const { showError, hideError } = errorSlice.actions;
export default errorSlice.reducer;
