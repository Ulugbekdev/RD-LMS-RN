//enum
export enum ApiMethodEnum {
    get = 'get',
    post = 'post',
    patch = 'patch',
    delete = 'delete',
}

export enum StatusRankEnum {
    mentor = 'Mentor',
    student = 'Student',
    manager = 'Manager',
}

//http
export type ResponseType<T = any> = {
    status: number
    data: T
    statusText: string
    message?: string
}

export type TokenType = {
    access: string
    refresh: string
}

//data
export type GroupDataType = {
    id: number
    mentors: {
        mentor_id: number
        mentor_name: string
        subject_id: number
        subject_name: string
    }[]
    students: {
        student_id: number
        student_name: string
    }[]
    room: {
        room_id: number
        room_name: string
    }
    name: string
    name_uz: string
    name_en: string
    name_ru: string
    manager: number
    branch: number
    subjects: number[]
    subject_codes: {
        subject_code_id: number
        subject_code_name: string
    }[]
    code_subject_mentor_order: number[]
}

export type ProfileData = {
    id: number
    phone_num: string
    image: string
    groups: {
        id: number
        name: string
    }[]
    username: string
    status: StatusRankEnum
    branches: string[]
    first_name: string
    last_name: string
}

export type CalendarTableType = {
    [day: string]: CalendarTableDayType[]
}

export type CalendarTableDayType = {
    id: number
    name: string
    type: string
    startTime: string
    endTime: string
    background_color: string
    border_color: string
    room_name: string
    subject_name: string
    mentor: string
    group_id: number
    group_name: string
}

export type CalendarDataType = {
    id: number
    start: string
    end: string
    description: string
    group: {
        id: number
        name: string
        subject: number
        branch: number
    }
    room: number
    mentor: number
    student_visits: CalendarVisitType
    subject_name: string
    mentor_name: string
}

export type CalendarVisitType = {
    student_id: number
    student_name: string
    visited: boolean
}[]

export type StudentAndMentorDataType = {
    id: number
    first_name: string
    last_name: string
    status: string
}

export interface StudentsDataType extends StudentAndMentorDataType { }

export interface MentorsDataType extends StudentAndMentorDataType {
    subjects: {
        id: number
        name: string
    }[]
}

export type FoundUserType = {
    id: number
    image: string
    first_name: string
    last_name: string
    phone_num: number
}

export type SelectUserDataType = {
    id: number
    first_name: string
    last_name: string
    phone_num: string
    status: string
    image: string
    branch: number
    rooms: number[]
    mentors: number[]
    managers: number[]
    subjects: number[]
    subject_names: string[]
    group_names: string[]
    branch_names: string[]
    branch_name: string
    username: string
}

export type FilterUsersFormikValuesType = {
    status: StatusRankEnum
    subject: string
    group: string
}

export interface ValidateType {
    [key: string]: string
}

export type ResponsePaginationType<T = any> = {
    count: number
    next: string
    previous: string
    results: T
}
