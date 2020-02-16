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
    marginTop: 16,
    width: Dimensions.get('window').width * 0.5
  },
  subheading: {
    color: colors.BLACK,
    fontFamily: 'BebasNeue-Regular',
    fontSize: 21,
    marginTop: 10,
    width: Dimensions.get('window').width * 0.5
  },
  title: {
    color: colors.BLACK,
    fontFamily: 'BebasNeue-Regular',
    fontSize: 37
  }
})

export const itemImage = ({ source, widthPercent }: { source: ImageSourcePropType, widthPercent?: number }) => {
  const maxWidth = Dimensions.get('window').width - 80
  const originalWidth = Image.resolveAssetSource(source).width

  let width: number
  if (typeof widthPercent === 'undefined') {
    width = maxWidth
  } else {
    if (widthPercent === 0) { // max width is original image size
      width = maxWidth < originalWidth ? maxWidth : originalWidth
    } else {
      width = maxWidth * widthPercent / 100
    }
  }

  return StyleSheet.create({
    style: {
      height:
        (width / originalWidth) *
        Image.resolveAssetSource(source).height,
      marginTop: 25,
      width
    }
  })
}
