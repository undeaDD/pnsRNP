import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

export const Renderers = {
    header: (htmlAttribs, children, convertedCSSStyles, passProps) => {
        return (
            <Image
                style={{ width: "100%", height: 500 }}
                source={{ uri: htmlAttribs.src }}
                key={passProps.key}
            />
        );
    },
    coupon: (htmlAttribs, children, convertedCSSStyles, passProps) => {
        return (
            <TouchableOpacity
                delayPressIn={0}
                activeOpacity={0.5}
                style={{
                    width: "100%",
                    height: 60,
                    backgroundColor: htmlAttribs.color,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                key={passProps.key}
            >
                <Text
                    style={{
                        width: "100%",
                        color: "white",
                        textAlignVertical: "center",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 18,
                    }}
                >
                    {htmlAttribs.text}
                </Text>
            </TouchableOpacity>
        );
    },
    vspacer: (htmlAttribs, children, convertedCSSStyles, passProps) => {
        return (
            <View
                style={{
                    width: "100%",
                    height: Number(htmlAttribs.height),
                }}
                key={passProps.key}
            />
        );
    },
    headline: (htmlAttribs, children, convertedCSSStyles, passProps) => {
        return (
            <Text
                style={{
                    width: "100%",
                    padding: 10,
                    fontSize: 20,
                    fontWeight: "700",
                    backgroundColor: "#f9f9f9",
                }}
                key={passProps.key}
            >
                {htmlAttribs.title}
            </Text>
        );
    },
    seperator: (htmlAttribs, children, convertedCSSStyles, passProps) => {
        return (
            <View
                style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "#D4D4D4",
                }}
                key={passProps.key}
            />
        );
    },
    categories: (htmlAttribs, children, convertedCSSStyles, passProps) => {
        const initialArr = [
            {
                src: "https://undeadd.github.io/pnsRNP/item2.png",
            },
            {
                src: "https://undeadd.github.io/pnsRNP/item2.png",
            },
            {
                src: "https://undeadd.github.io/pnsRNP/item2.png",
            },
            {
                src: "https://undeadd.github.io/pnsRNP/item2.png",
            },
            {
                src: "https://undeadd.github.io/pnsRNP/item2.png",
            },
            {
                src: "https://undeadd.github.io/pnsRNP/item2.png",
            },
            {
                src: "https://undeadd.github.io/pnsRNP/item2.png",
            },
            {
                src: "https://undeadd.github.io/pnsRNP/item2.png",
            },
            {
                src: "https://undeadd.github.io/pnsRNP/item2.png",
            },
            {
                src: "https://undeadd.github.io/pnsRNP/item2.png",
            },
            {
                src: "https://undeadd.github.io/pnsRNP/item2.png",
            },
            {
                src: "https://undeadd.github.io/pnsRNP/item2.png",
            },
        ];
        return (
            <View
                style={{
                    flex: 1,
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    backgroundColor: "f9f9f9",
                }}
                key={passProps.key}
            >
                {initialArr.map((item) => {
                    return (
                        <View
                            style={{
                                width: "25%",
                                aspectRatio: 1,
                                backgroundColor: item.color,
                            }}
                        >
                            <Image
                                style={{ width: "100%", height: "100%" }}
                                source={{ uri: item.src }}
                            />
                        </View>
                    );
                })}
            </View>
        );
    },
    link: (htmlAttribs, children, convertedCSSStyles, passProps) => {
        return (
            <TouchableOpacity
                delayPressIn={0}
                activeOpacity={0.5}
                style={{
                    alignItems: "flex-start",
                    flexDirection: "row",
                    width: "100%",
                    height: 66,
                }}
                key={passProps.key}
            >
                <Image
                    style={{
                        width: 20,
                        height: 20,
                        marginTop: 23,
                        marginLeft: 18,
                        marginRight: 18,
                    }}
                    source={{
                        uri: htmlAttribs.icon,
                    }}
                ></Image>
                <Text
                    style={{
                        width: "100%",
                        height: 20,
                        fontSize: 16,
                        lineHeight: 20,
                        marginTop: 23,
                        color: "#464646",
                    }}
                >
                    {htmlAttribs.title}
                </Text>
            </TouchableOpacity>
        );
    },
};
