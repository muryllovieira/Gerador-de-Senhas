import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export function PasswordItem({ data, removePassword }){
    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{data}</Text>
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
})