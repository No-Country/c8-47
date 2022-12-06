import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  degree: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  school: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  candidate: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
  },
  entry: {
    marginBottom: 3,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Entry = ({ school, degree, candidate }) => (
  <View style={styles.entry}>
    <Text style={styles.degree}>{degree}</Text>
    <View style={styles.wrapper}>
      <Text style={styles.school}>{school}</Text>
      <Text style={styles.candidate}>{candidate}</Text>
    </View>
  </View>
);

const Certification = ({ certifications = [] }) => {
  if (!certifications.length) return null;

  return (
    <View style={styles.container}>
      <Title>Certificaciones</Title>
      {certifications.map(({ school, degree, candidate }) => (
        <Entry
          key={degree}
          school={school}
          degree={degree}
          candidate={candidate}
        />
      ))}
    </View>
  );
};

export default Certification;
