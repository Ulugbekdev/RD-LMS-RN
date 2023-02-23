//api
import { api } from '../../api';
import { apiUrls } from '../../constants';
//types
import { ProfileData, ResponseType, ThunkType } from '../../types';
//redux
import { addProfileData, addStatus } from '../reducers/userSlice';

export const getStatusThunk: ThunkType<null> = () => async dispatch => {
    const res: ResponseType = await api(apiUrls.accounts.status);
    
    if (res.status === 200) {
        console.log(res.data);
        
        dispatch(addStatus({
            status: res.data.status,
        }));
    }
};

export const getProfileDataThunk: ThunkType<null> = () => async dispatch => {
    const res: ResponseType<ProfileData> = await api(apiUrls.accounts.profile);
    
    if (res.status === 200) {
        dispatch(addProfileData({
            profile: res.data,
        }));
    }
};

