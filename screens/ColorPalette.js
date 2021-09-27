import React from "react";
import { Text, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import ColorBox from "../components/ColorBox";


const ColorPalette = ({route}) =>{

    return(
        <SafeAreaView >
            <FlatList // *1
            style={styles.container}
            data={route.params.colors} // *2
            keyExtractor={item => item.colorName}// *3
            renderItem={({ item }) => <ColorBox colorName={item.colorName} hexCode={item.hexCode}/>} // *4
            ListHeaderComponent={<Text style={styles.title}>{route.params.paletteName}</Text>}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container : {
      marginTop: StatusBar.currentHeight,
      marginBottom: 10,
      marginHorizontal: 10,
      paddingTop: 10,
    },
  
    title: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 10,
    },
  
  });
export default ColorPalette;