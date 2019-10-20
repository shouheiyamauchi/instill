import * as React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { projects } from '~src/data/projects'

import AppContainer from '../AppContainer/AppContainer'

import * as s from './Home.styled'

const column1 = [
  'hp',
  'allure',
  'commercial',
  'slideSpace',
  'uvPro',
  'bitterology'
]
const column2 = [
  'sibc',
  'melanoma',
  'allureRefresh',
  'allureSocial',
  'businessInsider',
  'dnWedding'
]

class Home extends React.Component<{
  navigation: NavigationScreenProp<any, any>
}> {
  public navigateToProject = (projectID: string) => () => {
    this.props.navigation.navigate('Project', { projectID })
  }

  public render() {
    return (
      <AppContainer navigation={this.props.navigation}>
        <View style={s.style.container}>
          <View style={s.style.column}>
            {column1.map((item) => (
              <TouchableOpacity
                key={`home-${item}`}
                onPress={this.navigateToProject(item)}
              >
                <Image
                  key={item}
                  source={projects[item].cover}
                  style={
                    s.portfolioImage({
                      source: projects[item].cover
                    }).style
                  }
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={s.style.column}>
            {column2.map((item) => (
              <TouchableOpacity
                key={`home-${item}`}
                onPress={this.navigateToProject(item)}
              >
                <Image
                  key={item}
                  source={projects[item].cover}
                  style={
                    s.portfolioImage({
                      source: projects[item].cover
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

export default Home
