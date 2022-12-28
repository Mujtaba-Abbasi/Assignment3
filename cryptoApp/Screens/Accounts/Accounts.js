import React from "react";
import {
  View,
  SafeAreaView,
} from "react-native";

import {PaymentView, HeaderComp } from "../../Components/appComp/appComp.jsx";

const Accounts = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View >
          <HeaderComp title='Account' backPress={()=>navigation.navigate('Sign Up')}/>
          <PaymentView />
      </View>
    </SafeAreaView>
  );
};

export default Accounts;
