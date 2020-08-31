import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function ListItem({ title, onPress }) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }

export default ListItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 85,
		borderBottomColor: '#eef',
		borderBottomWidth: 1.5,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 18,
	},
});