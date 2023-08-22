import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TodayScreen from './src/screens/TodayScreen';
import Navigation from './src/components/Navigation';

export default function App() {
    return (
        <SafeAreaProvider>
            <Navigation />
        </SafeAreaProvider>
    );
}
