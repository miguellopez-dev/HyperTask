import TaskCard from '../components/TaskCard';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

const TodayScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaProvider
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingRight: insets.right,
                paddingLeft: insets.left,
            }}
        >
            <TaskCard />
        </SafeAreaProvider>
    );
};

export default TodayScreen;
