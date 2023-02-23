//react
import { Dispatch, SetStateAction } from 'react';
//redux
import { AppDispatch } from '../redux';
//navigation types
import { AppScreenNavigationProp } from './navigation';

export type ThunkType<T> = T extends null
    ? () => (dispatch: AppDispatch) => void
    : ({ ...args }: T) => (dispatch: AppDispatch) => void


export type SendStudentsVisitedThunkType = ThunkType<{
    id: string
    student_visits: number[]
    setLoading: Dispatch<SetStateAction<boolean>>
    navigation: AppScreenNavigationProp
}>
