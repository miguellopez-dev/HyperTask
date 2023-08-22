import { Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, ButtonGroup, FAB, Icon } from '@rneui/base';
import TaskCard from '../components/TaskCard';
import { useState } from 'react';
import { Input } from '@rneui/themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const TodayScreen = () => {
    const insets = useSafeAreaInsets();

    const [showModal, setShowModal] = useState(false);
    const [selectedPriorty, setSelectedPriorty] = useState(0);

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
                onPress={() => setShowModal(true)}
                icon={{ name: 'add', color: 'white' }}
                color='green'
                placement='right'
            />

            <Modal
                animationType='slide'
                visible={showModal}
                onRequestClose={() => setShowModal(!showModal)}
            >
                <SafeAreaView style={styles.modal}>
                    <Text style={styles.modalTitle}>New Task</Text>
                    <Input placeholder='Take out trash' label='Task Name*' />
                    <Input
                        placeholder='grab new bag, empty trash, ...'
                        label='Steps'
                    />
                    <View>
                        <Button
                            buttonStyle={{ marginBottom: 25 }}
                            icon={{
                                name: 'calendar',
                                type: 'font-awesome',
                            }}
                            size='sm'
                            title='Select Date'
                            type='clear'
                            onPress={() => (
                                <DateTimePicker value={new Date()} />
                            )}
                        />
                        <Picker>
                            <Picker.Item label='Phone' value='phone' />
                            <Picker.Item label='Computer' value='computer' />
                            <Picker.Item label='Notepad' value='notepad' />
                        </Picker>
                    </View>
                    <View style={styles.modalSelection}>
                        <Text>Priorty</Text>
                        <ButtonGroup
                            buttons={['Low', 'Medium', 'High']}
                            selectedIndex={selectedPriorty}
                            containerStyle={{ width: 190 }}
                        />
                    </View>
                    <Button
                        title='Cancel'
                        onPress={() => setShowModal(!showModal)}
                    />
                </SafeAreaView>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    modalTitle: {
        fontSize: 22,
    },
    modalSelection: {
        borderWidth: 0.5,
        alignItems: 'center',
        padding: 10,
    },
});

export default TodayScreen;
