import * as React from 'react'
import { Image, Text, View } from 'react-native'
import GallerySwiper from 'react-native-gallery-swiper'
import { NavigationScreenProp } from 'react-navigation'
import { illustrations } from '~src/data/illustrations'

import { style } from './Gallery.styled'

class Illustration extends React.Component<{
  navigation: NavigationScreenProp<any, any>
}> {
  public state = {
    imageIndex: 0
  }

  public setImageIndex = (imageIndex: number) => this.setState({ imageIndex })

  public render() {
    const { imageIndex } = this.state
    const illustration =
      illustrations[this.props.navigation.getParam('illustrationID')]

    return (
      <>
        <GallerySwiper
          images={illustration.items.map(({ image }) => ({
            dimensions: {
              height: Image.resolveAssetSource(image).height,
              width: Image.resolveAssetSource(image).width
            },
            source: image
          }))}
          onPageSelected={this.setImageIndex}
        />
        <View style={style.descriptionContainer} onTouchEnd={() => this.props.navigation.goBack()}>
          <Text style={style.description}>
            {illustration.items[imageIndex].description ||
              illustration.description}
          </Text>
          {illustration.items.length > 1 && (
            <Text style={style.pageNo}>
              Image {imageIndex + 1}/{illustration.items.length}
            </Text>
          )}
        </View>
      </>
    )
  }
}

export default Illustration
