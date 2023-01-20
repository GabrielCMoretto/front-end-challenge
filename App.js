import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import getUsers from './api';

export default function App() {
  const [data, setData] = useState([])
  const recebeusers = () => {
    const response = getUsers()
    setData(response)
  }
  return (
    <View style={styles.container}>
      <Button title='usuarios' onPress={recebeusers} />
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (
            <view onPress={() => alert(item.email)} style={{ backgroundColor: '#fafafa', marginVertical: 50, borderRadius: 15 }}>
            </view>)
        }}
      />
      <Text>Hello world!</Text>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
