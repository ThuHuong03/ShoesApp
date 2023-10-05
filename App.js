import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList} from 'react-native';

 import Menu_bar from './VScode/src/Menu_bar';


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
        
      
        <Menu_bar/>
      </View>

      

        
       <FlatList style={styles.scroll_screen}
        data={item_menu}
        renderItem={({item}) => 
          <View style={styles.item}>
              <Text style={styles.Title}>{item.name}</Text>
              <View style={{ flexDirection:'row', flex: 2, justifyContent:'space-between'}}>
                
                <View style={{ flexDirection:'column' , flex:1}}>
                  <Image source={item.pic1}  style={styles.pic} ></Image>
                  <Text style={styles.name}>{item.item1}</Text>
                  <Text style={styles.price}>{item.price1}</Text> 
               
                </View>

                <View style={{ flexDirection:'column', flex: 1}}>
                  <Image source={item.pic2}  style={styles.pic}  ></Image>
                  <Text  style={styles.name}>{item.item2}</Text>
                  <Text style={styles.price}>{item.price2}</Text> 
               
                </View>
               </View>

               <Text style={styles.see_all}> See all</Text>
          </View>
      }
        keyExtractor={item => item.id}
      /> 

        
      
      
      
    </ImageBackground>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    marginTop:30,

    flex: 1,
  },
  image: {
    flex:1,
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
  
  scroll_screen:{
    // backgroundColor:'white',
    height:'90%',
    width:'100%',
    
    

  },
  
  
  item:{
       flexDirection:'column',
     
      // backgroundColor:'white',
      margin: 25,
      
  },
  Title:{
    color: '#9FF8EF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    textTransform:'uppercase'
  },
  name:{
    fontSize:15,
    width:150,
    color:'white',
    fontWeight:"800",
    textAlign:'center',
    textTransform:'uppercase'
  },
  price:{

    fontSize:13,
    width:150,
    color:'white',
    // fontWeight:"normal",
    textAlign:'center',
    textTransform:'uppercase'
  },
  pic:{
    width: 150,
    height:150,
    alignItems:'center',
   
   
   
    
   
  },
  see_all:{
    color: '#9FF8EF',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    textTransform:'uppercase'
  },
});
export default App;