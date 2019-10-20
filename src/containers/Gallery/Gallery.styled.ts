import { Dimensions, StyleSheet } from 'react-native'
import * as colors from '~src/styles/colors'

export const style = StyleSheet.create({
  description: {
    color: colors.WHITE,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    marginBottom: 8
  },
  descriptionContainer: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'flex-start',
    left: 0,
    position: 'absolute',
    width: Dimensions.get('window').width
  },
  pageNo: {
    color: colors.WHITE,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    marginBottom: 8
  }
})
