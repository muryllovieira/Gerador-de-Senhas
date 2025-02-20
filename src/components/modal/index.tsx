import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native"
import * as Clipboard from 'expo-clipboard'
import useStorage from "@/src/hooks/useStorage"
export function ModalPassword({ password, handleClose }){

    const {saveItem} = useStorage()

    async function handleCopyPaswword() {
        await Clipboard.setStringAsync(password)
        await saveItem("@pass", password)
        alert('Senha copiada para a área de transferência')

        handleClose();
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPaswword}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPaswword}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    content:{
        backgroundColor: "#fff",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        borderRadius: 8,
        alignItems: "center",
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#00",
        marginBottom: 24,
    },
    innerPassword:{
        backgroundColor: "#0e0e0e",
        width: '90%',
        padding: 14,
        borderRadius: 8,
    },
    text: {
        color: "#fff",
        textAlign: "center",
    },
    buttonArea:{
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
        alignItems: "center"
    },
    button:{
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8
    },
    buttonSave:{
        backgroundColor: "#392DE9",
        borderRadius: 8,
    },
    buttonSaveText:{
        color: "#fff",
        fontWeight: "bold",
    }
})