import React, {useState} from 'react';
import {View, SafeAreaView, ImageBackground, Text, Pressable} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Checkbox } from 'react-native-paper';

import { styles } from '../../styles';
import {Title,TextField,CompButton,} from "../../Components/loginSignUpComps";
import {bgImage} from '../../assets/images/index'

const SignUp = ({navigation}) => {
const [checked, setChecked] = useState(false)

  return (
    <SafeAreaView>
      <ImageBackground source={bgImage} resizeMode="cover">
        <LinearGradient colors={["#000000", "#000000"]} style={styles.linearGradient} />

        <View style={styles.containerView}>
          <View style={{alignItems:'center'}} width={274} marginTop={97}>
            <Title
              titleText="Sign Up"
              subTitle="Create new account to begin your
              journey with Crypto Alert"
            />
          </View>

          <View style={styles.textFieldWrapper} marginTop={49}>
            <TextField title='Name'/>
          </View>

          <View style={styles.textFieldWrapper} marginTop={41}>
            <TextField title='Email'/>
          </View>

          <View style={styles.textFieldWrapper} marginTop={41}>
            <TextField title='Password'/>
          </View>
          
          <View style={styles.textFieldWrapper} marginTop={41}>
            <TextField title='Confirm Password'/>
          </View>

          <View style={{flexDirection:'row', marginTop:12}}>
          <View style={{alignItems:'center' ,height:15, width:15, }}>
            <Checkbox color='#9AC938' uncheckedColor='#fff' status={checked ? 'checked' : 'unchecked'} onPress={()=>setChecked(!checked)}/>
          </View>
          <View style={{width:216, height:36, alignItems:'center', paddingLeft:10}}>
            <Text style={styles.pressableText}>I Agree <Text style={styles.pressableSignUp}>privacy policies</Text> and <Text style={styles.pressableSignUp}>Terms and Conditions</Text></Text>
          </View>
          </View>

          <CompButton name="Sign Up" onPress={()=>navigation.navigate('Accounts')} marginTop={59}/>

          <View style={{flexDirection:'row'}} marginTop={11}>
            <Text style={styles.pressableText}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate('Login')} marginLeft={6}>
              <Text style={styles.pressableSignUp}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default SignUp;