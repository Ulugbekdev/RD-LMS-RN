//redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//types
import { UserSliceStateType } from './../../types/slices';

const initialState: UserSliceStateType = {
    status: undefined,
    profile: undefined
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        addStatus: (state, action: PayloadAction<Pick<UserSliceStateType, 'status'>>) => {
            state.status = action.payload.status;
        },
        addProfileData: (state, action: PayloadAction<Pick<UserSliceStateType, 'profile'>>) => {
            state.profile = action.payload.profile;
        },  
        removeStatus: (state) => {
            state.status = undefined;
        },
        removeProfileData: (state) => {
            state.profile = undefined;
        },
    },
});

export const {
    addStatus,
    removeStatus,
    addProfileData,
    removeProfileData,
} = userSlice.actions;
export default userSlice.reducer;
