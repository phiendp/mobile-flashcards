import { Platform } from 'react-native'

export const white = '#ffffff'
export const blue = '#137fd1'

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
