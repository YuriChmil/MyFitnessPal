import { StyleSheet, Text, View, FlatList} from 'react-native';
import FoodListItem from '../components/FoodListItem';
/*expo client:install:ios */

const foodItems = [
  {label:'Pizza',cal:75, brand:'Dominos'},
  {label:'Pizza',cal:50, brand:'New York'},
  {label:'Pizza',cal:100, brand:'Americano'},
  {label:'Pizza',cal:100, brand:'Coffe'}
]

export default function App() {
  return (
    <View style={styles.container}>
    {/*Food item View */}
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
    backgroundColor: '#fff',
    padding:10
    
  },
});
