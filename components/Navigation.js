import React from 'react'
import { Text, View, Platform, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { black, white, shadow } from '../styles/'
import Decks from '../components/Decks'
import AddDeck from '../components/AddDeck'
import SpecificDeck from '../components/SpecificDeck'
import AddCard from '../components/AddCard'
import Quiz from '../components/Quiz'


const Tabs = TabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-albums' size={20} color={tintColor} />,
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle' size={20} color={tintColor} />,
      }
    },
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? black : white,
      style: {
        height: 64,
        backgroundColor: Platform.OS === 'ios' ? white : black,
        shadowColor: shadow,
        shadowOffset: {
          width: 0,
          height: 6
        },
        shadowRadius: 10,
        shadowOpacity: 1
      }
    }
  }
)

const Main = StackNavigator({
  Home: {
    screen: Tabs,
  },
  SpecificDeck: {
    screen: SpecificDeck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    }
  }
})

export default Main
