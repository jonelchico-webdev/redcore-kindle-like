import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.constainerStyle}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: result.bookCover,
        }}
      />
      <Text style={styles.nameStyle}>{result.title}</Text>      
    </View>
  );
};

const styles = StyleSheet.create({
  constainerStyle: {
    marginLeft: 15,
    display: 'flex',
    alignItems: 'center'
  },
  imageStyle: {
    width: 100,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
