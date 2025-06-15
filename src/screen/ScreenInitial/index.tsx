import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {styles} from './style'
import Logo from '../../../assets/logo.png';

interface ScreenInitialProps {
    handleChangeScreen: (int: number) => void;
}

export const ScreenInitial = ({ handleChangeScreen }: ScreenInitialProps) => {
    return (
        <View style={styles.content}>
            <View>
                <Text style={styles.textTitle}>BAT SIGNAL</Text>
            </View>
            <View>
                <Image style={styles.logo} source={Logo}/>
            </View>
            <TouchableOpacity onPress={() => handleChangeScreen(2)} style={styles.btnSubmit}>
                <View>
                    <Text style={{color:'#fff',fontWeight:600,fontSize:20, textAlign:'center'}}>Enviar</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
