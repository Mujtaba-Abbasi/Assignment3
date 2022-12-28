import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  backIcon: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 27,
    left: 21,
    backgroundColor: "#265955",
    width: 24,
    height: 24,
  },
  accountInfoPressable: {
    height: 36,
    width: 120,
    justifyContent: "center",
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  accountInfoWhite: {
    backgroundColor: "#D9D9D9",
  },
  accountInfoBorder: {
    borderColor: "#fff",
    borderWidth: 1,
  },
  accountInfoPressableText: {
    marginLeft: 4,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "PoppinsSemiBold",
  },
  textColor: {
    color: "#fff",
  },
  //TitleBar
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 21,
    paddingRight: 21,
    marginTop: 55,
  },
  titleBarText: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
    lineHeight: 36,
  },
  titleBarIcon: { height: 24, width: 24 },
  //PaymentView
  paymentWrapper: {
    alignSelf: "center",
    backgroundColor: "#265955",
    width: 318,
    height: 205,
    borderRadius: 21,
    marginTop: 17,
    paddingHorizontal: 17,
    paddingVertical: 32,
  },
  accountNo: {
    color: "white",
    fontSize: 22,
    lineHeight: 33,
    fontFamily: "PoppinsBold",
  },
  accountText: {
    color: "white",
    marginTop: 3,
    fontSize: 16,
    lineHeight: 24,
    fontFamily:'PoppinsMedium',
  },
  paymentSubWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  moneyText: {
    color: "white",
    marginTop: 3,
    fontSize: 18,
    lineHeight: 27,
    fontFamily: "PoppinsBold",
  },
  paymentButtonWrappper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 21,
    height: 36,
  },
});
