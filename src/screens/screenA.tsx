import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function screenA() {
    const navigation = useNavigation();

    function openScreen(){
        navigation.navigate('screenB')
    }
    
  return (
    <View style={styles.container}>
        <Button
            title='Ir para tela B'
            color='red'
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",

    }
})