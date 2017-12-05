import React, { Component } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import Deck from './Deck'


class Decks extends Component {
  _keyExtractor = (item) => item

  _renderDeck = ({ item }) => {
    const { decks } = this.props

    return (
      <TouchableOpacity>
        <Deck title={decks[item].title} questions={decks[item].questions} />
      </TouchableOpacity>
    )
  }

  render() {
    const { ids, decks } = this.props

    return (
      <View>
        <FlatList
          data={ids}
          extraData={decks}
          renderItem={this._renderDeck}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ ids, decks }) => {
  return { ids, decks }
}

export default connect(mapStateToProps, { fetchDecks })(Decks)
