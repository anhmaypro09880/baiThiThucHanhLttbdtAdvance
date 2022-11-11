import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Screen2({ navigation }) {
    return (
        <View style={styles.container}>
            <View
                style={{
                    height: "100%",
                    width: "80%",
                    marginLeft: "10%",
                    marginTop: 20,
                }}
            >
                <View
                    style={{
                        height: "5%",

                        flexDirection: "row",
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Screen1");
                        }}
                    >
                        <Image
                            style={{ height: 35, width: 35 }}
                            source={require("../assets/menu.png")}
                        ></Image>
                    </TouchableOpacity>

                    <Image
                        style={{ height: 35, width: 35, marginLeft: 250 }}
                        source={require("../assets/magnifying-glass.png")}
                    ></Image>
                </View>
                <Text
                    style={{
                        marginTop: 20,
                        marginBottom: 20,
                        fontSize: 20,
                        fontWeight: "bold",
                    }}
                >
                    Categories
                </Text>
                <View style={{ flexDirection: "row", height: "5%" }}>
                    <TouchableOpacity
                        style={{
                            height: "50%",
                            width: 45,

                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#497174",
                        }}
                    >
                        <Image
                            style={{ height: 35, width: 35 }}
                            source={require("../assets/family.png")}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: "50%",
                            width: 45,
                            marginLeft: 40,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#497174",
                        }}
                    >
                        <Image
                            style={{ height: 35, width: 35 }}
                            source={require("../assets/children.png")}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: "50%",
                            width: 45,
                            marginLeft: 40,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#497174",
                        }}
                    >
                        <Image
                            style={{ height: 35, width: 35 }}
                            source={require("../assets/family.png")}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: "50%",
                            width: 45,
                            marginLeft: 40,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#497174",
                        }}
                    >
                        <Image
                            style={{ height: 35, width: 35 }}
                            source={require("../assets/family.png")}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        height: "10%",
                        marginTop: 0,
                    }}
                >
                    <Text
                        style={{
                            marginLeft: 15,
                            fontSize: 15,
                            fontWeight: "bold",
                        }}
                    >
                        {" "}
                        All
                    </Text>
                    <Text
                        style={{
                            marginLeft: 60,
                            fontSize: 15,
                            fontWeight: "bold",
                        }}
                    >
                        Kid
                    </Text>
                    <Text
                        style={{
                            marginLeft: 60,
                            fontSize: 15,
                            fontWeight: "bold",
                            color: "pink",
                        }}
                    >
                        Woman
                    </Text>
                    <Text
                        style={{
                            marginLeft: 40,
                            fontSize: 15,
                            fontWeight: "bold",
                        }}
                    >
                        Men
                    </Text>
                </View>
                <View
                    style={{
                        height: "25%",
                        width: "85%",

                        marginLeft: "15%",
                    }}
                >
                    <View
                        style={{
                            height: "55%",
                            width: "100%",

                            flexDirection: "row",
                        }}
                    >
                        <View
                            style={{
                                height: 150,
                                width: "40%",
                                backgroundColor: "#B9E0FF",
                                borderRadius: 15,
                            }}
                        >
                            <Image
                                style={{
                                    height: 150,
                                    width: "100%",
                                    borderRadius: 15,
                                }}
                                source={require("../assets/stas_55_04-removebg-preview.png")}
                            ></Image>
                        </View>
                        <View
                            style={{
                                height: 150,
                                width: "40%",
                                marginTop: 20,
                                marginLeft: 30,
                                backgroundColor: "#D6E4E5",
                                borderRadius: 15,
                            }}
                        >
                            <Image
                                style={{
                                    height: 150,
                                    width: "100%",
                                    borderRadius: 15,
                                }}
                                source={require("../assets/renderpeople_free_rigged_people-removebg-preview.png")}
                            ></Image>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        height: "30%",
                        width: "85%",

                        marginLeft: "15%",
                    }}
                >
                    <View
                        style={{
                            height: "55%",
                            width: "100%",

                            flexDirection: "row",
                        }}
                    >
                        <View
                            style={{
                                height: 150,
                                width: "40%",
                                backgroundColor: "#D6E4E5",
                                borderRadius: 15,
                            }}
                        >
                            <Image
                                style={{
                                    height: 150,
                                    width: "100%",
                                    borderRadius: 15,
                                }}
                                source={require("../assets/stas_55_04-removebg-preview.png")}
                            ></Image>
                        </View>
                        <View
                            style={{
                                height: 150,
                                width: "40%",
                                marginTop: 20,
                                marginLeft: 30,
                                backgroundColor: "#B9E0FF",
                                borderRadius: 15,
                            }}
                        >
                            <Image
                                style={{
                                    height: 150,
                                    width: "100%",
                                    borderRadius: 15,
                                }}
                                source={require("../assets/blog-1-removebg.png")}
                            ></Image>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Screen3");
                    }}
                    style={{
                        backgroundColor: "#E97777",
                        height: "8%",
                        width: "80%",

                        marginLeft: 30,

                        borderRadius: 15,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: 15, color: "white" }}>Next</Text>
                </TouchableOpacity>
                {/* <View
                    style={{ borderWidth: 1, height: "10%", width: "100%" }}
                ></View> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
