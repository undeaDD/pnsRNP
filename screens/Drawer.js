import React from "react";
import { Renderers } from "../nativeRenderer/renderers";
import { View, Image, ScrollView } from "react-native";
import HTML from "react-native-render-html";
import HeaderButton from "../navigation/HeaderButton";

const htmlContent = `
	<headline title="Kategorien"></headline>
	<seperator></seperator>
	<categories></categories>
	<seperator></seperator>
	<link title="Starseite"></link>
	<seperator></seperator>
	<link title="Benachrichtigungen"></link>
	<seperator></seperator>
	<link title="Sendungsverfolgung"></link>
	<seperator></seperator>
	<link title="AGB & Datenschutz"></link>
	<seperator></seperator>
	<link title="Impressum & Kontakt"></link>
	<seperator></seperator>
	<vspacer height="200"></vspacer>
`;
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
                <HeaderButton
                    icon="back"
                    left={18}
                    onPress={this.props.navigation.goBack.bind(this)}
                    badgeCount={0}
                />
            ),
        });

        return (
            <View
                style={{
                    flex: 1,
                }}
            >
                <ScrollView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
                    <HTML
                        containerStyle={{ flex: 1, backgroundColor: "#f9f9f9" }}
                        source={{ html: htmlContent }}
                        renderers={Renderers}
                    />
                </ScrollView>
                <View
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: 100,
                        backgroundColor: "black",
                    }}
                />
            </View>
        );
    }
}
