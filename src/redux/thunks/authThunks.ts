//react-native
import AsyncStorage from '@react-native-async-storage/async-storage';
//react
import { Dispatch, SetStateAction } from 'react';
//redux
import { showError } from '../reducers/errorSlice';
import { getStatusThunk } from './userThunks';
//api
import { api } from '../../api';
//types
import { IAuthForm } from '../../types/forms';
import { ApiMethodEnum, ResponseType, ThunkType, TokenType } from '../../types';
//constants
import { apiUrls, asyncStorageKeys } from '../../constants';
import { changeIsEntered } from '../reducers/navigateSlice';

type AuthThunkType = ThunkType<{
    data: IAuthForm
    setIsDisabled: Dispatch<SetStateAction<boolean>>
}>

export const authThunk: AuthThunkType = ({ data, setIsDisabled }) => async dispatch => {
    setIsDisabled(true);

    const res: ResponseType<TokenType> = await api(apiUrls.accounts.login, ApiMethodEnum.post, data);

    if (res.status === 200) {
        const jsonValue = JSON.stringify({
            access: res.data.access,
            refresh: res.data.refresh,
        });
        await AsyncStorage.setItem(asyncStorageKeys.token, jsonValue);        
        dispatch(getStatusThunk());
        dispatch(changeIsEntered(true));
    } else if (res.status === 400 || res.status === 401) {
        const typedData = res.data as any;
        dispatch(showError({
            message: typedData.username || typedData.password || typedData.detail,
        }));
    } else if (res.message) {
        dispatch(showError({
            message: res.message,
        }));
    }

    setIsDisabled(false);
};
