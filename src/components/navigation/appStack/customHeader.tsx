//react
import React, { FC } from 'react';
//react-native
import { DrawerHeaderProps } from '@react-navigation/drawer';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//constants
import { colors, fonts } from '../../../constants';

export const Header: FC<DrawerHeaderProps> = ({ navigation, options }) => (
    <View
        style={styles.header}
    >
        <TouchableOpacity
            style={styles.header__btn}
            onPress={() => navigation.openDrawer()}
        >
            <AntDesignIcon size={30} color={colors.blue} name={'menu-fold'} />
        </TouchableOpacity>
        <Text style={styles.header__title}>{options.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: colors.white,
    },
    header__btn: {
        marginRight: 20,
    },
    header__title: {
        fontSize: 22,
        color: colors.blue,
        fontFamily: fonts.montserratBold,
    },
});
