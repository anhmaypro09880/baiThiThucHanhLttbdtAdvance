import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Screen3() {
    return (
        <View style={styles.container}>
            <View
                style={{
                    height: "50%",
                    width: "100%",
                    backgroundColor: "#fffff",
                }}
            >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Skip</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
