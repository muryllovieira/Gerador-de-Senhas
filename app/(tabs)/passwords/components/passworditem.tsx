import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function PasswordItem({ data, removePassword, onIconPress }) {
    // Estado para controlar se a senha deve ser visível ou não
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Função de alternância do estado de visibilidade da senha
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
        if (onIconPress) {
            onIconPress(!isPasswordVisible); // Passando o estado de visibilidade para o onIconPress, se necessário
        }
    };

    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{isPasswordVisible ? data : '********'}</Text>
            <Pressable onPress={togglePasswordVisibility}>
                <MaterialCommunityIcons 
                    name={isPasswordVisible ? 'eye' : 'eye-off'} 
                    size={30} 
                    color={"#FFF"} 
                />
            </Pressable>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    text:{
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
    }
});
