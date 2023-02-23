export const asyncStorageKeys = {
    token: 'token',
};

export const apiUrls = {
    accounts: {
        login: '/accounts/login/',
        logout: '/accounts/logout/',
        refresh: '/accounts/refresh/',
        status: '/accounts/status/',
        profile: '/accounts/profile/',
    },
    lab: {
        managers: '/lab/managers/',
        mentors: '/lab/mentors/',
        students: '/lab/students/',
        subjects: '/lab/subjects/',
        subject_by_group: '/lab/subject_by_group',
        subject_codes: '/lab/subject_codes/',
        rooms: '/lab/rooms/',
        groups: '/lab/groups/',
        branch: '/lab/branches/',
        filter: '/lab/filter',
        groups_filter: '/lab/groups_filter',
        calendars: '/lab/calendars/',
        calendar_filter: '/lab/calendar_filter',
        week_calendar: '/lab/week_calendar',
        student_files_filter: '/lab/student_files_filter',
        student_file_download: '/lab/student_file_download',
        mentor_file_download: '/lab/mentor_file_download',
        mentor_files_filter: '/lab/mentor_files_filter',
        mentor_own_files: '/lab/mentor_own_files',
        student_own_files: '/lab/student_own_files',
        student_file: '/lab/student_file',
        mentor_file: '/lab/mentor_file',
        groups_by_user: '/lab/groups_by_user',
        mentor_by_manager_branch: '/lab/mentor_by_manager_branch',
        student_by_manager_branch: '/lab/student_by_manager_branch',
        room_by_manager_branch: '/lab/room_by_manager_branch',
    },
    baseUrl: 'https://api.raqamlilab.uz',
};

export const paths = {
    add: 'add',
    main: 'main',
    auth: 'auth',
    profile: 'profile',
    viewVisiteds: 'view-visiteds',
    files: 'files',
    visited: 'visited',
    filesStudents: 'files/students',
    users: 'users',
    groupsStudents: 'groups/students/',
    groupsChange: 'groups/change',
    calendars: 'calendars',
};


export const navLinks = [
    {
        name: 'Main',
        svgUri: '../../../assets/svg/homeIcon.svg',
        path: paths.main,
    },
    {
        name: 'Users',
        svgUri: '../../../assets/svg/usersIcon.svg',
        path: paths.users,
    },
    {
        name: 'Timetable',
        svgUri: '../../../assets/svg/timeTableIcon.svg',
        path: paths.calendars,
    },
    {
        name: 'Files',
        svgUri: '../../../assets/svg/filesIcon.svg',
        path: paths.files,
    },
    {
        name: 'View Visited',
        svgUri: '../../../assets/svg/viewIcon.svg',
        path: paths.viewVisiteds,
    },
    {
        name: 'Profile',
        svgUri: '../../../assets/svg/profileIcon.svg',
        path: paths.profile,
    },
];


export const colors = {
    red: 'red',
    white: 'white',
    black: 'black',
    blue: '#25274d',
    gray: '#868686',
    grayLight: '#ECECEC',
};

export const fonts = {
    montserratMedium: 'Montserrat-Medium',
    montserratRegular: 'Montserrat-Regular',
    montserratSemibold: 'Montserrat-SemiBold',
    montserratBold: 'Montserrat-Bold',
};
