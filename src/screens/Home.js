import {View, Text, StyleSheet, FlatList, Modal, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import SingleTextAvatar from '../constants/SingleTextAvatar';
import IIcons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import MIcons from 'react-native-vector-icons/MaterialIcons';

const Home = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const contacts = [
    {name: 'Shubham Raj', number: '1234560890'},
    {name: 'MS Dhoni', number: '0987654321'},
    {name: 'John Smith', number: '12345617890'},
    {name: 'Sachin Tendulkar', number: '0987654321'},
    {name: 'John Johnson', number: '1234560890'},
    {name: 'Will Smith', number: '0987654321'},
    {name: 'John Jackson', number: '1234567890'},
    {name: 'Divija Kanwal', number: '0987654321'},
    {name: 'Register Karo', number: '12345607890'},
    {name: 'R Jadeja', number: '0987654321'},
  ];

  const handleCall = item => {
    navigation.navigate('Call', {item, type: 'call'});
    setModalVisible(false);
  };

  const handleVideoCall = item => {
    navigation.navigate('Call', {item, type: 'video'});
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{contacts[0].name}</Text>
            <View style={styles.buttonRow}>
              <View style={styles.startContainer}>
                <MIcons
                  name="call-end"
                  size={28}
                  color="white"
                  onPress={() => handleCall(contacts[0])}
                />
              </View>
              <View style={styles.startContainer}>
              <IIcons
                name="videocam"
                size={30}
                color="white"
                onPress={() => handleVideoCall(contacts[0])}
              />
              </View>
              <View style={styles.endContainer}>
                <MIcons
                  name="call-end"
                  size={28}
                  color="white"
                  onPress={() => setModalVisible(false)}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Text style={styles.header}>Contacts</Text>
      <FlatList
        data={contacts}
        ListHeaderComponent={<View style={{height: 20}} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={styles.contactLine} key={index}>
            <View style={{flexDirection: 'row'}}>
              <SingleTextAvatar text={item.name} />
              <View style={{marginLeft: 10}}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.number}>{item.number}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <IIcons
                name="call"
                size={30}
                color="#111111"
                onPress={() => handleCall(item)}
              />
              <View style={{width: 10}} />
              <IIcons
                name="videocam"
                size={30}
                color="#111111"
                onPress={() => handleVideoCall(item)}
              />
            </View>
          </View>
        )}
        ListFooterComponent={<View style={{height: 20}} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#111111',
    borderWidth: 1,
    borderColor: '#333333',
    backgroundColor: '#f0f0f0',
    padding: 4,
    borderRadius: 12,
    marginBottom: 4,
  },
  contactLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#6B6B6B',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111111',
  },
  number: {
    fontSize: 14,
    color: '#6A6A6A',
  },
  modalContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 50,
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  startContainer: {
    backgroundColor: 'green',
    borderRadius: 100,
    padding: 8,
    alignSelf: 'center',
  },
  endContainer: {
    backgroundColor: 'maroon',
    borderRadius: 100,
    padding: 8,
    alignSelf: 'center',
  },
});

export default Home;
