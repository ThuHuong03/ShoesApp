import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList} from 'react-native';
import Home from './VScode/assets/home.svg';
import Menu from './VScode/assets/Menu.svg';
import Search from './VScode/assets/Search.svg';
import Bag from './VScode/assets/Bag.svg';
import User from './VScode/assets/User.svg';


const item_menu = [
      {id:'1',
      name:'Best Seller',
      item1: 'Chuck Taylor High Top',
      price1:'1.000.000VND',
      pic1: require('./VScode/assets/Converse.1.Chuck_Taylor.Black_High_1.jpg'),
      item2: 'Chuck Taylor Low Top',
      price2:'1.000.000VND',
      pic2: require('./VScode/assets/Converse.1.Chuck_Taylor.Black_High_1.jpg')

    },
    {id:'2',
      name:'Chuck Taylor',
      item1: 'Chuck Taylor High Top',
      price1:'1.000.000VND',
      pic1: require('./VScode/assets/Converse.1.Chuck_Taylor.Black_High_1.jpg'),
      item2: 'Chuck Taylor Low Top',
      price2:'1.000.000VND',
      pic2: require('./VScode/assets/Converse.1.Chuck_Taylor.Black_High_1.jpg')

    },
    {id:'3',
      name:'Chuck 70',
      item1: 'Chuck Taylor High Top',
      price1:'1.000.000VND',
      pic1: require('./VScode/assets/Converse.1.Chuck_Taylor.Black_High_1.jpg'),
      item2: 'Chuck Taylor Low Top',
      price2:'1.000.000VND',
      pic2: require('./VScode/assets/Converse.1.Chuck_Taylor.Black_High_1.jpg')

    },
    {id:'4',
      name:'One Star Pro',
      item1: 'Chuck Taylor High Top',
      price1:'1.000.000VND',
      pic1: require('./VScode/assets/Converse.1.Chuck_Taylor.Black_High_1.jpg'),
      item2: 'Chuck Taylor Low Top',
      price2:'1.000.000VND',
      pic2: require('./VScode/assets/Converse.1.Chuck_Taylor.Black_High_1.jpg')

    },
    {id:'5',
      name:'Run Hike Platform',
      item1: 'Chuck Taylor High Top',
      price1:'1.000.000VND',
      pic1: require('./VScode/assets/Converse.1.Chuck_Taylor.Black_High_1.jpg'),
      item2: 'Chuck Taylor Low Top',
      price2:'1.000.000VND',
      pic2: require('./VScode/assets/Converse.1.Chuck_Taylor.Black_High_1.jpg')

    }
];

const App = () => (
  <SafeAreaView style={styles.container}>
    <ImageBackground source={require('./VScode/assets/background.png')} resizeMode="cover" style={styles.image}>
      <View style={styles.Menubar}>
        
        <View style={styles.subMenu}>
            <Home   width={30} height={30} ></Home>
        </View>

          <View style={styles.subMenu}>
          <Search width={30} height={30}/>
          <Bag width={30} height={30}/>
          <User width={30} height={30} />
          <Menu width={30} height={30} />
        </View>
      </View>

      <ScrollView  style={styles.scroll_screen}>

       <FlatList
        data={item_menu}
        renderItem={({item}) => 
          <View style={styles.item}>
              <Text style={styles.Title}>{item.name}</Text>
              <Image source={item.pic1}  style={styles.image} ></Image>
         </View>
      }
        keyExtractor={item => item.id}
      /> 

        
      </ScrollView>
      
      
    </ImageBackground>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    marginTop:30,

    flex: 1,
  },
  image: {
    width:'40%',
    height: 'auto',
    justifyContent: 'center',
  },
  Menubar:{
    
     
      height:'10%',
      width:'100%',
      flexDirection:'row',
      padding:25,
      paddingTop:30,
      flex:2

     
  },
  subMenu:{

    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'

  },
  scroll_screen:{
    backgroundColor:'white',
    height:'90%',
    width:'100%'
    

  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  icon:{
    width:30,
    height:30,
    justifyContent:'flex-end'
  },
  item:{
       flexDirection:'column',
      height: 250,
      width: 260,
      color:'white',
      padding: 25,
      
  },
  Title:{
    color: '#9FF8EF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    textTransform:'uppercase'
  }
});
export default App;