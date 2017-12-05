import { Platform } from 'react-native'

// Colors
export const white = '#ffffff'
export const blue = '#137fd1'
export const grey = '#666688';
export const shadow = 'rgba(5, 77, 132, 0.24)';

// UI elements
export const button = {
  default: {
    textAlign: 'center',
    backgroundColor: blue,
    color: white,
    borderRadius: Platform.OS === 'ios' ? 8 : 1,
    overflow: 'hidden',
    fontSize: 24,
    padding: 10,
    marginTop: 12,
  },
  white: {
    backgroundColor: white, 
    borderColor: blue, 
    borderWidth: 1, 
    color: blue,
  },
}

export const title = {
  fontSize: 36,
  color: blue,
  textAlign: 'center',
}

export const center = {
  flex: 1,
  justifyContent: 'center',
  padding: 20,
}

export const input = {
  borderWidth: Platform.OS === 'ios' ? 1 : 0,
  borderRadius: Platform.OS === 'ios' ? 8 : 1,
  borderColor: grey,
  padding: 5,
  height: 50,
  fontSize: 28,
  backgroundColor: Platform.OS === 'ios' ? white : 'transparent',
  color: blue,
  marginTop: 18,
}

export const deck = {
  backgroundColor: white,
  borderRadius: Platform.OS === 'ios' ? 16 : 2,
  padding: 20,
  marginLeft: 10,
  marginRight: 10,
  marginTop: 17,
  minHeight: 100,
  justifyContent: 'center',
  shadowRadius: 6,
  shadowOpacity: 0.8,
  shadowColor: shadow,
  shadowOffset: {
    width: 0,
    height: 6
  },
};

export const deckCardsNumber = {
  fontSize: 24,
  color: grey,
  textAlign: 'center',
};
