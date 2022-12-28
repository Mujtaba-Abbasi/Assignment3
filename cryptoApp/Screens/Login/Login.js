import {
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { styles } from '../../styles';

import {
  Title,
  TextField,
  CompButton,
} from "../../Components/loginSignUpComps";

import {bgImage} from '../../assets/images/';

const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground source={bgImage} resizeMode="cover">
        <LinearGradient
          colors={["#000000", "#000000"]}
          style={styles.linearGradient}
        />

        <View style={styles.containerView}>
          <View marginTop={134}>
            <Title
              titleText="Sign In"
              subTitle="Sign in your account to get started"
            />
          </View>

          <View style={styles.textFieldWrapper} marginTop={84}>
            <TextField title='Email'/>
          </View>

          <View style={styles.textFieldWrapper} marginTop={40}>
            <TextField title='Password'/>
          </View>

          <Pressable
            style={{ position: "relative", left: 55, marginTop:11 }}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.pressableText}>Forgot Password?</Text>
          </Pressable>
 
          <CompButton name="Login" onPress={()=>navigation.navigate('Accounts')} marginTop={63}/>

          <View style={{flexDirection:'row',}} marginTop={11}>
            <Text style={styles.pressableText}>Don't have an account?</Text>
            <Pressable onPress={() => navigation.navigate('Sign Up')} marginLeft={6}>
              <Text style={styles.pressableSignUp}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
