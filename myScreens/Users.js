import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import ListItem from '../components/ListItem';

function Users({ navigation }) {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const fetchUser = async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

    return (
      <View style={styles.container}>
        {loading ? <Text>Cargando....</Text> :
        <FlatList
          style={styles.list}
          data={users}
          keyExtractor={x => String(x.id)}
          renderItem={({item}) => 
        <ListItem 
          onPress={()=> navigation.navigate('Posts', { user_id: item.id, name: item.name })}
          title={item.name} />}
        />
      }
      </View>
    ); 
  }

export default Users;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'flex-start',
		justifyContent:'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  },
});