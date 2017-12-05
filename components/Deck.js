import React from 'react'
import { Text, View } from 'react-native'


const Deck = (props) => {
  const { title, questions } = props
  const totalCards = questions ? questions.length : 0

  return (
    <View>
      <Text> { title } </Text>
      <Text> {`${cardsNumber} card${cardsNumber !== 1 ? 's' : ''}`} </Text>
    </View>
  )
}


export default Deck
