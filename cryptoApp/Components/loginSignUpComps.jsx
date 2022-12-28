import { Image, Text, Pressable, TextInput } from 'react-native'
import React from 'react';

import { styles } from '../styles'
import {Email, Name, Password, eye} from '../assets/images/index'

export const Title = ({ titleText, subTitle, }) => {
    return (
        <React.Fragment>
            <Text style={styles.title}>{titleText}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </React.Fragment>
    )
}

export const TextField = ({ title }) => {
    return (
        title === 'Email' ?
            <React.Fragment>
                <Image source={Email} style={styles.iconStyle} />
                <TextInput placeholder={title} style={styles.input} />
            </React.Fragment>
            : title === 'Name' ?
                <React.Fragment>
                    <Image source={Name} style={styles.iconStyle1} />
                    <TextInput placeholder={title} style={styles.input} />
                </React.Fragment>
                :
                <React.Fragment>
                    <Image source={Password} style={styles.iconStyle1} />
                    <TextInput secureTextEntry={true} placeholder={title} style={styles.input} />
                    <Pressable onPress={() => { alert("this is") }}>
                        <Image source={eye} height={14} width={20} style={styles.iconStyle2} />
                    </Pressable>
                </React.Fragment>
    )
}

export const CompButton = ({ name, onPress, marginTop }) => {
    return (
        <Pressable style={styles.buttonStyles} onPress={onPress} marginTop={marginTop}>
            <Text style={styles.buttonStyles.text} >{name}</Text>
        </Pressable>
    )
}
