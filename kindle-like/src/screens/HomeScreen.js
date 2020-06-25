import React, { useContext } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { NavigationEvents } from "react-navigation";
import { Context as BookFromFileContext } from '../context/BooksFromFileContext';
import BookList from '../components/BookList'


const HomeScreen = () => {
  const { state, getBooks } = useContext(BookFromFileContext)

  return (
    <>
      <NavigationEvents onWillFocus={getBooks} />
      <ScrollView style={styles.container}>
        <BookList
          results={state}
          title="Book Available"
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: '#fff',
  },
});

export default HomeScreen
