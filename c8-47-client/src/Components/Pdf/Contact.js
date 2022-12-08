import React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  degree: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  type: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginRight: 3,
  },
  candidate: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
  },
  entry: {
    marginBottom: 3,
  },
  link: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

const Entry = ({ type, data }) => (
  <View style={styles.entry}>
    <View style={styles.wrapper}>
      <Text style={styles.type}>{type}</Text>
      <Link href={`mailto:${data}`} target='_blank' style={styles.link}>
        <Text>{data}</Text>
      </Link>
    </View>
  </View>
);

const Contact = ({ contacts = [] }) => {
  if (!contacts.length) return null;

  return (
    <View style={styles.container}>
      <Title>Contacto</Title>
      {contacts.map(({ type, data }) => (
        <Entry key={type} type={type} data={data} />
      ))}
    </View>
  );
};

export default Contact;
