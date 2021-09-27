import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "./screens/Home";
import ColorPalette from "./screens/ColorPalette";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); //sandbox of screens that you can navigate

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen 
        name="ColorPalette" 
        component={ColorPalette}
        options={({ route }) => ({ 
          title: route.params.paletteName
        }) }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
/*  *1 List that contains data.
    *2 Data source.
    *3 Here we provide each item's id (*3.1 If you have a key on your data, you do not need this prop).
    *4 Here we render a color box for each data item we found with their according props.
*/
export default App;