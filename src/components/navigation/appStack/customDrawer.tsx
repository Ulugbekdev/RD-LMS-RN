//react
import React, { FC } from 'react';
//react-native
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
//redux
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { changeIsEntered, changeTokenExpared } from '../../../redux/reducers/navigateSlice';
//constants
import { asyncStorageKeys, colors, fonts } from '../../../constants';

const CustomDrawer: FC<any> = (props) => {
    const dispatch = useAppDispatch();
    const {removeItem} = useAsyncStorage(asyncStorageKeys.token);

    const eventSignOut = () => {
        removeItem();
        dispatch(changeTokenExpared(true));    
        dispatch(changeIsEntered(false));    
    };

    return (
        <SafeAreaView style={styles.nav}>
            <Text style={styles.nav__title}>Raqamli labaratoriya</Text>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <DrawerItem
                labelStyle={styles.nav__signOut}
                label={'Sign out'}
                onPress={eventSignOut}
                icon={() => (
                    <OcticonsIcon name={'sign-out'} color={colors.white} size={16}/>
                )}
            />
        </SafeAreaView>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    nav: {
        flex: 1,
        backgroundColor: colors.blue,
    },
    nav__title: {
        padding: 10,
        fontSize: 20,
        color: colors.white,
        fontFamily: fonts.montserratBold,
    },
    nav__signOut: {
        fontSize: 14,
        marginLeft: -20,
        color: colors.white,
        fontFamily: fonts.montserratRegular,
    },
});
