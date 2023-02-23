//api
import { api } from '../../api';
//constants
import { apiUrls } from '../../constants';
//types
import { ApiMethodEnum, ResponseType } from '../../types';
import { SendStudentsVisitedThunkType } from '../../types/thunks';
import { showError } from '../reducers/errorSlice';

export const sendStudentsVisited: SendStudentsVisitedThunkType = ({id, student_visits, setLoading, navigation}) => async dispatch => {
    const res: ResponseType = await api(`${apiUrls.lab.calendars}${id}/`, ApiMethodEnum.patch, {student_visits});
    
    if (res.status === 200) {
        navigation.navigate('calendar');
    } else if (res.message || res.status === 403) {
        dispatch(showError({
            message: res.message || res.data.detail,
        }));
    }

    setLoading(false);
};
