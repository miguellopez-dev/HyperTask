import { Button, Card, CheckBox } from '@rneui/base';
import { TASKS } from '../shared/tasks';
import { Text, View, StyleSheet } from 'react-native';
import { ListItem } from '@rneui/base';

const TaskCard = () => {
    return (
        <Card>
            <Card.Title>
                Task for {new Date().toLocaleDateString('en-US')}
            </Card.Title>
            {TASKS.map((task) =>
                task.id < TASKS.length - 1 ? (
                    <ListItem.Swipeable
                        rightWidth={90}
                        minSlideWidth={40}
                        rightContent={(swipe) => (
                            <Button
                                containerStyle={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    backgroundColor: '#f4f4f4',
                                }}
                                type='clear'
                            />
                        )}
                        bottomDivider
                        key={task.id}
                    >
                        <ListItem.CheckBox
                            checked={task.completed ? true : false}
                        />
                        <ListItem.Content style={styles.taskContainer}>
                            <ListItem.Title>
                                <Text>{task.name}</Text>
                            </ListItem.Title>

                            <ListItem.Subtitle>{task.date}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem.Swipeable>
                ) : (
                    <ListItem key={task.id}>
                        <ListItem.CheckBox
                            checked={task.completed ? true : false}
                        />
                        <ListItem.Content style={styles.taskContainer}>
                            <ListItem.Title>
                                <Text>{task.name}</Text>
                            </ListItem.Title>

                            <ListItem.Subtitle>{task.date}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                )
            )}
        </Card>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 15,
    },
    taskCheck: {
        flexDirection: 'row',
    },
    taskTitle: {
        paddingLeft: 5,
    },
});

export default TaskCard;
