//ModuleItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ModuleItem({ module }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{module.code}</Text>
      <Text style={styles.text}>{module.grade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
});
