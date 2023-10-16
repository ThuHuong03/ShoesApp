import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const DrawrContent =({props}) =>
{
    const navigation= useNavigation();
    return(
        <View style= {{ flex: 1 }} >

            <DrawerContentScrollView {...props}>

                <View style={styles.Drawer}>
                    <View style={styles.Drawer_1}Ư>
                        <DrawerItem   
                        label={"New & Featured"}
                        onPress={()=> props.navigation.navigate('Home')}
                        /> 
                    </View>

                </View>
            </DrawerContentScrollView>

        </View>

    );

}

const styles = StyleSheet.create({

    Drawe:{
        flex:2,
        flexDirection:'column',
        
    }

})

export default DrawrContent;