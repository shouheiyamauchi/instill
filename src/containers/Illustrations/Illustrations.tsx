import * as React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { illustrations } from '~src/data/illustrations'

import AppContainer from '../AppContainer/AppContainer'
import * as s from '../Home/Home.styled'

const column1 = ['popsugar', 'bws', 'dragoon']
const column2 = ['bitterology', 'digitisation', 'kuLion', 'kotaku']

class Illustration extends React.Component<{
  navigation: NavigationScreenProp<any, any>
}> {
  public navigateToIllustration = (illustrationID: string) => () => {
    this.props.navigation.navigate('Gallery', { illustrationID })
  }

  public render() {
    return (
      <AppContainer navigation={this.props.navigation}>
        <View style={s.style.container}>
          <View style={s.style.column}>
            {column1.map((item) => (
              <TouchableOpacity
                key={`illustrations-${item}`}
                onPress={this.navigateToIllustration(item)}
              >
                <Image
                  key={item}
                  source={illustrations[item].cover}
                  style={
                    s.portfolioImage({
                      source: illustrations[item].cover
                    }).style
                  }
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={s.style.column}>
            {column2.map((item) => (
              <TouchableOpacity
                key={`illustrations-${item}`}
                onPress={this.navigateToIllustration(item)}
              >
                <Image
                  key={item}
                  source={illustrations[item].cover}
                  style={
                    s.portfolioImage({
                      source: illustrations[item].cover
                    }).style
                  }
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </AppContainer>
    )
  }
}

export default Illustration
