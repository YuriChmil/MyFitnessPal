import { StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { useState } from 'react';
import { Button } from 'react-native';

/*expo client:install:ios */

const foodItems = [
  {label:'Pizza',cal:75, brand:'Dominos'},
  {label:'Pizza',cal:50, brand:'New York'},
  {label:'Pizza',cal:100, brand:'Americano'},
  {label:'Pizza',cal:100, brand:'Coffe'}
]

export default function App() {
  const [search, setSearch] = useState('') ;
  const performSearch = () => {
    console.warn('Searching for: ', search);

    setSearch('');
  }
  return (
    <View style={styles.container}>
    {/*Food item View */}
    <TextInput value = {search} onChangeText={setSearch} placeholder="Search..." style ={styles.input}/>
    { search && <Button title ="Search" onPress={performSearch}/>}
    <FlatList
    data = {foodItems}
    renderItem ={({item}) => <FoodListItem item ={item} />}
    contentContainerStyle={{gap:5}}
    />
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f8',
    padding:10,
    gap:10
  },
  input: {
    backgroundColor:'#f2f2f2',
    padding:10,
    borderRadius:20,
  }
});
