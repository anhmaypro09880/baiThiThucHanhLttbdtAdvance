import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Screen1() {
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    backgroundColor: "#F7A4A4",
                    height: "50%",
                    width: "100%",
                }}
            >
                <Image
                    style={{ height: "100%", width: "100%" }}
                    source={require("../assets/blog-1-removebg.png")}
                ></Image>
            </View>
            <View
                style={{
                    height: "50%",
                    width: "80%",
                    marginLeft: "10%",
                    borderRadius: 15,
                    backgroundColor: "#fffff",
                }}
            >
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 20 }}>Guess Classic</Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        $ 35.99
                    </Text>
                    <View style={{ flexDirection: "row", height: "22%" }}>
                        <Image
                            style={{ height: 35, width: 35 }}
                            source={require("../assets/pngtree-beautiful-golden-star-png-image_1733945-removebg-preview.png")}
                        ></Image>
                        <Text
                            style={{
                                fontSize: 20,
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 5,
                            }}
                        >
                            4.9
                        </Text>
                    </View>
                </View>
                {/* <View>
                    <Image source={require("../assets/Vector.png")}></Image>
                </View> */}
                <View>
                    <Text>Color</Text>
                </View>
                <View
                    style={{
                        height: "10%",
                        width: "100%",

                        flexDirection: "row",

                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            height: "100%",
                            width: 35,
                            borderWidth: 1,
                            borderColor: "#FF6464",
                            borderRadius: 10,
                        }}
                    >
                        <Image
                            style={{ height: "99%", width: 30 }}
                            source={require("../assets/tich-removebg-preview.png")}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: "100%",
                            width: 35,

                            marginLeft: 25,
                            borderRadius: 10,
                            backgroundColor: "#FFFAD7",
                        }}
                    >
                        <Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: "100%",
                            width: 35,
                            backgroundColor: "#432C7A",
                            marginLeft: 25,
                            borderRadius: 10,
                        }}
                    >
                        <Text></Text>
                    </TouchableOpacity>
                </View>
                <Text>Size</Text>
                <View
                    style={{
                        height: "10%",
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            height: "100%",
                            width: 45,
                            borderWidth: 1,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text>XS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: "100%",
                            width: 45,
                            borderWidth: 1,
                            marginLeft: 30,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text>S</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: "100%",
                            width: 45,
                            borderWidth: 1,
                            marginLeft: 30,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text>M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: "100%",
                            width: 45,
                            borderWidth: 1,
                            marginLeft: 30,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text>L</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#E97777",
                            height: "35%",
                            width: "80%",

                            marginLeft: 30,
                            marginTop: 30,
                            borderRadius: 15,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text>ADD TO CARD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
