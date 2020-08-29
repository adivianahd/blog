import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Posts() {
    return (
      <View style={styles.container}>
        <Text>Soy la pantalla USERS</Text>
      </View>
    );
  }

export default Posts;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});