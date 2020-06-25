import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import LibraryScreen from './src/screens/LibraryScreen';
import StoreScreen from './src/screens/StoreScreen';
import MoreScreen from './src/screens/MoreScreen';
import SearchBar from './src/components/SearchBar';
import BookHeader from './src/components/BookHeader';
import ShowBookContentScreen from './src/screens/ShowBookContentScreen';
import { MaterialIcons } from "react-native-vector-icons";
import { Provider as BookFromFileProvider } from "./src/context/BooksFromFileContext";

const switchNavigator = createAnimatedSwitchNavigator(
  {
    SplashFlow: SplashScreen,
    mainFlow: createStackNavigator({
      Home: createBottomTabNavigator(
        {
          HomeList: {
            screen: HomeScreen,
            navigationOptions: {
              title: "HOME",
              tabBarIcon: ({ focused }: any) =>
                focused
                  ? <MaterialIcons style={{ color: "#6495ed" }} name="home" size={20} />
                  : <MaterialIcons style={{ color: "#808080" }} name="home" size={20} />
            }
          },
          Library: {
            screen: LibraryScreen,
            navigationOptions: {
              title: "LIBRARY",
              tabBarIcon: ({ focused }: any) =>
                focused
                  ? <MaterialIcons style={{ color: "#6495ed" }} name="library-books" size={20} />
                  : <MaterialIcons style={{ color: "#808080" }} name="library-books" size={20} />
            }
          },
          Store: {
            screen: StoreScreen,
            navigationOptions: {
              title: "STORE",
              tabBarIcon: ({ focused }: any) =>
                focused
                  ? <MaterialIcons style={{ color: "#6495ed" }} name="local-grocery-store" size={20} />
                  : <MaterialIcons style={{ color: "#808080" }} name="local-grocery-store" size={20} />
            }
          },
          More: {
            screen: MoreScreen,
            navigationOptions: {
              title: "MORE",
              tabBarIcon: ({ focused }: any) =>
                focused
                  ? <MaterialIcons style={{ color: "#6495ed" }} name="more" size={20} />
                  : <MaterialIcons style={{ color: "#808080" }} name="more" size={20} />

            }
          },
        },
        {
          navigationOptions: {
            header: () => <SearchBar />
          }
        }
      ),
      Search: SearchScreen,
      BookDetail: {
        screen: ShowBookContentScreen,
        navigationOptions: {
          header: () => <BookHeader />
        }
      },
    }),
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-right"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  }
)

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <BookFromFileProvider>
      <App />
    </BookFromFileProvider>
  );
};


