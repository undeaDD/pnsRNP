import React from "react";
import { View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import HeaderButton from "../navigation/HeaderButton";

export default class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    hideSpinner() {
        this.setState({ visible: false });
    }

    render() {
        this.props.navigation.setOptions({
            headerTitle: () => (
                <TouchableOpacity
                    style={{ width: 125 }}
                    onPress={() => this.props.navigation.navigate("Home")}
                    activeOpacity={0.5}
                >
                    <Image
                        style={{ width: 125 }}
                        resizeMode={"contain"}
                        source={require("../assets/logo.png")}
                    />
                </TouchableOpacity>
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

        return (
            <View
                style={{
                    backgroundColor: "#f9f9f9",
                    flex: 1,
                }}
            >
                <WebView
                    style={{ flex: 1 }}
                    originWhitelist={["*"]}
                    onLoad={() => this.hideSpinner()}
                    source={{
                        uri:
                            "https://undeadd.github.io/pnsRNP/starter-kit.html",
                    }}
                    onMessage={(event) => {
                        console.log("message recieved: " + event);
                    }}
                    bounces={false}
                    useWebKit={true}
                />
                {this.state.visible && (
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <ActivityIndicator size="large" />
                    </View>
                )}
            </View>
        );
    }
}
