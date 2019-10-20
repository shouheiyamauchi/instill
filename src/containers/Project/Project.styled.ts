import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet
} from 'react-native'
import * as colors from '~src/styles/colors'

export const style = StyleSheet.create({
  container: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 100
  },
  description: {
    color: colors.BLACK,
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    marginTop: 16
  },
  title: {
    color: colors.BLACK,
    fontFamily: 'BebasNeue-Regular',
    fontSize: 37
  }
})

export const itemImage = (props: { source: ImageSourcePropType }) => {
  const maxWidth = Dimensions.get('window').width - 80
  const width =
    maxWidth < Image.resolveAssetSource(props.source).width
      ? maxWidth
      : Image.resolveAssetSource(props.source).width

  return StyleSheet.create({
    style: {
      height:
        (width / Image.resolveAssetSource(props.source).width) *
        Image.resolveAssetSource(props.source).height,
      marginTop: 25,
      width
    }
  })
}
