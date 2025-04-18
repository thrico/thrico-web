// import { getCommunitiesFeedList } from "@/graphql/actions/feed";
// import React from "react";

// const List = ({ id }: { id: string }) => {
//   const { data, loading } = getCommunitiesFeedList({
//     variables: {
//       input: {
//         id: id,
//       },
//     },
//   });
//   return <>dsd</>;
// };

// export default List;

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const List = () => {
//   return (
//     <View>
//       <Text>List</Text>
//     </View>
//   )
// }

// export default List

// const styles = StyleSheet.create({})

import { getCommunitiesFeedList } from "@/graphql/actions/feed";
import React from "react";
import { useParams } from "next/navigation";
import Feed from "./Feed";
import { List } from "antd";
function DiscussionList({}) {
  const params = useParams<{ id: string }>();
  const { data } = getCommunitiesFeedList({
    variables: {
      input: {
        id: params.id,
      },
    },
  });
  return (
    <List
      dataSource={data?.getCommunitiesFeedList}
      renderItem={(item) => <Feed item={item} />}
    />
  );
}

export default DiscussionList;
