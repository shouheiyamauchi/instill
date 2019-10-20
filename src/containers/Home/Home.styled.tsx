import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet
} from 'react-native'

export const style = StyleSheet.create({
  column: {
    width: '50%'
  },
  container: {
    flexDirection: 'row',
    marginTop: 100
  }
})

export const portfolioImage = (props: { source: ImageSourcePropType }) => {
  const width = Dimensions.get('window').width / 2

  return StyleSheet.create({
    style: {
      height:
        (width / Image.resolveAssetSource(props.source).width) *
        Image.resolveAssetSource(props.source).height,
      width
    }
  })
}
