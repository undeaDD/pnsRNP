import React from "react";
import { View, Text } from "react-native";
import HeaderButton from "../navigation/HeaderButton";

export default class Bookmarks extends React.Component {
    render() {
        this.props.navigation.setOptions({
            headerTitle: () => <Text>MERKZETTEL</Text>,
            headerLeft: () => (
                <View style={{ flexDirection: "row" }}>
                    {this.props.navigation.canGoBack() ? (
                        <HeaderButton
                            icon="back"
                            left={18}
                            onPress={this.props.navigation.goBack.bind(this)}
                            badgeCount={0}
                        />
                    ) : null}
                    <HeaderButton
                        icon="menu"
                        left={this.props.navigation.canGoBack() ? 34 : 18}
                        onPress={this.props.navigation.push.bind(
                            this,
                            "Drawer"
                        )}
                        badgeCount={0}
                    />
                </View>
            ),
        });

        return <View style={{ backgroundColor: "#f9f9f9", flex: 1 }}></View>;
    }
}
