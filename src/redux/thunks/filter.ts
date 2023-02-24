//api
import { api } from '../../api';
//redux
import { addFoundUsers } from '../reducers/filterSlice';
//constants
import { apiUrls } from './../../constants';
//types
import { SendFilterUsersThunkType } from '../../types/thunks';
import { FilterUsersFormikValuesType, FoundUserType, ResponsePaginationType, ResponseType, StatusRankEnum } from '../../types';

export const sendFilterUsersThunk: SendFilterUsersThunkType = ({data, page}) => async dispatch => {
    const urlAndQuery = `${apiUrls.lab.filter}?status=${data.status}${data.group ? `&group=${data.group}` : ''
        }${data.branch ? `&branch=${data.branch}` : ''
        }${data.subject ? `&subject=${data.subject}` : ''
        }${page ? `&page=${page}` : ''
        }`;
    const res: ResponseType<ResponsePaginationType<FoundUserType[]>> = await api(urlAndQuery);

    if (res.status === 200) {
        dispatch(addFoundUsers({
            count: res.data.count,
            foundUsers: res.data.results,
            prevFilterData: data as FilterUsersFormikValuesType,
            selectStatus: data.status === StatusRankEnum.manager
                ? StatusRankEnum.manager
                : data.status === StatusRankEnum.mentor
                    ? StatusRankEnum.mentor
                    : StatusRankEnum.student,
        }));
    }
};
