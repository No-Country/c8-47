import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: '100%',
  },
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 5,
    display: 'inline-block',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 3,
    columnGap: '10px',
  },
  column: {
    flexDirection: 'column',
    flexGrow: '1',
  },
});

const SkillEntry = ({ skills }) => (
  <View style={styles.wrapper}>
    <View styles={styles.column}>
      {skills.map((skill, i) => {
        if (!(i % 2))
          return (
            <Text key={skill} style={styles.skills}>
              {skill}
            </Text>
          );
      })}
    </View>
    <View styles={styles.column}>
      {skills.map((skill, i) => {
        if (i % 2)
          return (
            <Text key={skill} style={styles.skills}>
              {skill}
            </Text>
          );
      })}
    </View>
  </View>
);

const Skills = ({ skills = [] }) => {
  if (!skills.length) return null;

  return (
    <View style={styles.container}>
      <Title>Skills</Title>
      <SkillEntry name='Combat Abilities' skills={skills} />
    </View>
  );
};

export default Skills;
