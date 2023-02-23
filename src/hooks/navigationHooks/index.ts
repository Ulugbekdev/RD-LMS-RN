//react-native
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
//types
import { AppScreenNavigationProp, AppStackNavigatorParamList } from '../../types/navigation';

export const useAppNavigation = () => useNavigation<AppScreenNavigationProp>();
export const useAppRoute = () => useRoute<RouteProp<AppStackNavigatorParamList>>();
