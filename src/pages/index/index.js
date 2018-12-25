import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import Demo from '../../components/demo/demo'
import styles from  './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className={styles.index}>
        <Text>Hello world!</Text>
        <Demo />
      </View>
    )
  }
}

export default Index;
