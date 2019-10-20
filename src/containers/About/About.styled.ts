import { StyleSheet } from 'react-native'
import * as colors from '~src/styles/colors'

export const style = StyleSheet.create({
  container: {
    marginLeft: 100,
    marginRight: 100,
    marginTop: 50
  },
  description: {
    color: colors.BLACK,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    marginTop: 16,
    textAlign: 'center'
  },
  title: {
    color: colors.BLACK,
    fontFamily: 'BebasNeue-Regular',
    fontSize: 37,
    textAlign: 'center'
  }
})
