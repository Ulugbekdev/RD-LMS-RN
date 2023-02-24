//redux
import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './reducers/errorSlice';
import userReducer from './reducers/userSlice';
import navigateReducer from './reducers/navigateSlice';
import groupsReducer from './reducers/groupsSlice';
import calendarReducer from './reducers/calendarSlice';
import filterReducer from './reducers/filterSlice';

export const store = configureStore({
    reducer: {
        errorReducer,
        userReducer,
        navigateReducer,
        groupsReducer,
        calendarReducer,
        filterReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
