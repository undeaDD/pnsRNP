import React from "react";
import { Renderers } from "../nativeRenderer/renderers";
import { View, Image, ScrollView } from "react-native";
import HTML from "react-native-render-html";
import HeaderButton from "../navigation/HeaderButton";

const htmlContent = `
	<header src="https://undeadd.github.io/pnsRNP/header.png"></header>
	<coupon color="#ff4b9c" text="HEUTE 30% RABATT" navigate="search"></coupon>
	<vspacer height="500"></vspacer>
`;

export default class Home extends React.Component {
    render() {
        this.props.navigation.setOptions({
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
                        onPress={this.props.navigation.push.bind(
                            this,
                            "Search"
                        )}
                        badgeCount={0}
                    />
                    <HeaderButton
                        icon="heart"
                        right={34}
                        onPress={this.props.navigation.push.bind(
                            this,
                            "Bookmarks"
                        )}
                        badgeCount={2}
                    />
                    <HeaderButton
                        icon="bag"
                        right={18}
                        onPress={this.props.navigation.push.bind(
                            this,
                            "ShoppingCart"
                        )}
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

        return (
            <ScrollView style={{ flex: 1 }}>
                <HTML
                    containerStyle={{ flex: 1 }}
                    source={{ html: htmlContent }}
                    renderers={Renderers}
                />
            </ScrollView>
        );
    }
}
