import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { ScreenForm } from './src/screen/ScreenForm';
import { ScreenInitial } from './src/screen/ScreenInitial';

export default function App() {
    const [screenAtual, setScreenAtual] = useState(2);

    function handleChangeScreen(setScreen: number) {
        setScreenAtual(setScreen);
    }

    return (
        <View style={styles.container}>
            {screenAtual === 1 ? (
                <ScreenInitial handleChangeScreen={handleChangeScreen} />
            ) : (
                <ScreenForm handleChangeScreen={handleChangeScreen} />
            )}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
});