import React from "react";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigation/MainStackNavigator";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        LogBox.ignoreAllLogs();
    }

    render() {
        return (
            <NavigationContainer>
                <MainStackNavigator />
                <StatusBar style="dark" />
            </NavigationContainer>
        );
    }
}
