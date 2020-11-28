import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import IconBadge from "react-native-icon-badge";

function image(name) {
    switch (name) {
        case "menu":
            return require("../assets/menu.png");
        case "search":
            return require("../assets/search.png");
        case "heart":
            return require("../assets/heart.png");
        case "bag":
            return require("../assets/bag.png");
        case "back":
            return require("../assets/back.png");
        default:
            return undefined;
    }
}

export default class HeaderButton extends React.Component {
    render() {
        const right = this.props.right ? this.props.right : undefined;
        const left = this.props.left ? this.props.left : undefined;

        return (
            <TouchableOpacity
                style={{ width: 20, height: 20, right: right, left: left }}
                onPress={this.props.onPress}
                activeOpacity={0.5}
            >
                <IconBadge
                    MainElement={
                        <Image
                            style={{ width: 20, height: 20 }}
                            resizeMode={"contain"}
                            source={image(this.props.icon)}
                        />
                    }
                    BadgeElement={
                        <Text
                            style={{
                                color: "#FFFFFF",
                                fontSize: 9,
                            }}
                        >
                            {this.props.badgeCount}
                        </Text>
                    }
                    IconBadgeStyle={{
                        position: "absolute",
                        top: -8,
                        right: -8,
                        minWidth: 15,
                        height: 15,
                        borderRadius: 15,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#3e3e3e",
                    }}
                    Hidden={this.props.badgeCount == 0}
                />
            </TouchableOpacity>
        );
    }
}
