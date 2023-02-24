//api
import { api } from '../../api';
//redux
import { addGroups } from '../reducers/groupsSlice';
//types
import { ThunkType } from '../../types/thunks';
import { GroupDataType, ResponseType } from '../../types';
//constants
import { apiUrls } from '../../constants';

export const getGroupsThunk: ThunkType<null> = () => async dispatch => {
    const res: ResponseType<GroupDataType[]> = await api(apiUrls.lab.groups);
    
    if (res.status === 200) {
        dispatch(addGroups({
            groups: res.data,
        }));
    }
};
