import * as React from 'react'
import { Image, Text, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import * as projectsData from '~src/data/projects'

import AppContainer from '../AppContainer/AppContainer'

import * as s from './Project.styled'

class Project extends React.Component<{
  navigation: NavigationScreenProp<any, any>
}> {
  public render() {
    const projectID = this.props.navigation.getParam('projectID')

    return (
      <AppContainer navigation={this.props.navigation}>
        <View style={s.style.container}>
          <Text style={s.style.title}>
            {projectsData.projects[projectID].title}
          </Text>
          <Text style={s.style.description}>
            {projectsData.projects[projectID].description}
          </Text>
          {projectsData.projects[projectID].items.map((item, index) => {
            if (item.type === projectsData.ItemType.IMAGE) {
              return (
                <Image
                  key={`project-${projectID}-${index}`}
                  source={item.value}
                  style={s.itemImage({ source: item.value }).style}
                />
              )
            }

            return null
          })}
        </View>
      </AppContainer>
    )
  }
}

export default Project
