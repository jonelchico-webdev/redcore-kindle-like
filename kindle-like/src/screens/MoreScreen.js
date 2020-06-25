import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from "react-native-vector-icons";

const MoreScreen = () => {
    return (
        <View style={styles.container}>
            <Text>More</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MoreScreen
