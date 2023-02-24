//imports
import { CalendarDataType, CalendarTableType, FilterUsersFormikValuesType, FoundUserType, GroupDataType, ProfileData, SelectUserDataType, StatusRankEnum, StudentsDataType } from '.';

export type ErrorSliceStateType = {
    message: string
    isShow: boolean
}

export type UserSliceStateType = {
    status?: StatusRankEnum
    profile?: ProfileData
}

export type NavigateStateType = {
    isEntered: boolean
    tokenExpared: boolean
}

export type GroupsStateType = {
    groups: GroupDataType[]
}

export type CalendarStateType = {
    calendarsTable: CalendarTableType
    calendarStudents?: CalendarDataType
}

export type StudentsStateType = {
    students: StudentsDataType[]
}

export type FilterStateType = {
    foundUsers?: FoundUserType[]
    selectUserData?: SelectUserDataType | null
    prevFilterData?: FilterUsersFormikValuesType | {}
    selectStatus?: StatusRankEnum
    count?: number
}
