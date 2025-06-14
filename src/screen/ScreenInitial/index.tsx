import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {styles} from './style'

interface ScreenInitialProps {
    handleChangeScreen: (int: number) => void;
}

export const ScreenInitial = ({ handleChangeScreen }: ScreenInitialProps) => {
    return (
        <View style={styles.content}>
            <Text style={styles.title}>Screen Initial</Text>
            <Button
                title="Activate Signal"
                onPress={() => handleChangeScreen(2)}
            />
        </View>
    );
};
