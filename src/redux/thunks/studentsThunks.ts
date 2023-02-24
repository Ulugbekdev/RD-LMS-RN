//api
import { api } from '../../api';
//redux
import { addStudents } from '../reducers/studentsSlice';
//constants
import { apiUrls } from '../../constants';
//types
import { ThunkType } from '../../types/thunks';
import { ResponseType, StudentsDataType } from '../../types';

export const getStudentsThunk: ThunkType<null> = () => async dispatch => {
    const res: ResponseType<StudentsDataType[]> = await api(apiUrls.lab.students);

    if (res.status === 200) {
        dispatch(addStudents({
            students: res.data,
        }));
    }
};

export const getStudentsByManagerBranchThunk: ThunkType<null> = () => async dispatch => {
    const res: ResponseType<StudentsDataType[]> = await api(apiUrls.lab.student_by_manager_branch);

    if (res.status === 200) {
        dispatch(addStudents({
            students: res.data,
        }));
    }
};
