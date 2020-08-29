import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Users() {
    return (
      <View style={styles.container}>
        <Text>Soy la pantalla USERS</Text>
      </View>
    );
  }

export default Users;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});