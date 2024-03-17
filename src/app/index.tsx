import { StyleSheet, Text, View } from 'react-native';
import FoodListItem from '../components/FoodListItem';


export default function App() {
  return (
    <View style={styles.container}>
    {/*Food item View */}
    <FoodListItem item={{label:'Pizza',cal:75, brand:'Dominos'}}/>
    <FoodListItem item={{label:'Pizza',cal:50, brand:'New York'}}/>
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding:10,
    gap:5,
  },
});
