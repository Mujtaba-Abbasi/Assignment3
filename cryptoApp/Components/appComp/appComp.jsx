import { Pressable, Image, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { back, dots, deposit, info, noti, user, withdraw } from '../../assets/images/index'
import { styles } from "../appComp/appCompStyles"


export const HeaderComp = ({title}) =>{
  const navigation = useNavigation();
  return(
    <View marginTop={10}>
    <TitleBar title={title} backPress={()=>navigation.goBack()}/>
    </View>
  )
}

export const TitleBar = ({ backPress, title }) => {
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <Pressable onPress={backPress} style={styles.backIcon}>
        <Image style={{ width: 10, height: 8 }} source={back} />
      </Pressable>

      <View style={styles.titleBar}>
        <Text style={styles.titleBarText}>{title}</Text>
        <Pressable onPress={title==='Profile' ? ()=>{navigation.navigate('Profile')} : ()=>{navigation.navigate('Notifications')}}>
          {title === 'Profile' ? <Image source={user} style={styles.titleBarIcon} />
            : <Image source={noti} style={styles.titleBarIcon} />}
        </Pressable>

      </View>
    </React.Fragment>
  )
}

export const PaymentView = () => {
  return (
    <View style={styles.paymentWrapper}>
      <Text style={styles.accountNo}>#92454544</Text>
      <Text style={styles.accountText}>Demo Accounts</Text>

      <View style={styles.paymentSubWrapper}>
        <Text style={styles.moneyText}>10,0000,000.00 USD</Text>
        <Pressable onPress={() => alert('Info Pressed')}>
          <Image source={info} style={{ height: 20, width: 20 }} />
        </Pressable>
      </View>

      <View style={styles.paymentButtonWrappper}>

        <Pressable style={[styles.accountInfoPressable, styles.accountInfoWhite]} onPress={() => alert('Deposit is pressed')}>
          <Image source={deposit} style={{ height: 17, width: 14 }} />
          <Text style={styles.accountInfoPressableText}>Deposit</Text>
        </Pressable>

        <Pressable style={[styles.accountInfoPressable, styles.accountInfoBorder]} onPress={() => alert('Withdraw is presed')}>
          <Image source={withdraw} style={{ height: 14, width: 20 }} />
          <Text style={[styles.accountInfoPressableText, styles.textColor]}>Withdraw</Text>
        </Pressable>

        <Pressable onPress={() => alert('dots are pressed')}>
          <Image source={dots} style={{ height: 20, width: 4.8 }} />
        </Pressable>
      </View>
    </View>
  )
}
