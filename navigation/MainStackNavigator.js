import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Category from "../screens/Category";
import Drawer from "../screens/Drawer";
import Search from "../screens/Search";
import Bookmarks from "../screens/Bookmarks";
import ShoppingCart from "../screens/ShoppingCart";

const Stack = createStackNavigator();

export default class MainStackNavigator extends React.Component {
    render() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "#f9f9f9",
                    },
                    headerTintColor: "#3e3e3e",
                    headerBackImage: null,
                    headerBackTitle: null,
                }}
                initialRouteName={"Home"}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="Drawer"
                    component={Drawer}
                    options={{ gestureDirection: "horizontal-inverted" }}
                />
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Bookmarks" component={Bookmarks} />
                <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
            </Stack.Navigator>
        );
    }
}
