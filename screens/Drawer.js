import React from "react";
import { View, Image, Button } from "react-native";
import HeaderButton from "../navigation/HeaderButton";

export default class Drawer extends React.Component {
    render() {
        this.props.navigation.setOptions({
            gestureDirection: "horizontal-inverted",
            headerTitle: () => (
                <Image
                    style={{ width: 125 }}
                    resizeMode={"contain"}
                    source={require("../assets/logo.png")}
                />
            ),
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
                        onPress={() => this.props.navigation.push("Bookmarks")}
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
                    <HeaderButton
                        icon="back"
                        left={18}
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}
                        badgeCount={0}
                    />
                    <HeaderButton
                        icon="menu"
                        left={34}
                        onPress={() => this.props.navigation.goBack()}
                        badgeCount={0}
                    />
                </View>
            ),
        });

        return (
            <View
                style={{
                    backgroundColor: "#f9f9f9",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button
                    title="<StarterKit Kategorie>"
                    onPress={() => this.props.navigation.push("Category")}
                />
            </View>
        );
    }
}
