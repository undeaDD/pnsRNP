import React from "react";
import { View, Image, ActivityIndicator, Alert } from "react-native";
import { WebView } from "react-native-webview";
import HeaderButton from "../navigation/HeaderButton";

export default class Home extends React.Component {
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
                        uri: "https://undeadd.github.io/pnsRNP/home.html",
                    }}
                    onMessage={(event) => {
                        Alert.alert(
                            "Message recieved",
                            '"' + event.nativeEvent.data + '"'
                        );
                    }}
                    bounces={false}
                    useWebKit={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    incognito={true}
                    scalesPageToFit={false}
                    startInLoadingState={true}
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
