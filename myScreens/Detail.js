import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Detail() {
    return (
      <View style={styles.container}>
        <Text>Soy la pantalla DETALLES DEL POST</Text>
      </View>
    );
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