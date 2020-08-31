import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Detail({ navigation }) {
  const name = navigation.getParam('name')
  const body = navigation.getParam('body')
  const title = navigation.getParam('title')

    return (
      <View style={styles.container}>
        <Text>{name}</Text>
        <Text>{title}</Text>
        <Text>{body}</Text>
      </View>
    )
  }

export default Detail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});