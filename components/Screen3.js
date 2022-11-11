import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Screen3({ navigation }) {
    return (
        <View style={styles.container}>
            <View
                style={{
                    height: "50%",
                    width: "100%",
                    backgroundColor: "#fffff",
                }}
            >
                <Text
                    style={{
                        marginTop: 35,
                        fontSize: 15,
                        fontWeight: "bold",
                        marginLeft: "88%",
                    }}
                >
                    Skip
                </Text>
                <Image
                    style={{ height: "100%", width: "100%" }}
                    source={require("../assets/blog-1-removebg.png")}
                ></Image>
            </View>
            <View
                style={{
                    height: "50%",
                    width: "100%",
                    marginTop: 70,
                }}
            >
                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                        Let's Create your
                    </Text>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                        Perfect style
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            color: "#497174",
                            marginTop: 10,
                        }}
                    >
                        Every woman has unique Style, We can
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            color: "#497174",
                        }}
                    >
                        help create your Perfect style
                    </Text>
                </View>
                <View
                    style={{
                        height: "3%",
                        width: "60%",

                        marginLeft: "23%",
                        marginTop: 10,
                        flexDirection: "row",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            height: "100%",
                            width: "25%",
                            backgroundColor: "#474E68",
                            borderRadius: 15,
                        }}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: "100%",
                            marginLeft: "5%",
                            width: "25%",
                            borderRadius: 15,
                            backgroundColor: "#474E68",
                        }}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: "100%",
                            marginLeft: "5%",
                            width: "25%",
                            borderRadius: 15,
                            backgroundColor: "#F7A4A4",
                        }}
                    ></TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Screen2");
                    }}
                    style={{
                        backgroundColor: "#E97777",
                        height: "15%",
                        width: "60%",
                        marginLeft: 100,
                        marginLeft: "20%",
                        marginTop: 30,
                        borderRadius: 15,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: 15, color: "white" }}>Next</Text>
                </TouchableOpacity>
                <Text
                    style={{
                        marginLeft: "32%",
                        marginTop: 25,
                        fontSize: 18,
                        fontWeight: "bold",
                    }}
                >
                    Create Account
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
