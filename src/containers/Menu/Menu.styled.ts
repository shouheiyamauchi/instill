import { Dimensions, StyleSheet } from 'react-native'
import * as colors from '~src/styles/colors'

export const style = StyleSheet.create({
  closeButton: {
    color: colors.GREY,
    fontSize: 60,
    position: 'absolute',
    right: 45,
    top: 20
  },
  menuItem: {
    color: colors.GREY,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 36,
    padding: 8
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: colors.BLACK,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    left: 0,
    opacity: 0.9,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width
  }
})
