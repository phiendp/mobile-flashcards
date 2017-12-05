import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Button from './Button' 
import { title, center, input } from '../styles'
import { saveDeckTitle } from '../actions/decksActions'


class AddDeck extends Component {
  state = {
    title: 'Add New Deck',
  }

  submitTitle = async () => {
    const { saveDeckTitle } = this.props

    if (this.state.title === '') {
      this.setState({title: 'New Deck'})
      this.refs.decksInput.blur()
      return
    }

    const newId = await saveDeckTitle(this.state.title)
    this.setState({title: 'New Deck'})
    this.props.navigation.navigate('SpecificDeck', {
      deckId: newId,
    })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.center}>
        <View>
          <Text style={styles.title}>What is the title of your new deck?</Text>
          <TextInput
            ref='decksInput'
            style={styles.input}
            onFocus={() => this.setState((prevState) => ({title: prevState.title !== 'New Deck' ? prevState.title : '' }))}
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
            onSubmitEditing={() => this.submitTitle()}
          />
          <Button onPress={() => this.submitTitle()}> Submit </Button>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = ({ decksIds, decks }) => {
  return {
    decksIds,
    decks,
  }
}

const styles = StyleSheet.create({
  center,
  input,
  title,
})

export default connect(mapStateToProps, {
  saveDeckTitle,
})(AddDeck)
