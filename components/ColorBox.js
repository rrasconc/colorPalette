import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const ColorBox = (props) =>{ // *1
    const boxColor  = {
        backgroundColor: props.hexCode,
    }
    const textBoxColor = {
        color: parseInt(props.hexCode.replace('#', ''), 16) > 0xffffff / 1.1 
        ? 'black' : 'white', // *2
    }
    return(
        <View style={[styles.box, boxColor]}>
          <Text style={[styles.boxText, textBoxColor]}>{props.colorName}: {props.hexCode}</Text>
        </View>
    )
};

/*
    *1 We use props when you need unique props to the styles.
    *2 This alghoritm checks if the hex of the background is too light for white color text.
*/

const styles = StyleSheet.create({

    box: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        
      },
    boxText: {
        color: '#fff',
        textAlign: 'center',
      },

})

export default ColorBox;