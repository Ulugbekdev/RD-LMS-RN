//react
import React from 'react';
//react-native
import { useNetInfo } from '@react-native-community/netinfo';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
//redux
import { store } from './src/redux';
import { Provider } from 'react-redux';
//components
import { Error } from './src/components/error';
import { Navigation } from './src/components/navigation';
import { NoInternet } from './src/components/noInternet';
import { Snipper } from './src/components/snipper';

function App(): JSX.Element {
	const { isConnected } = useNetInfo();

	return (
		<SafeAreaView style={styles.app}>
			<Provider store={store}>
				{
					isConnected
						? <Navigation />
						: isConnected === null
							? <Snipper />
							: <NoInternet />
				}
				<Error />
			</Provider>
			<StatusBar barStyle={'light-content'} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
	},
});

export default App;
