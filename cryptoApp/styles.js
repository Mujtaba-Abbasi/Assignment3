import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontFamily:'PoppinsBold',
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 32,
    // fontWeight: "700",
    lineHeight: 48,
    marginBottom: 11,
  },

  subTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily:'PoppinsRegular',
    lineHeight: 24,
  },

  input: { flex: 1, fontSize: 14, fontFamily:'PoppinsRegular', lineHeight: 21 },

  iconStyle: { height: 16, width: 20, marginLeft: 13, marginRight: 13 },

  iconStyle1: { height: 20, width: 20, marginLeft: 13, marginRight: 13 },

  iconStyle2: {width:20, height:14, marginLeft: 13, marginRight: 13 },

  textFieldWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 46,
    width: 232,
    borderRadius: 20,
    color: "#3A3434",
    boxShadow: "0px 2px 6px #000000",
  },
  buttonStyles: {
    height: 44,
    width: 241,
    borderRadius: 10,
    backgroundColor: "#c3f256",
    justifyContent: "center",
    alignItems: "center",
    text: {
      fontSize: 16,
      fontFamily:'PoppinsBold',
      lineHeight: 24,
      color: "#000000",
    },
  },

  //Login
  containerView: {
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    opacity: 0.6,
  },
  pressableText: {
    color: "#D7D6D6",
    lineHeight: 19.5,
    fontFamily:'PoppinsRegular',
    fontSize: 13,
  },
  pressableSignUp: {
    lineHeight: 19.5,
    fontFamily:'PoppinsRegular',
    fontSize: 13,
    color: "#CFFE5F",
  },
  //Accounts
  
});
