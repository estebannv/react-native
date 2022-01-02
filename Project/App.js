import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import List from './src/components/List';
import Slider from './src/components/Slider';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='default'/>
      <Text style={{color: "red", fontSize: 25, marginBottom: 5}}>Netflix</Text>
      <ScrollView>
        <Slider />
        <List name="My List" />
        <List name="Top Series" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: "2%"
  },
});
