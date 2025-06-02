import FeedItem from "@/components/FeedItem"
import { supabase } from "@/supabase/client"
import { useEffect, useState } from "react"
import { FlatList, View } from "react-native"

export default function HomeScreen() {
  const [feed, setFeed] = useState<any[]>([])

  useEffect(() => {
    const fetchFeed = async () => {
      const { data } = await supabase.from("posts").select("*")
      if (data) setFeed(data)
    }
    fetchFeed()
  }, [])

  return (
    <View>
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FeedItem item={item} />}
      />
    </View>
  )
}
