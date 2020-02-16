import * as React from 'react'
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { illustrations } from '~src/data/illustrations'

import AppContainer from '../AppContainer/AppContainer'
import * as s from '../Home/Home.styled'

const column1 = ['popsugar', 'bws', 'dragoon']
const column2 = ['bitterology', 'digitisation', 'kuLion', 'kotaku']

const columns = [
  column1,
  column2,
]

class Illustration extends React.Component<{
  navigation: NavigationScreenProp<any, any>
},
{
  reRenderKey: number
}> {
  public constructor(props: {
    navigation: NavigationScreenProp<any, any>
  }) {
    super(props)

    this.state = {
      reRenderKey: 0
    }

    Dimensions.addEventListener('change', this.updateKey)
  }

  public componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateKey)
  }

  public updateKey = () => {
    this.setState((props) => ({
      ...props,
      reRenderKey: props.reRenderKey + 1
    }))
  }

  public navigateToIllustration = (illustrationID: string) => () => {
    this.props.navigation.navigate('Gallery', { illustrationID })
  }

  public render() {
    return (
      <AppContainer navigation={this.props.navigation}>
        <View style={s.style.container}>
          {columns.map((column) => (
            <View style={s.columns(columns.length).style}>
              {column.map((item) => (
                <TouchableOpacity
                  key={`illustrations-${item}`}
                  onPress={this.navigateToIllustration(item)}
                >
                  <Image
                    key={item}
                    source={illustrations[item].cover}
                    style={
                      s.portfolioImage({
                        columns: 2,
                        source: illustrations[item].cover
                      }).style
                    }
                  />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </AppContainer>
    )
  }
}

export default Illustration
