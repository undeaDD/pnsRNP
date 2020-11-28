import React from "react";
import { View, Text } from "react-native";
import HeaderButton from "../navigation/HeaderButton";

export default class Bookmarks extends React.Component {
    render() {
        this.props.navigation.setOptions({
            headerTitle: () => <Text style={{}}>MERKZETTEL</Text>,
            headerRight: () => (
                <View style={{ flexDirection: "row" }}>
                    <HeaderButton
                        icon="search"
                        right={48}
                        onPress={() => this.props.navigation.push("Search")}
                        badgeCount={0}
                    />
                    <HeaderButton
                        icon="heart"
                        right={34}
                        onPress={() => null}
                        badgeCount={2}
                    />
                    <HeaderButton
                        icon="bag"
                        right={18}
                        onPress={() =>
                            this.props.navigation.push("ShoppingCart")
                        }
                        badgeCount={5}
                    />
                </View>
            ),
            headerLeft: () => (
                <View style={{ flexDirection: "row" }}>
                    {this.props.navigation.canGoBack() ? (
                        <HeaderButton
                            icon="back"
                            left={18}
                            onPress={() => {
                                this.props.navigation.goBack();
                            }}
                            badgeCount={0}
                        />
                    ) : null}
                    <HeaderButton
                        icon="menu"
                        left={this.props.navigation.canGoBack() ? 34 : 18}
                        onPress={() => this.props.navigation.push("Drawer")}
                        badgeCount={0}
                    />
                </View>
            ),
        });

        return <View style={{ backgroundColor: "#f9f9f9", flex: 1 }}></View>;
    }
}
