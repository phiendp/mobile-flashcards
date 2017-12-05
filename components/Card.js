import React, { Component } from 'react'
import {Text, StyleSheet, View } from 'react-native'
import Button from './Button'
import { center, deckCardsNumber, title } from '../styles'


class Card extends Component {
  state = {
    show: 'question',
  }

  render() {
    const { deckId, decks, quiz, onCorrect, onIncorrect } = this.props

    return (
      <View style={{flex: 1}}>
        <View style={[styles.center, {flex: 2}]}>
          <Text style={styles.deckCardsNumber}>{`${quiz.currentCard + 1} / ${decks[deckId].questions.length}`}</Text>
          
          <Text style={[styles.title]}>
            {this.state.show === 'question' ?
              decks[deckId].questions[quiz.currentCard].question :
              decks[deckId].questions[quiz.currentCard].answer
            }
          </Text>
          
          <Button
            type='white'
            onPress={() => this.setState((prevState) => ({show: prevState.show === 'question' ? 'answer' : 'question'}))}>
            Show {this.state === 'question' ? 'question' : 'answer'}
          </Button>
        </View>
        
        <View style={[styles.center, {flex: 3}]}>
          <Button 
            onPress={() => {
              this.setState({show: 'question'})
              onCorrect()
            }}>
            Correct
          </Button>
          <Button
            type='white'
            onPress={() => {
              this.setState({show: 'question'})
              onIncorrect()
            }}>
            Incorrect
          </Button>
        </View>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  center,
  deckCardsNumber,
  title,
})

export default Card
