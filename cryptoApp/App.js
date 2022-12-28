import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { Login, SignUp, Notifications, Accounts, ForgotPassword, ResetPassword } from "./Screens/index";
import SplashScreen from "./Components/SplashScreen";

const Stack = createStackNavigator();

export default function App() {

  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const [fontsLoaded] = useFonts({
    'PoppinsRegular': require("./assets/fonts/PoppinsRegular.ttf"),
    'PoppinsBold': require("./assets/fonts/PoppinsBold.ttf"),
    'PoppinsSemiBold': require("./assets/fonts/PoppinsSemiBold.ttf"),
    'PoppinsMedium': require("./assets/fonts/PoppinsMedium.ttf"),
  });

  
  if (!fontsLoaded) return <SplashScreen/>;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        options={{ headerShown: false }}
      >
        <Stack.Screen name='Login' component={Login} options={{headerShown : false}} />
        <Stack.Screen name='Sign Up' component={SignUp} options={{headerShown : false}}/>
        <Stack.Screen name='Accounts' component={Accounts} options={{headerShown : false}}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown : false}}/>
        <Stack.Screen name='ResetPassword' component={ResetPassword} options={{headerShown : false}}/>

        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerShown: false,
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
