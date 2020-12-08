import React from "react";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigation/MainStackNavigator";

export default class App extends React.Component {
    render() {
        enableScreens();
        LogBox.ignoreAllLogs();
        return (
            <NavigationContainer>
                <MainStackNavigator />
                <StatusBar style="dark" />
            </NavigationContainer>
        );
    }
}
