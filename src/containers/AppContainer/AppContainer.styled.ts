import { Image, ImageSourcePropType, StyleSheet } from 'react-native'
import * as colors from '~src/styles/colors'

export const style = StyleSheet.create({
  columnContainer: {
    flexDirection: 'row',
    marginTop: 100
  },
  footer: {
    marginBottom: 100,
    marginTop: 100
  },
  footerText: {
    color: colors.BLACK,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 16,
    textAlign: 'center'
  },
  hamburgerContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 15
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 0,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    width: 200
  },
  menuItem: {
    color: colors.SOCIAL_ICONS,
    fontSize: 17,
    fontWeight: '500',
    paddingLeft: 20,
    paddingRight: 20
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  }
})

export const logo = (props: { source: ImageSourcePropType }) =>
  StyleSheet.create({
    style: {
      height:
        (200 / Image.resolveAssetSource(props.source).width) *
        Image.resolveAssetSource(props.source).height,
      width: 200
    }
  })
