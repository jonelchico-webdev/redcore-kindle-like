import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import { withNavigation } from "react-navigation";

const SearchBar = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Search")}>
      <View style={styles.backgroundStyle}>
        <MaterialIcons name="search" style={styles.iconStyle} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="Search"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginVertical: 10,
    marginTop: 40,
    backgroundColor: "#FAFAFA",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default withNavigation(SearchBar);
