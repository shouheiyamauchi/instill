import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet
} from 'react-native'

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 100
  }
})

export const columns = (columns: number) => StyleSheet.create({
  style: {
    width: `${100 / columns}%`
  }
})

export const portfolioImage = (props: { columns: number, source: ImageSourcePropType }) => {
  const width = Dimensions.get('window').width / props.columns

  return StyleSheet.create({
    style: {
      height:
        (width / Image.resolveAssetSource(props.source).width) *
        Image.resolveAssetSource(props.source).height,
      width
    }
  })
}
