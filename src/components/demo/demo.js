import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import styles from  './demo.scss'

class Demo extends Component {
  render() {
    return (
      <View className={styles.demo}>
        <Text>Demo</Text>
      </View>
    )
  }
}

export default Demo;
