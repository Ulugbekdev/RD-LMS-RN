//react
import React from 'react';
//react-native
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppStackNavigatorParamList } from '../../../types/navigation';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
//components
import CustomDrawer from './customDrawer';
import { MainScreen } from '../../../screens/main';
import { ProfileScreen } from '../../../screens/profile';
//constants
import { colors, fonts } from '../../../constants';
import { CalendarScreen } from '../../../screens/calendar';
import { VisitedsScreen } from '../../../screens/visiteds';
import { GroupStudentsScreen } from '../../../screens/groupStudents';

const Drawer = createDrawerNavigator<AppStackNavigatorParamList>();

export const AppStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#474866',
                drawerActiveTintColor: colors.white,
                drawerLabelStyle: {
                    fontSize: 16,
                    marginLeft: -20,
                    textTransform: 'capitalize',
                    fontFamily: fonts.montserratSemibold,
                },
                drawerInactiveTintColor: colors.white,
                swipeEdgeWidth: 100,
                swipeMinDistance: 10,
            }}
            initialRouteName={'main'}
        >
            <Drawer.Screen
                name={'main'}
                component={MainScreen}
                options={{
                    drawerIcon: (props) => (
                        <AntDesignIcons size={20} name={'home'} color={props.color} />
                    ),
                }}
            />
            <Drawer.Screen
                name={'profile'}
                component={ProfileScreen}
                options={{
                    drawerIcon: (props) => (
                        <AntDesignIcons size={20} name={'user'} color={props.color} />
                    ),
                }}
            />
            <Drawer.Screen
                name={'calendar'}
                component={CalendarScreen}
                options={{
                    drawerIcon: (props) => (
                        <AntDesignIcons size={20} name={'table'} color={props.color} />
                    ),
                }}
            />
            <Drawer.Screen
                name={'visiteds'}
                options={{
                    drawerItemStyle: {
                        display: 'none',
                    },
                }}
                component={VisitedsScreen}
            />
            <Drawer.Screen
                name={'groupStudents'}
                options={{
                    drawerItemStyle: {
                        display: 'none',
                    },
                }}
                component={GroupStudentsScreen}
            />
        </Drawer.Navigator>
    );
};
