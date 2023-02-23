//imports
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//AuthStack types
export type AuthStackNavigatorParamList = {
    auth: undefined
}

export type AuthRoutesKeyType = keyof AuthStackNavigatorParamList

export type AuthScreenNavigationProp = NativeStackNavigationProp<AuthStackNavigatorParamList>

//AppStack types
export type AppStackNavigatorParamList = {
    main: undefined
    profile: undefined
    calendar: undefined
    visiteds: {
        id: string
    }
}

export type AppRoutesKeyType = keyof AppStackNavigatorParamList

export type AppScreenNavigationProp = NativeStackNavigationProp<AppStackNavigatorParamList>
