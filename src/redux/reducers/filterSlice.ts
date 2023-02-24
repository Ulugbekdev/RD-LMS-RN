//redux 
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//types
import { StatusRankEnum } from '../../types';
import { FilterStateType } from '../../types/slices';


const initialState: FilterStateType = {
    selectStatus: StatusRankEnum.mentor,
    selectUserData: null,
    prevFilterData: {},
    count: undefined,
    foundUsers: [],
};

const FoundUsersSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        addFoundUsers: (state, action: PayloadAction<Omit<FilterStateType, 'selectUserData'>>) => {
            state.count = action.payload.count;
            state.foundUsers = action.payload.foundUsers;
            state.prevFilterData = action.payload.prevFilterData;
            state.selectStatus = action.payload.selectStatus;
        },
        addUserData: (state, action: PayloadAction<Pick<FilterStateType, 'selectUserData'>>) => {
            state.selectUserData = action.payload.selectUserData;
        },
        removeFoundUsers: (state) => {
            state.foundUsers = [];
            state.count = undefined;
            state.prevFilterData = {};
            state.selectStatus = StatusRankEnum.mentor;
            state.selectUserData = null;
        },
        removeSelectUserData: (state) => {
            state.selectUserData = null;
        },
    },
});

export const {
    addFoundUsers,
    addUserData,
    removeFoundUsers,
    removeSelectUserData,
} = FoundUsersSlice.actions;
export default FoundUsersSlice.reducer;
