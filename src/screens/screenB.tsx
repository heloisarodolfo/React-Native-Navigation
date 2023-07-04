import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function screenA() {
    const navigation = useNavigation();

    function openScreen(){
        navigation.navigate('screenA')
    }
    
  return (
    <View style={styles.container}>
        <Button
            title='Voltar para A'
            color='blue'
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",

    }
})