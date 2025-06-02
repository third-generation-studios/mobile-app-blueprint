import { Text, View } from "react-native"

export default function FeedItem({ item }: { item: any }) {
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.content}</Text>
    </View>
  )
}
