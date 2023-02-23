//redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//types
import { GroupsStateType } from '../../types/slices';

const initialState: GroupsStateType = {
    groups: [],
};

const groupSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {
        addGroups: (state, action: PayloadAction<Pick<GroupsStateType, 'groups'>>) => {
            state.groups = action.payload.groups;
        },
        removeGroups: (state) => {
            state.groups = [];
        },
    },
});

export const {
    addGroups,
    removeGroups,
} = groupSlice.actions;
export default groupSlice.reducer;
