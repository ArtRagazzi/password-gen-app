
import {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';



export function ModalPassword(){

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>
                <Pressable style={styles.innerPassword}>
                    <Text style={styles.text}>123123</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "rgba(24,24,24,0.6)",
        justifyContent:"center",
        alignItems:"center"

    },
    content:{
        backgroundColor:"#FFF",
        width: "85%",
        paddingTop:24,
        paddingBottom:24,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"#274A59",
        marginBottom:24
    },
    innerPassword:{
        backgroundColor:"#6B6D70",
        width:"90%",
        padding:14,
        borderRadius:8
    },
    text:{
        color:"#fff",
        textAlign:"center"
    },
    buttonArea:{
        flexDirection:'row',
        width:"90%",
        marginTop:8,
        alignItems:"center",
        justifyContent:"space-between"

    },
    button:{
        flex:1,
        alignItems:"center",
        marginTop:14,
        marginBottom:14
    }


})