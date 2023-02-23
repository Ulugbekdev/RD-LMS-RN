//imports
import { CalendarDataType, CalendarTableType, GroupDataType, ProfileData, StatusRankEnum } from '.';

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
