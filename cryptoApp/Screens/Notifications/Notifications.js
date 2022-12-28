import { View, Text, FlatList, SafeAreaView, Animated } from "react-native";
import React from "react";

import { HeaderComp } from "../../Components/appComp/appComp.jsx";
import { Data } from "./notiDummyData";

const Notifications = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const scrollEvent = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );

  const renderItem = ({ item, index }) => {
    const inputRange = [
      -1,
      0,
      (61) * index,
      (61) * (index + 2),
    ];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0.9],
    });


    return <Noti data={item} scale={scale} />;
  };

  return (
    <SafeAreaView>
      <View>
        <Animated.FlatList
          onScroll={scrollEvent}
          style={{ zIndex: 0 }}
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={<HeaderComp title="Notifications" />}
          ListHeaderComponentStyle={{ marginBottom: 18 }}
        />
      </View>
    </SafeAreaView>
  );
};

const Noti = ({ data, scale }) => {
  return (
    <Animated.View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        transform:[{scale}],
        alignSelf: "center",
        alignItems: "flex-start",
        paddingHorizontal: 10,
        width: 319,
        height: 61,
        borderRadius: 10,
        backgroundColor: "#265955",
        marginBottom: 11,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontFamily: "PoppinsSemiBold",
          fontSize: 16,
          lineHeight: 24,
        }}
      >
        {data.notiTitle}
      </Text>
      <Text
        style={{
          color: "#fff",
          fontFamily: "PoppinsMedium",
          fontSize: 12,
          lineHeight: 18,
        }}
      >
        {data.notiDate}
      </Text>
    </Animated.View>
  );
};

export default Notifications;
