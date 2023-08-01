import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const notificationData = [
  { id: '1', title: 'New Message', description: 'You have a new message from Huraira Malik' },
  { id: '2', title: 'Friend Request', description: 'Mushood sent you a friend request.' },
  { id: '3', title: 'Reminder', description: 'Don’t forget to attend the meeting at 3 PM.' },
  { id: '4', title: 'Notification', description: 'This is a sample notification.' },
  { id: '5', title: 'New Message', description: 'You have a new message from Nazeef Awan' },
  { id: '6', title: 'Friend Request', description: 'Haris sent you a friend request.' },
  { id: '7', title: 'Reminder', description: 'Don’t forget to attend the meeting at 3 PM.' },
  { id: '8', title: 'Notification ', description: 'This is a sample notification.' },
  { id: '9', title: 'New Message', description: 'You have a new message from Saeed ' },
  { id: '10', title: 'Friend Request', description: 'Saeed sent you a friend request.' },
  { id: '11', title: 'Reminder', description: 'Don’t forget to attend the meeting at 3 PM.' },
  { id: '12', title: 'Notification', description: 'This is a sample notification.' },

];

const Notifications = () => {
  const renderItem = ({ item }) => (
    <SafeAreaView style={styles.notificationContainer}>
      <Icon name="notifications" size={24} color="#555" style={styles.notificationIcon} />
      <View>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDescription}>{item.description}</Text>
      </View>
    </SafeAreaView>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notificationData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  notificationIcon: {
    marginRight: 16,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#888',
  },
});

export default Notifications;
