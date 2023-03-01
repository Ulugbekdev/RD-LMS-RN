//react
import React, { useEffect, useState } from 'react';
//react-native
import { NavigationContainer } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
//redux
import { getStatusThunk } from '../../redux/thunks/userThunks';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { changeTokenExpared } from '../../redux/reducers/navigateSlice';
//components
import { AppStack } from './appStack';
import { AuthStack } from './authStack';
//lib
import { asyncStorageKeys } from '../../constants';

export const Navigation = () => {
    const dispatch = useAppDispatch();
    const { getItem } = useAsyncStorage(asyncStorageKeys.token);
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const {isEntered, isExpered} = useAppSelector(state => ({
        isEntered: state.navigateReducer.isEntered,
        isExpered: state.navigateReducer.tokenExpared,
    }));

    const readToken = async () => {
        const item = await getItem();
        
        if (item || isEntered && !isExpered) {
            setIsAuth(true);
            dispatch(getStatusThunk());
        } else {
            setIsAuth(false);
            dispatch(changeTokenExpared(false));
        }
        setLoading(false);
    };

    useEffect(() => {
        readToken();
    }, [isEntered, isExpered]);

    return (
        <NavigationContainer>
            {
                !loading 
                ? isAuth ? <AppStack /> : <AuthStack />
                : null
            }
        </NavigationContainer>
    );
};
