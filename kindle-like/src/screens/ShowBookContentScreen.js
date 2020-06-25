import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import bookServer from "../api/bookServer";

const ShowBookContentScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam("id");

    const getResult = async (id) => {
        const response = await bookServer.get(`/bookList/${id}`);
        return setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    const renderContents = () => {
        return result.content.map((item, index) => <Text key={index} style={styles.content}>{`${item}`}</Text>)
    }

    return (
        <SafeAreaView style={styles.containerStyle}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: result.bookCover,
                    }}
                />
                <Text style={styles.subTitleStyle}>{`"${result.subTitle1}"`}</Text>
                <Text style={styles.subTitleStyle}>{`"${result.subTitle2}"`}</Text>
                {renderContents()}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: "#fff",
        padding: 20,
        paddingBottom: 15,
    },
    imageStyle: {
        width: 200,
        height: 300,
        borderRadius: 4,
        marginBottom: 5,
        alignSelf: 'center'
    },
    subTitleStyle: {
        marginVertical: 10,
        fontSize: 20,
        fontStyle: "italic"
    },    
    content: {
        marginVertical: 10,
        fontSize: 18,
    }
});


export default ShowBookContentScreen;
