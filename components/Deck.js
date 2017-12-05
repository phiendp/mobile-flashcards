import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { deck, deckCardsNumber, title } from '../styles'


const Deck = (props) => {
  const { title, questions } = props
  const totalCards = questions ? questions.length : 0

  return (
    <View style={styles.deck}>
      <Text style={styles.title}> { title } </Text>
      <Text style={styles.deckCardsNumber}> {`${totalCards} card${totalCards !== 1 ? 's' : ''}`} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  deck,
  deckCardsNumber,
  title,
})

export default Deck
