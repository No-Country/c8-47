import React, { useContext, useEffect } from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { DataContext } from '../../Context/DataContext';
import customAxios from '../../Helpers/customAxios';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
    paddingBottom: 3,
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'row',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Lato Bold',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
    marginLeft: 10,
  },
});

const Header = ({ value = {} }) => {
  if (!Object.keys(value).length) return null;

  useEffect(() => {
    const getData = async () => {
      const { data } = await customAxios.get('/user/data');
      console.log(data);
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.detailColumn}>
        <Text style={styles.name}>{value.state.data.personal?.name}</Text>
        <Text style={styles.subtitle}>
          {/* {value.state.data?.presentations[0]['title']} */}
        </Text>
      </View>
    </View>
  );
};

export default Header;
