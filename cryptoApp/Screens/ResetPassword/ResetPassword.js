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

const ResetPassword = ({navigation}) => {
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
              titleText="Reset Password"
              subTitle="      Enter your new password"
            />
          </View>

          <View style={styles.textFieldWrapper} marginTop={41}>
            <TextField title='Password'/>
          </View>
          
          <View style={styles.textFieldWrapper} marginTop={41}>
            <TextField title='Confirm Password'/>
          </View>
 
          <CompButton name="Next" onPress={()=>navigation.navigate('Accounts')} marginTop={63}/>

        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default ResetPassword