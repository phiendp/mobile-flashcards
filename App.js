import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { View, StatusBar } from 'react-native'
import { black } from './styles'
import { reducer } from './reducers'
import configureStore from './store'
import { setLocalNotification } from './utils/notifications'
import Main from './components/Navigation'
import DecksStatusBar from './components/DecksStatusBar'


const initialState = {
  decksIds: [
    'React',
    'JavaScript',
  ],
  decks: {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
  },
}

const store = configureStore(initialState)

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <DecksStatusBar backgroundColor={black} barStyle="light-content" />
          <Main />
        </View>
      </Provider>
    )
  }
}
