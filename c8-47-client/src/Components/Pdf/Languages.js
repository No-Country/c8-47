import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  languages: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  level: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  entry: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

const LanguageEntry = ({ languages }) => (
  <View>
    {languages.map(({ language, level }) => (
      <View key={language} style={styles.entry}>
        <Text style={styles.languages}>{language}</Text>
        <Text style={styles.level}>{level}</Text>
      </View>
    ))}
  </View>
);

const Languages = ({ languages = [] }) => {
  if (!languages.length) return null;

  return (
    <View>
      <Title>Idiomas</Title>
      <LanguageEntry languages={languages} />
    </View>
  );
};

export default Languages;
