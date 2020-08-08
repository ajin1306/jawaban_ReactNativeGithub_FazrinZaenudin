import React, {component, Component} from 'react';
import {StyleSheet,View, Image, TouchableOpacity} from 'react-native';
import {Item,Input,Form,Label,Button,Thumbnail,Text} from 'native-base';

import BgImage from '../image/background.jpg';
import Logo from '../image/logo.png';

class LoginForm extends Component{
    constructor(props)
    {
        super (props) ;
    }

render(){
    return(
        <View style={Styles.containerStyle}>
            <Image style={Styles.bgImage} source={BgImage}/>
        </View>
    )
}
}

const Style = StyleSheet.create({
    containerStyle:{
        flex:1
    },
    bgImage:{
        flex:1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
})




export default LoginForm;