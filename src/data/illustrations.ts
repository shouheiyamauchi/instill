import { ImageSourcePropType } from 'react-native'

interface Illustrations {
  [key: string]: {
    cover: ImageSourcePropType
    description: string
    items: Array<{
      description?: string
      image: ImageSourcePropType
    }>
  }
}

export const illustrations: Illustrations = {
  bitterology: {
    cover: require('~assets/images/illustrations/bitterology/1.png'),
    description:
      "Design activation sketches of a branded studio space for an event called 'Selfish Weekend'. Sponsored by House of Angostura, the installment was called 'Bitterology'.",
    items: [
      {
        image: require('~assets/images/illustrations/bitterology/1.png')
      },
      {
        image: require('~assets/images/illustrations/bitterology/2.png')
      },
      {
        image: require('~assets/images/illustrations/bitterology/3.png')
      },
      {
        image: require('~assets/images/illustrations/bitterology/4.png')
      }
    ]
  },
  bws: {
    cover: require('~assets/images/illustrations/bws/5.png'),
    description:
      'Storyboard illustrations for a video short pitched to BWS by Pedestrian.TV',
    items: [
      {
        image: require('~assets/images/illustrations/bws/1.png')
      },
      {
        image: require('~assets/images/illustrations/bws/2.png')
      },
      {
        image: require('~assets/images/illustrations/bws/3.jpg')
      },
      {
        image: require('~assets/images/illustrations/bws/4.png')
      },
      {
        image: require('~assets/images/illustrations/bws/5.png')
      },
      {
        image: require('~assets/images/illustrations/bws/6.png')
      },
      {
        image: require('~assets/images/illustrations/bws/7.png')
      },
      {
        image: require('~assets/images/illustrations/bws/8.png')
      },
      {
        image: require('~assets/images/illustrations/bws/9.png')
      },
      {
        image: require('~assets/images/illustrations/bws/10.png')
      },
      {
        image: require('~assets/images/illustrations/bws/11.png')
      }
    ]
  },
  digitisation: {
    cover: require('~assets/images/illustrations/digitisation/1.jpg'),
    description:
      "Transitioning illustration for the 'Digitisation' Shorthand report for Business Insider and CBA.",
    items: [
      {
        image: require('~assets/images/illustrations/digitisation/1.jpg')
      },
      {
        image: require('~assets/images/illustrations/digitisation/2.jpg')
      }
    ]
  },
  dragoon: {
    cover: require('~assets/images/illustrations/dragoon/1.jpg'),
    description:
      'Illustration style emblem design of a dragoon mask for a bboy (breakdancer).',
    items: [
      {
        image: require('~assets/images/illustrations/dragoon/1.jpg')
      }
    ]
  },
  kotaku: {
    cover: require('~assets/images/illustrations/kotaku/1.jpg'),
    description: 'Hero image for a Kotaku article.',
    items: [
      {
        image: require('~assets/images/illustrations/kotaku/1.jpg')
      }
    ]
  },
  kuLion: {
    cover: require('~assets/images/illustrations/kuLion/1.png'),
    description:
      "Inspired by Tiki statues on a trip to Hawai'i, the god of war Ku with influences from Chinese lion statues.",
    items: [
      {
        image: require('~assets/images/illustrations/kuLion/1.png')
      }
    ]
  },
  popsugar: {
    cover: require('~assets/images/illustrations/popsugar/1.jpg'),
    description:
      "Illustration for a POPSUGAR segment called Over-Represented, trying to identify trending jobs of the future, and making sure women were 'over-represented' in these roles.",
    items: [
      {
        image: require('~assets/images/illustrations/popsugar/1.jpg')
      },
      {
        description:
          "A variation in a Who What Wear (POPSUGAR's sister site) style.",
        image: require('~assets/images/illustrations/popsugar/2.jpg')
      }
    ]
  }
}
