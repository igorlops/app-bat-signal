import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Touchable, TouchableOpacity, Image } from 'react-native';
import Logo from '../../../assets/logo.png';
import {styles} from './style'
interface ScreenFormProps {
    handleChangeScreen: (int: number) => void;
}

export const ScreenForm = ({ handleChangeScreen }: ScreenFormProps) => {
    const [nome, setNome] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [localizacao, setLocalizacao] = useState<string>('');
    const [observacao, setObservacao] = useState<string>('');
    return (
        <View style={styles.content}>
            <TouchableOpacity onPress={() => handleChangeScreen(1)} style={styles.sectionImg}>
                <Image style={styles.logo} source={Logo}/>
            </TouchableOpacity>
            <Text style={styles.title}>ScreenForm</Text>
            <View style={styles.formContent}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Digite seu nome"
                    onChangeText={newText => setNome(newText)}
                    defaultValue={nome}
                />
                <TextInput
                    style={styles.inputText}
                    placeholder="Digite seu telefone"
                    onChangeText={newText => setTelefone(newText)}
                    defaultValue={telefone}
                />
                <TextInput
                    style={styles.inputTextArea}
                    placeholder="Digite sua localização"
                    onChangeText={newText => setLocalizacao(newText)}
                    defaultValue={localizacao}
                />
                <TextInput
                    style={styles.inputTextArea}
                    placeholder="Digite uma observacao"
                    onChangeText={newText => setObservacao(newText)}
                    defaultValue={observacao}
                />
                <TouchableOpacity onPress={() => handleChangeScreen(1)} style={styles.btnSubmit}>
                    <View>
                        <Text style={{color:'#fff',fontWeight:600,fontSize:20}}>Enviar</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
};