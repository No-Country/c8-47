import React from 'react';
import { Font, Page, View, Image, StyleSheet } from '@react-pdf/renderer';

import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Profile from './Profile';
import Languages from './Languages';
import Certification from './Certifications';
import Other from './Other';
import Contact from './Contact';

const styles = StyleSheet.create({
  page: {
    height: '100%',
    padding: 15,
    paddingBottom: 0,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  image: {
    marginBottom: 10,
    height: 140,
    objectFit: 'cover',
  },
  leftColumn: {
    flexDirection: 'column',
    width: 250,
    paddingTop: 10,
    paddingRight: 5,
  },
  rightColumn: {
    width: '100%',
  },
});

Font.register({
  family: 'Open Sans',
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
  family: 'Lato',
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: 'Lato Italic',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: 'Lato Bold',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

const Resume = ({
  value,
  image,
  certifications,
  contacts,
  education,
  experience,
  languages,
  others,
  person,
  profile,
  skills,
  options,
}) => (
  <Page size='A4' style={styles.page} options={options}>
    <Header value={value} />
    {/* <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Image src={image} style={styles.image} />
        <Contact contacts={contacts} />
        <Education education={education} />
        <Skills skills={skills} />
        <Certification certifications={certifications} />
        <Languages languages={languages} />
      </View>
      <View style={styles.rightColumn}>
        <Profile profile={profile} />
        <Experience experience={experience} />
        <Other others={others} />
      </View>
    </View> */}
  </Page>
);

export default Resume;
