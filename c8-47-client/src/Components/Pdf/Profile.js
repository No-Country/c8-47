import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 15,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  text: {
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato',
    marginTop: -5,
  },
});

const Profile = ({ profile = '' }) => {
  if (!profile.length) return null;

  return (
    <View style={styles.container}>
      <Title>Profile</Title>
      <Text style={styles.text}>{profile}</Text>
    </View>
  );
};

export default Profile;
