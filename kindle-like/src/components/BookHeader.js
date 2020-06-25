import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { withNavigation } from "react-navigation";

const BookHeader = ({ navigation }) => {
  const title = navigation.getParam("title");
  return (
    <View style={styles.backgroundStyle}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back" style={styles.iconStyle} />
      </TouchableOpacity>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    paddingVertical: 10,
    paddingTop: 40,
    // backgroundColor: "#FAFAFA",
    // height: 50,
    borderRadius: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
  },
  titleStyle: {
    flex: 1,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    // marginHorizontal: 15,
  },
});

export default withNavigation(BookHeader);
