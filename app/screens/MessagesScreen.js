import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { useState } from "react";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    desciption: "D1",
    image: require("../assets/mosh.jpg"),
  },
  { id: 2, title: "T2", desciption: "D2", image: require("../assets/NG.jpg") },
  {
    id: 3,
    title: "T3",
    desciption: "D3",
    image: require("../assets/mosh.jpg"),
  },
  { id: 4, title: "T4", desciption: "D4", image: require("../assets/NG.jpg") },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.desciption}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
