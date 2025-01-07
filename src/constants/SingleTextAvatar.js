import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SingleTextAvatar = ({text, size}) => {
  const stringToColor = string =>
    `#${(
      (string || '')
        .split('')
        .reduce(
          (hash, char) =>
            (char.charCodeAt(0) + (hash << 5) - hash) & 0x00ffffff,
          0,
        ) | 0x1000000
    )
      .toString(16)
      .slice(1)}`;
  return (
    <View
      style={[
        styles.avatarContainer,
        {
          width: size || 40,
          height: size || 40,
          backgroundColor: stringToColor(text),
        },
      ]}>
      <Text style={{color: 'white', fontSize: (size || 40) / 2}}>
        {text?.substring(0, 1).toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderColor: '#1f1f1f',
  },
});

export default SingleTextAvatar;
