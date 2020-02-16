import * as React from 'react'
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { projects } from '~src/data/projects'

import AppContainer from '../AppContainer/AppContainer'

import * as s from './Home.styled'

const column1 = [
  'biggestBeerRun',
  'allure',
  'bitterology',
  'allureRefresh'
]
const column2 = [
  'hp',
  'sibc'
]
const column3 = [
  'commercial',
  'slideSpace',
  'businessInsider',
  'allureSocial',
  'airAsia'
  // 'uvPro',
  // 'melanoma',
  // 'dnWedding',
]

const columns = [
  column1,
  column2,
  column3,
]

class Home extends React.Component<{
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

  public navigateToProject = (projectID: string) => () => {
    this.props.navigation.navigate('Project', { projectID })
  }

  public render() {
    return (
      <AppContainer key={this.state.reRenderKey} navigation={this.props.navigation}>
        <View style={s.style(columns.length).container}>
          {columns.map((column) => (
            <View style={s.style(columns.length).column}>
              {column.map((item) => (
                <TouchableOpacity
                  key={`home-${item}`}
                  onPress={this.navigateToProject(item)}
                >
                  <Image
                    key={item}
                    source={projects[item].cover}
                    style={
                      s.portfolioImage({
                        columns: columns.length,
                        source: projects[item].cover
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

export default Home
