import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FAB } from '@rneui/base';
import TaskCard from '../components/TaskCard';

const TodayScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingRight: insets.right,
                paddingLeft: insets.left,
            }}
        >
            <TaskCard />
            <FAB
                icon={{ name: 'add', color: 'white' }}
                color='green'
                placement='right'
            />
        </View>
    );
};

export default TodayScreen;
