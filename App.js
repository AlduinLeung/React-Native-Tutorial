import React, {useState} from 'react';
import Header from './Components/Header';
import ListItem from './Components/ListItem';
import AddItem from './Components/AddItem'
import {View, Text, StyleSheet, Image, FlatList,Alert} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Bread'},
    {id: 3, text: 'Eggs'},
    {id: 4, text: 'Juice'},
  ]);

  const deleteItem=(id)=>{
    setItems(prevItems=>{
      return prevItems.filter((item)=>item.id !=id);
    })
  }
  const addItem=(text)=>{
    if(!text){
      Alert.alert('Error','Please entry an item',{text:'OK'})
    }else{
      setItems(prevItems=>{
        return [{id:Math.random(),text:text},...prevItems,]
      });
    }
   
  }
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem}/>
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
export default App;
