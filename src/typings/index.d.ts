declare module '*.jpg'
declare module '*.png'

declare module 'react-native-gallery-swiper' {
  class GallerySwiper extends React.Component<{
    images:
      | Array<{
          source: import('react-native').ImageSourcePropType
          dimensions: {
            width: number
            height: number
          }
        }>
      | Array<{ uri: string }>
    onPageSelected: (index: number) => void
  }> {}

  export = GallerySwiper
}
