import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SingleTextAvatar from '../constants/SingleTextAvatar';
import IIcons from 'react-native-vector-icons/Ionicons';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import Sound from 'react-native-sound';

const Call = ({route}) => {
  const navigation = useNavigation();
  const camera = useRef(null);
  const {item} = route.params;
  const {type} = route.params;
  const [callType, setCallType] = useState(type);
  const [isMuted, setIsMuted] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showCallingText, setShowCallingText] = useState(true);
  const device = useCameraDevice('back');

  useEffect(() => {
    // Play default ringtone
    const sound = new Sound('system_ringtone', Sound.MAIN_BUNDLE, error => {
      if (!error) {
        sound.setNumberOfLoops(-1); // Loop the sound
        sound.play();
      }
    });

    // Stop the sound after 2 seconds
    const timeout = setTimeout(() => {
      setShowCallingText(false);
      sound.stop(() => sound.release());
    }, 2000);

    return () => {
      sound.stop(() => sound.release()); // Cleanup on unmount
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    async function getPermission() {
      let permissionStatus;
      const permission = await Camera.requestCameraPermission();
      permissionStatus = permission.status || permission;
      if (permissionStatus === 'granted') {
        setShowCamera(true);
      }
    }
    getPermission();
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleVideoCall = () => {
    setCallType('video');
  };

  const handleSwitchCamera = () => {
    device === 'back' ? useCameraDevice('front') : useCameraDevice('back');
  };

  return (
    <View style={styles.container}>
      {callType === 'video' && showCamera && device !== null ? (
        device === null || showCallingText ? (
          <View style={styles.mainContainer}>
            <SingleTextAvatar text={item.name} size={100} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.cameraText}>calling...</Text>
          </View>
        ) : (
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            photo={true}
          />
        )
      ) : (
        <View style={styles.mainContainer}>
          <SingleTextAvatar text={item.name} size={100} />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      )}
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.iconContainer}>
            {callType === 'video' ? (
              <MIcons
                name="cameraswitch"
                size={30}
                color="white"
                onPress={handleSwitchCamera}
              />
            ) : (
              <IIcons
                name="videocam-off"
                size={30}
                color="white"
                onPress={handleVideoCall}
                style={styles.iconstyle}
              />
            )}
          </View>
          <View style={styles.iconContainer}>
            <IIcons
              name={isMuted ? 'mic-off' : 'mic'}
              size={30}
              color="white"
              onPress={() => setIsMuted(!isMuted)}
            />
          </View>
          <View style={styles.endContainer}>
            <MIcons
              name="call-end"
              size={30}
              color="white"
              onPress={handleBack}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  cameraText: {
    fontSize: 24,
    color: '#111111',
    alignSelf: 'center',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111111',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconContainer: {
    backgroundColor: '#111111',
    borderRadius: 12,
    padding: 12,
    alignSelf: 'center',
  },
  startContaier: {
    backgroundColor: 'maroon',
    borderRadius: 12,
    padding: 12,
    alignSelf: 'center',
  },
  endContainer: {
    backgroundColor: 'maroon',
    borderRadius: 12,
    padding: 12,
    alignSelf: 'center',
  },
});

export default Call;
