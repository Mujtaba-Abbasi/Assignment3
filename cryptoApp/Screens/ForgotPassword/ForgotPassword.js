import {
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { styles } from '../../styles';

import {
  Title,
  TextField,
  CompButton,
} from "../../Components/loginSignUpComps";

import {bgImage} from '../../assets/images/';

const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground source={bgImage} resizeMode="cover">
        <LinearGradient
          colors={["#000000", "#000000"]}
          style={styles.linearGradient}
        />

        <View style={styles.containerView}>
          <View marginTop={234}>
            <Title
              titleText="Forgot Password"
              subTitle="Enter email to reset the password"
            />
          </View>

          <View style={styles.textFieldWrapper} marginTop={84}>
            <TextField title='Email'/>
          </View>
 
          <CompButton name="Next" onPress={()=>navigation.navigate('ResetPassword')} marginTop={63}/>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ForgotPassword;
