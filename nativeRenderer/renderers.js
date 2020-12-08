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
                src: "sale.png",
                title: "SALE",
            },
            {
                src: "tint.png",
                title: "Get & Acryl",
            },
            {
                src: "starterSets.png",
                title: "Starter-Sets",
            },
            {
                src: "nailpolish.png",
                title: "Shellac & Nagellack",
            },
            {
                src: "brushes.png",
                title: "Pinsel",
            },
            {
                src: "fluids.png",
                title: "Flüssigkeiten",
            },
            {
                src: "nails.png",
                title: "Nagel-Tips",
            },
            {
                src: "file.png",
                title: "Feilen",
            },
            {
                src: "art.png",
                title: "Nailart",
            },
            {
                src: "utilities.png",
                title: "Elektrische Geräte",
            },
            {
                src: "extras.png",
                title: "Zubehör",
            },
            {
                src: "lashes.png",
                title: "Lashes",
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
                        <TouchableOpacity
                            delayPressIn={0}
                            activeOpacity={0.5}
                            style={{
                                width: "25%",
                                aspectRatio: 1,
                            }}
                        >
                            <Image
                                resizeMode={"contain"}
                                style={{
                                    width: "40%",
                                    aspectRatio: 1,
                                    marginTop: 15,
                                    marginLeft: "30%",
                                }}
                                source={{
                                    uri:
                                        "https://undeadd.github.io/pnsRNP/" +
                                        item.src,
                                }}
                            />
                            <Text
                                style={{
                                    textAlign: "center",
                                    marginTop: 5,
                                    fontSize: 11,
                                    width: "100%",
                                }}
                            >
                                {item.title}
                            </Text>
                        </TouchableOpacity>
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
                        width: 25,
                        height: 20,
                        marginTop: 23,
                        marginLeft: 18,
                        marginRight: 18,
                    }}
                    resizeMode={"contain"}
                    source={{
                        uri:
                            "https://undeadd.github.io/pnsRNP/" +
                            htmlAttribs.icon,
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
